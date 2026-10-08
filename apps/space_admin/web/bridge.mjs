import {request,newKeys,proof} from '/space/identity.mjs';
const origin=location.origin;
async function vault(value,slot=origin) {
  const db=await new Promise((resolve,reject)=>{
    const open=indexedDB.open('space-panel-identity-v1',1);
    open.onupgradeneeded=()=>open.result.createObjectStore('keys');
    open.onsuccess=()=>resolve(open.result);open.onerror=()=>reject(open.error);
  });
  try {return await new Promise((resolve,reject)=>{
    const tx=db.transaction('keys',value?'readwrite':'readonly');
    const operation=value?tx.objectStore('keys').put(value,slot):tx.objectStore('keys').get(slot);
    let result;operation.onsuccess=()=>result=operation.result;
    tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);
  });}finally{db.close();}
}
async function login(create) {
  try {
    if(!isSecureContext || !crypto.subtle || !indexedDB)throw new Error('Нужен безопасный origin браузера');
    const response=await fetch('/.well-known/space-protocol',{cache:'no-store',redirect:'error'});
    if(!response.ok)throw new Error('Discovery недоступен');
    const d=await response.json();
    if(d.protocol_version!=='0.1-experimental' || d.signing_algorithm!=='Ed25519' || !/^srv_[0-9a-f]{32}$/.test(d.server_id) || !/^[A-Za-z0-9_-]{43}$/.test(d.signing_public_key))throw new Error('Сервер несовместим');
    if(await vault(undefined,origin+':rotation'))throw new Error('Завершите сохранённую смену ключа в текущей панели /space');
    let record=await vault();
    if(record&&(record.serverId!==d.server_id||record.serverKey!==d.signing_public_key))throw new Error('Идентичность сервера изменилась. Вход заблокирован');
    if(!record) {
      if(!create)throw new Error('Ключей этого браузера пока нет. Создайте отдельную идентичность или перенесите существующую через текущую панель');
      record={...(await newKeys()),serverId:d.server_id,serverKey:d.signing_public_key};await vault(record);
    }
    if(!record.grantId) {
      if(!record.root.privateKey)throw new Error('Восстановите разрешение устройства в текущей панели');
      const grant=await proof(origin,d,record,'device.register','');record.grantId=grant.grantId;await vault(record);
    }
    const session=await proof(origin,d,record,'auth.login',record.grantId);
    const member=await request(origin,'/api/v1/membership',undefined,session.accessToken);
    return JSON.stringify({origin,serverId:d.server_id,token:session.accessToken,expires:Number(session.expiresAt),principalId:session.principalId,role:member.member.role,blocked:!!member.member.blocked});
  }catch(e){return JSON.stringify({error:e.message||'Вход не выполнен'});}
}
globalThis.spaceAdminIdentity={login,openLegacy:()=>location.assign('/space')};
