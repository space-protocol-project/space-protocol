"""Повторная сверка сохранённых журналов нагрузочного профиля P1."""

import argparse
import gzip
import json
import re
from pathlib import Path


def rows(path):
    if not path.exists():
        path = path.with_suffix(path.suffix + ".gz")
        raw = gzip.decompress(path.read_bytes()).decode("utf-8")
    else:
        raw = path.read_text(encoding="utf-8")
    return [json.loads(line) for line in raw.splitlines()]


def phase_result(requests, phase, clients):
    measured = [r for r in requests if r["Phase"] == phase and not r["Warmup"]]
    successful = sorted(r["Milliseconds"] for r in measured if r["Code"] == "OK")
    assert successful, (phase, "Нет успешных запросов")
    successful_cases = {r["Case"] for r in measured if r["Code"] == "OK"}
    assert {"query", "unique_or_retry", "replay", "independent_command"} <= successful_cases
    result = {
        "phase": phase,
        "clients": clients,
        "requests": len(measured),
        "success": len(successful),
        "all_rps": round(len(measured) / 240, 2),
        "ok_rps": round(len(successful) / 240, 2),
        "codes": {
            code: sum(r["Code"] == code for r in measured)
            for code in sorted({r["Code"] for r in measured})
        },
    }
    for percentile in (50, 95, 99):
        result[f"p{percentile}_ok_ms"] = successful[(len(successful) - 1) * percentile // 100]
    return result


def run_result(folder):
    requests = rows(folder / "requests.jsonl")
    resources = rows(folder / "resources.jsonl")
    events = rows(folder / "tests.jsonl")
    assert not any(e.get("Action") in ("fail", "skip") for e in events), folder
    passed = [e for e in events if e.get("Action") == "pass" and e.get("Test") == "TestExtensionP1Load"]
    assert len(passed) == 1 and passed[0]["Elapsed"] >= 900, folder
    for phase in range(3):
        assert max(r["elapsed_seconds"] for r in resources if r["phase"] == phase) >= 300
    last = resources[-1]["host"]
    assert last["Active"] == last["ReservedBytes"] == resources[-1]["cgroup_processes"] == 0
    assert max(r["cgroup_processes"] for r in resources) > 0
    assert last["OOMKills"] == 0
    summary = json.loads((folder / "summary.json").read_text(encoding="utf-8"))
    return {
        "run": folder.name,
        "elapsed": passed[0]["Elapsed"],
        "committed": summary["committed"],
        "phases": [phase_result(requests, phase, clients) for phase, clients in enumerate((1, 2, 8))],
        "host_peak_bytes": max(r["host"]["PeakBytes"] for r in resources),
        "server_max_rss_kib": max(
            int(re.search(r"VmRSS:\s+(\d+)", line)[1])
            for r in resources for line in r["server_memory"] if line.startswith("VmRSS:")
        ),
        "max_sql_lock_waiters": max(r["db_lock_waiters"] for r in resources),
        "max_pool_total": max(r["pool_total"] for r in resources),
        "max_active": max(r["host"]["Active"] for r in resources),
        "max_observed_processes": max(r["cgroup_processes"] for r in resources),
        "max_reserved_bytes": max(r["host"]["ReservedBytes"] for r in resources),
        "final_host": last,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    args = parser.parse_args()
    folders = sorted(args.directory.glob("p1-load-*"))
    assert len(folders) == 3, "Требуются три независимых прогона"
    result = [run_result(folder) for folder in folders]
    output = json.dumps(result, indent=2) + "\n"
    (args.directory / "analysis.json").write_text(output, encoding="utf-8", newline="\n")
    print(output)


if __name__ == "__main__":
    main()
