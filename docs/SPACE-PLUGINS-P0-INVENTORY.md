# Снимок исходников для P0

Дополнение к [карте перехода](SPACE-PLUGINS-P0.md). Создаётся `python tools/inventory_plugins.py` из зафиксированных HEAD трёх репозиториев. Незакоммиченные правки не включаются. Это статический каталог, не результат запуска тестов.

- `space-protocol`: `ba4f7336add2db3d6b379ea3d8ad2c1df8515713`.
- `space-server`: `78303322c4d99475fafcc6c03cca84aa58462764`.
- `space-app`: `35b0a9e73666f9d91d650a5b23e75da1441539bf`.

## RPC и сервисы

Перечислены все RPC всех контрактов, включая общие службы ядра. Назначение при переносе задаёт основная карта.

### community_favorites.proto

[protocol/proto/space/v1/community_favorites.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/community_favorites.proto)

| Сервис | RPC |
| --- | --- |
| `CommunityFavoriteService` | `GetCommunityFavoriteStates(GetCommunityFavoriteStatesRequest) → GetCommunityFavoriteStatesResponse` |
| `CommunityFavoriteService` | `ListCommunityFavorites(ListCommunityFavoritesRequest) → ListCommunityFavoritesResponse` |
| `CommunityFavoriteService` | `SetCommunityFavorite(SetCommunityFavoriteRequest) → SetCommunityFavoriteResponse` |

### community_mentions.proto

[protocol/proto/space/v1/community_mentions.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/community_mentions.proto)

| Сервис | RPC |
| --- | --- |
| `CommunityMentionService` | `ListMentionCandidates(ListMentionCandidatesRequest) → ListMentionCandidatesResponse` |
| `CommunityMentionService` | `MarkCommunityMentionsRead(MarkCommunityMentionsReadRequest) → MarkCommunityMentionsReadResponse` |

### community_overview.proto

[protocol/proto/space/v1/community_overview.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/community_overview.proto)

| Сервис | RPC |
| --- | --- |
| `CommunityOverviewService` | `GetCommunityOverview(GetCommunityOverviewRequest) → GetCommunityOverviewResponse` |

### community_reactions.proto

[protocol/proto/space/v1/community_reactions.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/community_reactions.proto)

| Сервис | RPC |
| --- | --- |
| `CommunityReactionService` | `ListCommunityReactions(ListCommunityReactionsRequest) → ListCommunityReactionsResponse` |
| `CommunityReactionService` | `SetCommunityReaction(SetCommunityReactionRequest) → SetCommunityReactionResponse` |

### community_search.proto

[protocol/proto/space/v1/community_search.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/community_search.proto)

| Сервис | RPC |
| --- | --- |
| `CommunitySearchService` | `SearchCommunityContent(SearchCommunityContentRequest) → SearchCommunityContentResponse` |

### directory_pairing.proto

[protocol/proto/space/v1/directory_pairing.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/directory_pairing.proto)

| Сервис | RPC |
| --- | --- |
| `DirectoryPairingService` | `CreateDirectoryTransfer(CreateDirectoryTransferRequest) → CreateDirectoryTransferResponse` |
| `DirectoryPairingService` | `OpenDirectoryTransfer(OpenDirectoryTransferRequest) → OpenDirectoryTransferResponse` |
| `DirectoryPairingService` | `WriteDirectoryFrame(WriteDirectoryFrameRequest) → WriteDirectoryFrameResponse` |
| `DirectoryPairingService` | `ReadDirectoryFrame(ReadDirectoryFrameRequest) → ReadDirectoryFrameResponse` |
| `DirectoryPairingService` | `CloseDirectoryTransfer(CloseDirectoryTransferRequest) → CloseDirectoryTransferResponse` |

### feed.proto

[protocol/proto/space/v1/feed.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/feed.proto)

| Сервис | RPC |
| --- | --- |
| `FeedService` | `ListFeedPosts(ListFeedPostsRequest) → ListFeedPostsResponse` |
| `FeedService` | `GetFeedPost(GetFeedPostRequest) → GetFeedPostResponse` |
| `FeedService` | `CreateFeedPost(CreateFeedPostRequest) → CreateFeedPostResponse` |
| `FeedService` | `CommentFeedPost(CommentFeedPostRequest) → CommentFeedPostResponse` |
| `FeedService` | `GetFeedAccess(GetFeedAccessRequest) → GetFeedAccessResponse` |
| `FeedService` | `UpdateFeedAccess(UpdateFeedAccessRequest) → UpdateFeedAccessResponse` |
| `FeedService` | `ModerateFeedPost(ModerateFeedPostRequest) → ModerateFeedPostResponse` |
| `FeedService` | `ModerateFeedComment(ModerateFeedCommentRequest) → ModerateFeedCommentResponse` |
| `FeedService` | `ListFeedModeration(ListFeedModerationRequest) → ListFeedModerationResponse` |
| `FeedService` | `ReportFeedContent(ReportFeedContentRequest) → ReportFeedContentResponse` |
| `FeedService` | `ListFeedReports(ListFeedReportsRequest) → ListFeedReportsResponse` |
| `FeedService` | `ResolveFeedReport(ResolveFeedReportRequest) → ResolveFeedReportResponse` |
| `FeedService` | `MarkFeedPostRead(MarkFeedPostReadRequest) → MarkFeedPostReadResponse` |

### forum.proto

[protocol/proto/space/v1/forum.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/forum.proto)

| Сервис | RPC |
| --- | --- |
| `ForumService` | `ReportForumContent(ReportForumContentRequest) → ReportForumContentResponse` |
| `ForumService` | `ListForumReports(ListForumReportsRequest) → ListForumReportsResponse` |
| `ForumService` | `ResolveForumReport(ResolveForumReportRequest) → ResolveForumReportResponse` |
| `ForumService` | `ListForumThreads(ListForumThreadsRequest) → ListForumThreadsResponse` |
| `ForumService` | `GetForumThread(GetForumThreadRequest) → GetForumThreadResponse` |
| `ForumService` | `CreateForumThread(CreateForumThreadRequest) → CreateForumThreadResponse` |
| `ForumService` | `ReplyForumThread(ReplyForumThreadRequest) → ReplyForumThreadResponse` |
| `ForumService` | `SetForumThreadPinned(SetForumThreadPinnedRequest) → SetForumThreadPinnedResponse` |
| `ForumService` | `MarkForumThreadRead(MarkForumThreadReadRequest) → MarkForumThreadReadResponse` |
| `ForumService` | `CloseForumThread(CloseForumThreadRequest) → CloseForumThreadResponse` |
| `ForumService` | `ModerateForumThread(ModerateForumThreadRequest) → ModerateForumThreadResponse` |
| `ForumService` | `ModerateForumReply(ModerateForumReplyRequest) → ModerateForumReplyResponse` |
| `ForumService` | `ListForumModeration(ListForumModerationRequest) → ListForumModerationResponse` |

### participant_follows.proto

[protocol/proto/space/v1/participant_follows.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/participant_follows.proto)

| Сервис | RPC |
| --- | --- |
| `ParticipantFollowService` | `GetParticipantFollowStates(GetParticipantFollowStatesRequest) → GetParticipantFollowStatesResponse` |
| `ParticipantFollowService` | `SetParticipantFollow(SetParticipantFollowRequest) → SetParticipantFollowResponse` |
| `ParticipantFollowService` | `ListFollowingParticipants(ListFollowingParticipantsRequest) → ListFollowingParticipantsResponse` |
| `ParticipantFollowService` | `ListPersonalFeed(ListPersonalFeedRequest) → ListPersonalFeedResponse` |

### personal_notifications.proto

[protocol/proto/space/v1/personal_notifications.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/personal_notifications.proto)

| Сервис | RPC |
| --- | --- |
| `PersonalNotificationService` | `ListPersonalNotifications(ListPersonalNotificationsRequest) → ListPersonalNotificationsResponse` |
| `PersonalNotificationService` | `MarkPersonalNotificationsRead(MarkPersonalNotificationsReadRequest) → MarkPersonalNotificationsReadResponse` |

### remote_backup.proto

[protocol/proto/space/v1/remote_backup.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/remote_backup.proto)

| Сервис | RPC |
| --- | --- |
| `RemoteBackupService` | `CreateBackupSlot(CreateBackupSlotRequest) → CreateBackupSlotResponse` |
| `RemoteBackupService` | `RevokeBackupSlot(RevokeBackupSlotRequest) → RevokeBackupSlotResponse` |
| `RemoteBackupService` | `PutBackup(PutBackupRequest) → PutBackupResponse` |
| `RemoteBackupService` | `GetBackup(GetBackupRequest) → GetBackupResponse` |
| `RemoteBackupService` | `ReadBackupHead(ReadBackupHeadRequest) → ReadBackupHeadResponse` |

### space.proto

[protocol/proto/space/v1/space.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/space.proto)

| Сервис | RPC |
| --- | --- |
| `ChannelService` | `WatchChannels(WatchChannelsRequest) → stream WatchChannelsResponse` |
| `ChannelService` | `ListChannels(ListChannelsRequest) → ListChannelsResponse` |
| `ChannelService` | `CreateChannel(CreateChannelRequest) → CreateChannelResponse` |
| `ChannelService` | `UpdateChannel(UpdateChannelRequest) → UpdateChannelResponse` |
| `ChannelService` | `DeleteChannel(DeleteChannelRequest) → DeleteChannelResponse` |
| `ChannelService` | `GetChannelAccess(GetChannelAccessRequest) → GetChannelAccessResponse` |
| `ChannelService` | `UpdateChannelAccess(UpdateChannelAccessRequest) → UpdateChannelAccessResponse` |
| `ChannelService` | `GetManifest(GetManifestRequest) → GetManifestResponse` |
| `ContentService` | `GetHistoryPage(GetHistoryPageRequest) → GetHistoryPageResponse` |
| `ContentService` | `SearchContent(SearchContentRequest) → SearchContentResponse` |
| `ContentService` | `ApplyContentMutation(ApplyContentMutationRequest) → ApplyContentMutationResponse` |
| `ContentService` | `SetReaction(SetReactionRequest) → SetReactionResponse` |
| `ContentService` | `UpdateContent(UpdateContentRequest) → UpdateContentResponse` |
| `ContentService` | `DeleteContent(DeleteContentRequest) → DeleteContentResponse` |
| `ContentService` | `CreateContent(CreateContentRequest) → CreateContentResponse` |
| `ContentService` | `ListContent(ListContentRequest) → ListContentResponse` |
| `AssetService` | `BeginUpload(BeginUploadRequest) → BeginUploadResponse` |
| `AssetService` | `UploadChunk(UploadChunkRequest) → UploadChunkResponse` |
| `AssetService` | `CompleteUpload(CompleteUploadRequest) → CompleteUploadResponse` |
| `AssetService` | `CancelUpload(CancelUploadRequest) → CancelUploadResponse` |
| `AssetService` | `DownloadChunk(DownloadChunkRequest) → DownloadChunkResponse` |
| `AssetService` | `ListMyAssets(ListMyAssetsRequest) → ListMyAssetsResponse` |
| `AssetService` | `ListChannelAssets(ListChannelAssetsRequest) → ListChannelAssetsResponse` |
| `AuthService` | `CreateRootRotation(CreateRootRotationRequest) → CreateRootRotationResponse` |
| `AuthService` | `CompleteRootRotation(CompleteRootRotationRequest) → CompleteRootRotationResponse` |
| `AuthService` | `ProposePairing(ProposePairingRequest) → ProposePairingResponse` |
| `AuthService` | `CreatePairing(CreatePairingRequest) → CreatePairingResponse` |
| `AuthService` | `InspectPairing(InspectPairingRequest) → InspectPairingResponse` |
| `AuthService` | `PollPairing(PollPairingRequest) → PollPairingResponse` |
| `AuthService` | `CancelPairing(CancelPairingRequest) → CancelPairingResponse` |
| `AuthService` | `ClaimPairing(ClaimPairingRequest) → ClaimPairingResponse` |
| `AuthService` | `RevokeCurrentDevice(RevokeCurrentDeviceRequest) → RevokeCurrentDeviceResponse` |
| `AuthService` | `ListDevices(ListDevicesRequest) → ListDevicesResponse` |
| `AuthService` | `Logout(LogoutRequest) → LogoutResponse` |
| `AuthService` | `CreateChallenge(CreateChallengeRequest) → CreateChallengeResponse` |
| `AuthService` | `CompleteChallenge(CompleteChallengeRequest) → CompleteChallengeResponse` |
| `SyncService` | `Subscribe(SubscribeRequest) → stream SubscribeResponse` |
| `SyncService` | `ListEvents(ListEventsRequest) → ListEventsResponse` |
| `AdminService` | `ListMembers(ListMembersRequest) → ListMembersResponse` |
| `AdminService` | `UpdateMember(UpdateMemberRequest) → UpdateMemberResponse` |
| `AdminService` | `CreateInvite(CreateInviteRequest) → CreateInviteResponse` |
| `AdminService` | `ListInvites(ListInvitesRequest) → ListInvitesResponse` |
| `AdminService` | `RevokeInvite(RevokeInviteRequest) → RevokeInviteResponse` |
| `AdminService` | `GetSetupStatus(GetSetupStatusRequest) → GetSetupStatusResponse` |
| `AdminService` | `ClaimOwner(ClaimOwnerRequest) → ClaimOwnerResponse` |
| `AdminService` | `GetSettings(GetSettingsRequest) → GetSettingsResponse` |
| `AdminService` | `UpdateSettings(UpdateSettingsRequest) → UpdateSettingsResponse` |
| `MembershipService` | `GetParticipantProfile(GetParticipantProfileRequest) → GetParticipantProfileResponse` |
| `MembershipService` | `UpdateParticipantProfile(UpdateParticipantProfileRequest) → UpdateParticipantProfileResponse` |
| `MembershipService` | `ListParticipantProfiles(ListParticipantProfilesRequest) → ListParticipantProfilesResponse` |
| `MembershipService` | `PreviewInvite(PreviewInviteRequest) → PreviewInviteResponse` |
| `MembershipService` | `AcceptInvite(AcceptInviteRequest) → AcceptInviteResponse` |
| `MembershipService` | `GetMembership(GetMembershipRequest) → GetMembershipResponse` |
| `MlsService` | `RegisterMlsDevice(RegisterMlsDeviceRequest) → RegisterMlsDeviceResponse` |
| `MlsService` | `ListMlsDevices(ListMlsDevicesRequest) → ListMlsDevicesResponse` |
| `MlsService` | `GetMlsChannel(GetMlsChannelRequest) → GetMlsChannelResponse` |
| `MlsService` | `PublishMls(PublishMlsRequest) → PublishMlsResponse` |
| `MlsService` | `ListMlsEnvelopes(ListMlsEnvelopesRequest) → ListMlsEnvelopesResponse` |

### space_search.proto

[protocol/proto/space/v1/space_search.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/space_search.proto)

| Сервис | RPC |
| --- | --- |
| `SpaceSearchService` | `SearchSpace(SearchSpaceRequest) → SearchSpaceResponse` |

### user_export.proto

[protocol/proto/space/v1/user_export.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/user_export.proto)

| Сервис | RPC |
| --- | --- |
| `UserExportService` | `ExportUserContent(ExportUserContentRequest) → ExportUserContentResponse` |

### voice.proto

[protocol/proto/space/v1/voice.proto](https://github.com/space-protocol-project/space-protocol/blob/ba4f7336add2db3d6b379ea3d8ad2c1df8515713/protocol/proto/space/v1/voice.proto)

| Сервис | RPC |
| --- | --- |
| `VoiceService` | `GetVoiceConfiguration(GetVoiceConfigurationRequest) → GetVoiceConfigurationResponse` |
| `VoiceService` | `JoinVoiceRoom(JoinVoiceRoomRequest) → JoinVoiceRoomResponse` |
| `VoiceService` | `UpdateVoiceRoom(UpdateVoiceRoomRequest) → UpdateVoiceRoomResponse` |
| `VoiceService` | `LeaveVoiceRoom(LeaveVoiceRoomRequest) → LeaveVoiceRoomResponse` |
| `VoiceService` | `GetVoiceRoom(GetVoiceRoomRequest) → GetVoiceRoomResponse` |

## Миграции и объекты SQL

Все миграции перечислены, включая общую инфраструктуру. Имена взяты из CREATE/ALTER/DROP; ограничения, внешние ключи и определения индексов доступны по ссылке на полный SQL. Это история DDL, не дамп живой БД.

| Миграция | Создаваемые таблицы | Изменяемые таблицы | Именованные индексы |
| --- | --- | --- | --- |
| [internal/postgres/migrations/001_initial.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/001_initial.sql) | `channels`, `contents`, `server_state` | — | — |
| [internal/postgres/migrations/002_events_auth.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/002_events_auth.sql) | `auth_challenges`, `auth_sessions`, `device_grants`, `events`, `principals` | `contents` | `auth_challenges_expiry`, `auth_sessions_grant` |
| [internal/postgres/migrations/003_space_settings.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/003_space_settings.sql) | `admin_audit`, `space_settings` | `device_grants` | — |
| [internal/postgres/migrations/004_membership.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/004_membership.sql) | `invitation_redemptions`, `invitations`, `memberships` | — | — |
| [internal/postgres/migrations/005_recovery.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/005_recovery.sql) | — | `auth_challenges`, `device_grants` | `device_grants_parent` |
| [internal/postgres/migrations/006_pairing.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/006_pairing.sql) | `device_pairings` | — | `device_pairings_expiry` |
| [internal/postgres/migrations/007_root_rotation.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/007_root_rotation.sql) | `principal_roots`, `root_rotations` | `device_grants` | — |
| [internal/postgres/migrations/008_channels.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/008_channels.sql) | `channel_access` | `channels` | `channels_order` |
| [internal/postgres/migrations/009_first_owner.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/009_first_owner.sql) | — | `space_settings` | — |
| [internal/postgres/migrations/010_message_time.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/010_message_time.sql) | — | `contents` | — |
| [internal/postgres/migrations/011_server_icon.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/011_server_icon.sql) | — | `space_settings` | — |
| [internal/postgres/migrations/012_content_changes.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/012_content_changes.sql) | — | `channels`, `contents`, `events` | — |
| [internal/postgres/migrations/013_assets.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/013_assets.sql) | `asset_chunks`, `assets` | `contents`, `memberships`, `space_settings` | `assets_author_date`, `assets_pending_date` |
| [internal/postgres/migrations/014_attachment_policy.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/014_attachment_policy.sql) | — | `space_settings` | — |
| [internal/postgres/migrations/015_mls.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/015_mls.sql) | `mls_channels`, `mls_devices`, `mls_envelopes`, `mls_members` | `assets`, `channels` | `channels_mls_group` |
| [internal/postgres/migrations/016_mls_management.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/016_mls_management.sql) | `mls_device_routes` | `mls_channels` | — |
| [internal/postgres/migrations/017_root_retention.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/017_root_retention.sql) | — | `device_grants`, `root_rotations` | — |
| [internal/postgres/migrations/018_reactions.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/018_reactions.sql) | — | `contents` | — |
| [internal/postgres/migrations/019_content_mutations.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/019_content_mutations.sql) | `content_mutations` | — | — |
| [internal/postgres/migrations/020_content_replies.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/020_content_replies.sql) | — | `contents` | — |
| [internal/postgres/migrations/021_content_search_index.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/021_content_search_index.sql) | — | `contents` | `contents_search_terms_v1` |
| [internal/postgres/migrations/022_private_push.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/022_private_push.sql) | `push_queue`, `push_registrations` | `auth_sessions`, `mls_envelopes` | — |
| [internal/postgres/migrations/023_voice_rooms.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/023_voice_rooms.sql) | — | `channels` | — |
| [internal/postgres/migrations/024_attachment_default.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/024_attachment_default.sql) | — | `space_settings` | — |
| [internal/postgres/migrations/025_voice_capacity.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/025_voice_capacity.sql) | — | `channels` | — |
| [internal/postgres/migrations/026_forum.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/026_forum.sql) | `forum_replies`, `forum_threads` | `channels` | — |
| [internal/postgres/migrations/027_forum_attachments.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/027_forum_attachments.sql) | — | `assets`, `forum_replies`, `forum_threads` | — |
| [internal/postgres/migrations/028_forum_navigation.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/028_forum_navigation.sql) | `forum_read_state` | `forum_threads` | `forum_threads_pinned_page` |
| [internal/postgres/migrations/029_forum_moderation.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/029_forum_moderation.sql) | `forum_moderation` | `forum_replies`, `forum_threads` | `forum_moderation_page` |
| [internal/postgres/migrations/030_forum_reports.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/030_forum_reports.sql) | `forum_reports` | `forum_moderation` | `forum_reports_page` |
| [internal/postgres/migrations/031_feed.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/031_feed.sql) | `feed_access`, `feed_comments`, `feed_moderation`, `feed_posts`, `feed_reports` | `assets`, `channels` | `feed_moderation_page`, `feed_reports_page` |
| [internal/postgres/migrations/032_community_search.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/032_community_search.sql) | — | `feed_comments`, `feed_posts`, `forum_replies`, `forum_threads` | `feed_comments_search_terms`, `feed_posts_search_terms`, `forum_replies_search_terms`, `forum_threads_search_terms` |
| [internal/postgres/migrations/033_feed_read.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/033_feed_read.sql) | `feed_read_state` | — | `feed_comments_unread` |
| [internal/postgres/migrations/034_community_mentions.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/034_community_mentions.sql) | `community_mentions` | `feed_comments`, `feed_posts`, `forum_replies`, `forum_threads` | `community_mentions_budget`, `community_mentions_unread` |
| [internal/postgres/migrations/035_chat_mentions.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/035_chat_mentions.sql) | — | `contents` | — |
| [internal/postgres/migrations/036_personal_notifications.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/036_personal_notifications.sql) | `personal_notification_streams`, `personal_notifications` | — | `personal_notifications_budget`, `personal_notifications_content` |
| [internal/postgres/migrations/037_participant_profile.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/037_participant_profile.sql) | — | `memberships` | — |
| [internal/postgres/migrations/038_community_reactions.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/038_community_reactions.sql) | `community_reaction_requests`, `community_reaction_targets`, `community_reactions` | — | `community_reaction_request_budget` |
| [internal/postgres/migrations/039_community_favorites.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/039_community_favorites.sql) | `community_favorite_requests`, `community_favorites` | — | `community_favorite_request_budget`, `community_favorites_page` |
| [internal/postgres/migrations/040_feed_social.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/040_feed_social.sql) | — | `feed_comments`, `feed_posts` | `feed_posts_repost` |
| [internal/postgres/migrations/041_participant_follows.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/041_participant_follows.sql) | `participant_follow_versions`, `participant_follows` | — | `feed_comments_follow_author`, `feed_posts_follow_author`, `feed_posts_personal_page` |
| [internal/postgres/migrations/042_pairing_modes.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/042_pairing_modes.sql) | — | `device_pairings` | — |
| [internal/postgres/migrations/043_directory_pairing.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/043_directory_pairing.sql) | `directory_transfer_frames`, `directory_transfers` | — | `directory_transfers_expiry` |
| [internal/postgres/migrations/044_remote_backup.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/044_remote_backup.sql) | `remote_backup_slots`, `remote_backup_versions` | — | — |
| [internal/postgres/migrations/045_space_backup.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/045_space_backup.sql) | — | `remote_backup_slots` | — |
| [internal/postgres/migrations/046_backup_retention.sql](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/migrations/046_backup_retention.sql) | — | `remote_backup_versions` | — |

## Каталог реализации и проверок

В каталог включены общие зависимости, чтобы не ограничивать поиск файлами с названием функции. Генерируемый и сторонний код исключён. Наличие тестового файла не означает успешного прогона.

### space-server / internal/postgres/

- [internal/postgres/admin.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/admin.go)
- [internal/postgres/admin_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/admin_test.go)
- [internal/postgres/asset_completion.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/asset_completion.go)
- [internal/postgres/asset_download.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/asset_download.go)
- [internal/postgres/asset_validation.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/asset_validation.go)
- [internal/postgres/asset_validation_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/asset_validation_test.go)
- [internal/postgres/assets.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/assets.go)
- [internal/postgres/assets_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/assets_test.go)
- [internal/postgres/assets_upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/assets_upgrade_test.go)
- [internal/postgres/attachment_policy_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/attachment_policy_test.go)
- [internal/postgres/auth.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/auth.go)
- [internal/postgres/auth_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/auth_test.go)
- [internal/postgres/challenge.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/challenge.go)
- [internal/postgres/challenge_request_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/challenge_request_test.go)
- [internal/postgres/channel_assets.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/channel_assets.go)
- [internal/postgres/channel_watch.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/channel_watch.go)
- [internal/postgres/channel_watch_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/channel_watch_test.go)
- [internal/postgres/channels.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/channels.go)
- [internal/postgres/channels_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/channels_test.go)
- [internal/postgres/chat_mentions.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/chat_mentions.go)
- [internal/postgres/chat_mentions_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/chat_mentions_test.go)
- [internal/postgres/community_favorite_read.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_favorite_read.go)
- [internal/postgres/community_favorite_security_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_favorite_security_test.go)
- [internal/postgres/community_favorite_write.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_favorite_write.go)
- [internal/postgres/community_favorites_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_favorites_test.go)
- [internal/postgres/community_favorites_upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_favorites_upgrade_test.go)
- [internal/postgres/community_mention_overview.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_mention_overview.go)
- [internal/postgres/community_mention_service.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_mention_service.go)
- [internal/postgres/community_mentions.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_mentions.go)
- [internal/postgres/community_mentions_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_mentions_test.go)
- [internal/postgres/community_overview.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_overview.go)
- [internal/postgres/community_overview_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_overview_test.go)
- [internal/postgres/community_reaction_access.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_reaction_access.go)
- [internal/postgres/community_reaction_read.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_reaction_read.go)
- [internal/postgres/community_reaction_write.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_reaction_write.go)
- [internal/postgres/community_reactions_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_reactions_test.go)
- [internal/postgres/community_reactions_upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_reactions_upgrade_test.go)
- [internal/postgres/community_search.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_search.go)
- [internal/postgres/community_search_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/community_search_test.go)
- [internal/postgres/compatibility.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/compatibility.go)
- [internal/postgres/compatibility_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/compatibility_test.go)
- [internal/postgres/content_assets.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_assets.go)
- [internal/postgres/content_changes.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_changes.go)
- [internal/postgres/content_changes_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_changes_test.go)
- [internal/postgres/content_history.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_history.go)
- [internal/postgres/content_history_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_history_test.go)
- [internal/postgres/content_mutations.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_mutations.go)
- [internal/postgres/content_mutations_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_mutations_test.go)
- [internal/postgres/content_names.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_names.go)
- [internal/postgres/content_names_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_names_test.go)
- [internal/postgres/content_replies.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_replies.go)
- [internal/postgres/content_replies_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_replies_test.go)
- [internal/postgres/content_search.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_search.go)
- [internal/postgres/content_search_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/content_search_test.go)
- [internal/postgres/directory_pairing.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/directory_pairing.go)
- [internal/postgres/directory_pairing_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/directory_pairing_test.go)
- [internal/postgres/events.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/events.go)
- [internal/postgres/feed.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed.go)
- [internal/postgres/feed_access.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_access.go)
- [internal/postgres/feed_moderation.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_moderation.go)
- [internal/postgres/feed_read.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_read.go)
- [internal/postgres/feed_read_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_read_test.go)
- [internal/postgres/feed_reports.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_reports.go)
- [internal/postgres/feed_social.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_social.go)
- [internal/postgres/feed_social_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_social_test.go)
- [internal/postgres/feed_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/feed_test.go)
- [internal/postgres/first_owner_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/first_owner_test.go)
- [internal/postgres/forum.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum.go)
- [internal/postgres/forum_asset_visibility.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_asset_visibility.go)
- [internal/postgres/forum_moderation.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_moderation.go)
- [internal/postgres/forum_moderation_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_moderation_test.go)
- [internal/postgres/forum_navigation.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_navigation.go)
- [internal/postgres/forum_navigation_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_navigation_test.go)
- [internal/postgres/forum_reports.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_reports.go)
- [internal/postgres/forum_reports_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_reports_test.go)
- [internal/postgres/forum_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/forum_test.go)
- [internal/postgres/home.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/home.go)
- [internal/postgres/membership.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/membership.go)
- [internal/postgres/membership_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/membership_test.go)
- [internal/postgres/mls_assets.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_assets.go)
- [internal/postgres/mls_channels.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_channels.go)
- [internal/postgres/mls_devices.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_devices.go)
- [internal/postgres/mls_history.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_history.go)
- [internal/postgres/mls_lifecycle.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_lifecycle.go)
- [internal/postgres/mls_management.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_management.go)
- [internal/postgres/mls_pagination_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_pagination_test.go)
- [internal/postgres/mls_publish.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_publish.go)
- [internal/postgres/mls_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_test.go)
- [internal/postgres/mls_update_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/mls_update_test.go)
- [internal/postgres/origin_binding.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/origin_binding.go)
- [internal/postgres/pairing.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/pairing.go)
- [internal/postgres/pairing_modes_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/pairing_modes_test.go)
- [internal/postgres/pairing_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/pairing_test.go)
- [internal/postgres/participant_avatar.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_avatar.go)
- [internal/postgres/participant_follows_access.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_access.go)
- [internal/postgres/participant_follows_cursor.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_cursor.go)
- [internal/postgres/participant_follows_read.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_read.go)
- [internal/postgres/participant_follows_security_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_security_test.go)
- [internal/postgres/participant_follows_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_test.go)
- [internal/postgres/participant_follows_write.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_follows_write.go)
- [internal/postgres/participant_profile_upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_profile_upgrade_test.go)
- [internal/postgres/participant_profiles.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_profiles.go)
- [internal/postgres/participant_profiles_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/participant_profiles_test.go)
- [internal/postgres/personal_feed.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_feed.go)
- [internal/postgres/personal_notification_access_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notification_access_test.go)
- [internal/postgres/personal_notification_budget.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notification_budget.go)
- [internal/postgres/personal_notification_rows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notification_rows.go)
- [internal/postgres/personal_notification_upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notification_upgrade_test.go)
- [internal/postgres/personal_notifications.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notifications.go)
- [internal/postgres/personal_notifications_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/personal_notifications_test.go)
- [internal/postgres/profile.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/profile.go)
- [internal/postgres/push_http.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/push_http.go)
- [internal/postgres/push_http_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/push_http_test.go)
- [internal/postgres/reactions.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/reactions.go)
- [internal/postgres/reactions_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/reactions_test.go)
- [internal/postgres/recovery.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/recovery.go)
- [internal/postgres/recovery_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/recovery_test.go)
- [internal/postgres/remote_backup.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/remote_backup.go)
- [internal/postgres/remote_backup_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/remote_backup_test.go)
- [internal/postgres/retention_devices.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/retention_devices.go)
- [internal/postgres/retention_order_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/retention_order_test.go)
- [internal/postgres/root_retention.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/root_retention.go)
- [internal/postgres/root_retention_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/root_retention_test.go)
- [internal/postgres/rotation.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/rotation.go)
- [internal/postgres/rotation_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/rotation_test.go)
- [internal/postgres/search_scale_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/search_scale_test.go)
- [internal/postgres/server_icon.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/server_icon.go)
- [internal/postgres/server_icon_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/server_icon_test.go)
- [internal/postgres/space_search.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/space_search.go)
- [internal/postgres/space_search_access.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/space_search_access.go)
- [internal/postgres/space_search_cursor.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/space_search_cursor.go)
- [internal/postgres/space_search_security_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/space_search_security_test.go)
- [internal/postgres/space_search_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/space_search_test.go)
- [internal/postgres/store.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/store.go)
- [internal/postgres/store_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/store_test.go)
- [internal/postgres/stream_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/stream_test.go)
- [internal/postgres/subscribe.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/subscribe.go)
- [internal/postgres/unread_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/unread_test.go)
- [internal/postgres/upgrade_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/upgrade_test.go)
- [internal/postgres/user_export.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/user_export.go)
- [internal/postgres/user_export_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/user_export_test.go)
- [internal/postgres/voice.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/voice.go)
- [internal/postgres/voice_capacity_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/voice_capacity_test.go)
- [internal/postgres/voice_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/postgres/voice_test.go)

### space-server / internal/voice/

- [internal/voice/capacity_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/capacity_test.go)
- [internal/voice/group_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/group_test.go)
- [internal/voice/media.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/media.go)
- [internal/voice/network.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/network.go)
- [internal/voice/network_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/network_test.go)
- [internal/voice/opus.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/opus.go)
- [internal/voice/opus_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/opus_test.go)
- [internal/voice/output.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/output.go)
- [internal/voice/rooms.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/rooms.go)
- [internal/voice/rooms_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/rooms_test.go)
- [internal/voice/service.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/service.go)
- [internal/voice/service_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/service_test.go)
- [internal/voice/turnfixture/server.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/voice/turnfixture/server.go)

### space-server / internal/authn/

- [internal/authn/profile.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/authn/profile.go)
- [internal/authn/profile_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/authn/profile_test.go)

### space-server / internal/transport/

- [internal/transport/connect.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect.go)
- [internal/transport/connect_assets.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_assets.go)
- [internal/transport/connect_community_favorites.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_community_favorites.go)
- [internal/transport/connect_community_mentions.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_community_mentions.go)
- [internal/transport/connect_community_overview.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_community_overview.go)
- [internal/transport/connect_community_reactions.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_community_reactions.go)
- [internal/transport/connect_community_search.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_community_search.go)
- [internal/transport/connect_directory_pairing.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_directory_pairing.go)
- [internal/transport/connect_feed.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_feed.go)
- [internal/transport/connect_forum.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_forum.go)
- [internal/transport/connect_mls.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_mls.go)
- [internal/transport/connect_participant_follows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_participant_follows.go)
- [internal/transport/connect_personal_notifications.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_personal_notifications.go)
- [internal/transport/connect_remote_backup.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_remote_backup.go)
- [internal/transport/connect_space_search.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_space_search.go)
- [internal/transport/connect_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_test.go)
- [internal/transport/connect_user_export.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_user_export.go)
- [internal/transport/connect_voice.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/connect_voice.go)
- [internal/transport/http.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/http.go)
- [internal/transport/http_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/http_test.go)
- [internal/transport/message_limits.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/message_limits.go)
- [internal/transport/message_limits_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/message_limits_test.go)
- [internal/transport/origin.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/origin.go)
- [internal/transport/origin_binding.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/origin_binding.go)
- [internal/transport/origin_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/transport/origin_test.go)

### space-server / internal/push/

- [internal/push/android_vector_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/push/android_vector_test.go)
- [internal/push/envelope.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/push/envelope.go)
- [internal/push/envelope_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/push/envelope_test.go)

### space-server / internal/home/

- [internal/home/automatic_doctor.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/automatic_doctor.go)
- [internal/home/automatic_network.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/automatic_network.go)
- [internal/home/automatic_network_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/automatic_network_test.go)
- [internal/home/backup.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup.go)
- [internal/home/backup_path_other.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_path_other.go)
- [internal/home/backup_path_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_path_test.go)
- [internal/home/backup_path_windows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_path_windows.go)
- [internal/home/backup_path_windows_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_path_windows_test.go)
- [internal/home/backup_permissions_other.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_permissions_other.go)
- [internal/home/backup_permissions_windows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_permissions_windows.go)
- [internal/home/backup_permissions_windows_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_permissions_windows_test.go)
- [internal/home/backup_policy.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_policy.go)
- [internal/home/backup_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/backup_test.go)
- [internal/home/certificate.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/certificate.go)
- [internal/home/certificate_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/certificate_test.go)
- [internal/home/compatibility.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/compatibility.go)
- [internal/home/compatibility_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/compatibility_test.go)
- [internal/home/disk_space_other.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/disk_space_other.go)
- [internal/home/disk_space_unix.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/disk_space_unix.go)
- [internal/home/disk_space_windows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/disk_space_windows.go)
- [internal/home/doctor.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/doctor.go)
- [internal/home/doctor_probe.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/doctor_probe.go)
- [internal/home/doctor_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/doctor_test.go)
- [internal/home/doctor_text.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/doctor_text.go)
- [internal/home/endpoints.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/endpoints.go)
- [internal/home/endpoints_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/endpoints_test.go)
- [internal/home/identity_origin.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/identity_origin.go)
- [internal/home/network_witness.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness.go)
- [internal/home/network_witness_http.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness_http.go)
- [internal/home/network_witness_http_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness_http_test.go)
- [internal/home/network_witness_netns_linux_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness_netns_linux_test.go)
- [internal/home/network_witness_policy.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness_policy.go)
- [internal/home/network_witness_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/network_witness_test.go)
- [internal/home/portable.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/portable.go)
- [internal/home/portable_inspect.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/portable_inspect.go)
- [internal/home/portable_inspect_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/portable_inspect_test.go)
- [internal/home/portable_size.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/portable_size.go)
- [internal/home/portable_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/portable_test.go)
- [internal/home/publish_rename.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/publish_rename.go)
- [internal/home/publish_rename_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/publish_rename_test.go)
- [internal/home/runtime.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/runtime.go)
- [internal/home/runtime_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/runtime_test.go)
- [internal/home/scheduled_archives.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_archives.go)
- [internal/home/scheduled_backups.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_backups.go)
- [internal/home/scheduled_backups_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_backups_test.go)
- [internal/home/scheduled_export.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_export.go)
- [internal/home/scheduled_live_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_live_test.go)
- [internal/home/scheduled_retention_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/scheduled_retention_test.go)
- [internal/home/update.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/update.go)
- [internal/home/window_other.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/window_other.go)
- [internal/home/window_windows.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/internal/home/window_windows.go)

### space-server / cmd/

- [cmd/space-demo/main.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-demo/main.go)
- [cmd/space-server/doctor.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/doctor.go)
- [cmd/space-server/doctor_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/doctor_test.go)
- [cmd/space-server/live_network.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/live_network.go)
- [cmd/space-server/live_network_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/live_network_test.go)
- [cmd/space-server/main.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/main.go)
- [cmd/space-server/main_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/main_test.go)
- [cmd/space-server/network_witness.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/network_witness.go)
- [cmd/space-server/origin_binding.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/origin_binding.go)
- [cmd/space-server/portable_inspect.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/portable_inspect.go)
- [cmd/space-server/remote_setup.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/remote_setup.go)
- [cmd/space-server/remote_setup_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/remote_setup_test.go)
- [cmd/space-server/shutdown.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/shutdown.go)
- [cmd/space-server/shutdown_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/shutdown_test.go)
- [cmd/space-server/standalone.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-server/standalone.go)
- [cmd/space-voice-turn-check/main.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-voice-turn-check/main.go)
- [cmd/space-voice-turn-check/main_test.go](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/cmd/space-voice-turn-check/main_test.go)

### space-server / .github/workflows/

- [.github/workflows/backup-paths.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/backup-paths.yml)
- [.github/workflows/home-runtime.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/home-runtime.yml)
- [.github/workflows/network-witness.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/network-witness.yml)
- [.github/workflows/published-runtime.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/published-runtime.yml)
- [.github/workflows/server.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/server.yml)
- [.github/workflows/systemd.yml](https://github.com/space-protocol-project/space-server/blob/78303322c4d99475fafcc6c03cca84aa58462764/.github/workflows/systemd.yml)

### space-app / client/lib/src/

- [client/lib/src/android_push.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/android_push.dart)
- [client/lib/src/app_shutdown.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/app_shutdown.dart)
- [client/lib/src/app_update_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/app_update_events.dart)
- [client/lib/src/app_update_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/app_update_state.dart)
- [client/lib/src/app_updates.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/app_updates.dart)
- [client/lib/src/archive_documents.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/archive_documents.dart)
- [client/lib/src/archive_transfer_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/archive_transfer_cubit.dart)
- [client/lib/src/attachments.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/attachments.dart)
- [client/lib/src/camera_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/camera_qr.dart)
- [client/lib/src/channel_files_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/channel_files_controller.dart)
- [client/lib/src/channel_positions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/channel_positions.dart)
- [client/lib/src/channel_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/channel_search.dart)
- [client/lib/src/chat_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_controller.dart)
- [client/lib/src/chat_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_events.dart)
- [client/lib/src/chat_history.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_history.dart)
- [client/lib/src/chat_history_pages.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_history_pages.dart)
- [client/lib/src/chat_mentions_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_mentions_rpc.dart)
- [client/lib/src/chat_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_notifications.dart)
- [client/lib/src/chat_outbox.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox.dart)
- [client/lib/src/chat_outbox_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox_controller.dart)
- [client/lib/src/chat_outbox_files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox_files.dart)
- [client/lib/src/chat_outbox_mutations.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox_mutations.dart)
- [client/lib/src/chat_outbox_recovery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox_recovery.dart)
- [client/lib/src/chat_outbox_sources.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_outbox_sources.dart)
- [client/lib/src/chat_replies.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_replies.dart)
- [client/lib/src/chat_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/chat_state.dart)
- [client/lib/src/community_favorite_list.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_favorite_list.dart)
- [client/lib/src/community_favorites.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_favorites.dart)
- [client/lib/src/community_favorites_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_favorites_api.dart)
- [client/lib/src/community_favorites_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_favorites_rpc.dart)
- [client/lib/src/community_mentions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_mentions.dart)
- [client/lib/src/community_mentions_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_mentions_api.dart)
- [client/lib/src/community_mentions_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_mentions_rpc.dart)
- [client/lib/src/community_overview.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_overview.dart)
- [client/lib/src/community_overview_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_overview_rpc.dart)
- [client/lib/src/community_reactions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_reactions.dart)
- [client/lib/src/community_reactions_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_reactions_api.dart)
- [client/lib/src/community_reactions_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_reactions_rpc.dart)
- [client/lib/src/community_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_search.dart)
- [client/lib/src/community_search_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_search_api.dart)
- [client/lib/src/community_search_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/community_search_rpc.dart)
- [client/lib/src/core.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/core.dart)
- [client/lib/src/dashboard_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/dashboard_controller.dart)
- [client/lib/src/desktop_window.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/desktop_window.dart)
- [client/lib/src/device_migration.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration.dart)
- [client/lib/src/device_migration_export.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_export.dart)
- [client/lib/src/device_migration_files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_files.dart)
- [client/lib/src/device_migration_home.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_home.dart)
- [client/lib/src/device_migration_import.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_import.dart)
- [client/lib/src/device_migration_locks.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_locks.dart)
- [client/lib/src/device_migration_secrets.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_secrets.dart)
- [client/lib/src/device_migration_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/device_migration_settings.dart)
- [client/lib/src/directory_ancestry.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_ancestry.dart)
- [client/lib/src/directory_archive.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_archive.dart)
- [client/lib/src/directory_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_backup.dart)
- [client/lib/src/directory_backup_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_backup_cubit.dart)
- [client/lib/src/directory_document.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_document.dart)
- [client/lib/src/directory_follows.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_follows.dart)
- [client/lib/src/directory_repository.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_repository.dart)
- [client/lib/src/directory_transfer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_transfer.dart)
- [client/lib/src/directory_transfer_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_transfer_cubit.dart)
- [client/lib/src/directory_transfer_noise.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_transfer_noise.dart)
- [client/lib/src/directory_transfer_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_transfer_qr.dart)
- [client/lib/src/directory_transfer_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_transfer_rpc.dart)
- [client/lib/src/directory_validation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_validation.dart)
- [client/lib/src/directory_workers.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/directory_workers.dart)
- [client/lib/src/emoji_catalog.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/emoji_catalog.dart)
- [client/lib/src/endpoint_connection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/endpoint_connection.dart)
- [client/lib/src/event_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/event_controller.dart)
- [client/lib/src/feed_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/feed_api.dart)
- [client/lib/src/feed_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/feed_controller.dart)
- [client/lib/src/feed_management.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/feed_management.dart)
- [client/lib/src/feed_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/feed_rpc.dart)
- [client/lib/src/file_picker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/file_picker.dart)
- [client/lib/src/files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/files.dart)
- [client/lib/src/forum_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/forum_api.dart)
- [client/lib/src/forum_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/forum_controller.dart)
- [client/lib/src/forum_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/forum_rpc.dart)
- [client/lib/src/history_pages.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/history_pages.dart)
- [client/lib/src/home_archive_inspection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_archive_inspection.dart)
- [client/lib/src/home_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_backup.dart)
- [client/lib/src/home_backup_policy.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_backup_policy.dart)
- [client/lib/src/home_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_controller.dart)
- [client/lib/src/home_diagnostics.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_diagnostics.dart)
- [client/lib/src/home_disk.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_disk.dart)
- [client/lib/src/home_disk_actions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_disk_actions.dart)
- [client/lib/src/home_disk_tree.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_disk_tree.dart)
- [client/lib/src/home_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_events.dart)
- [client/lib/src/home_installation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_installation.dart)
- [client/lib/src/home_migration.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_migration.dart)
- [client/lib/src/home_network.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_network.dart)
- [client/lib/src/home_runtime.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_runtime.dart)
- [client/lib/src/home_runtime_cleanup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_runtime_cleanup.dart)
- [client/lib/src/home_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_state.dart)
- [client/lib/src/home_storage.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_storage.dart)
- [client/lib/src/home_transfer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_transfer.dart)
- [client/lib/src/home_update_executor.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_update_executor.dart)
- [client/lib/src/home_update_journal.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/home_update_journal.dart)
- [client/lib/src/key_vault.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/key_vault.dart)
- [client/lib/src/local_failure.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/local_failure.dart)
- [client/lib/src/managed_process.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/managed_process.dart)
- [client/lib/src/markdown_policy.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/markdown_policy.dart)
- [client/lib/src/member_profile_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/member_profile_controller.dart)
- [client/lib/src/mention_data.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mention_data.dart)
- [client/lib/src/message_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/message_search.dart)
- [client/lib/src/message_search_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/message_search_controller.dart)
- [client/lib/src/message_summary.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/message_summary.dart)
- [client/lib/src/migration_archive.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/migration_archive.dart)
- [client/lib/src/migration_temporary.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/migration_temporary.dart)
- [client/lib/src/mls/channel_pin.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/channel_pin.dart)
- [client/lib/src/mls/client.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/client.dart)
- [client/lib/src/mls/controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/controller.dart)
- [client/lib/src/mls/delivery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/delivery.dart)
- [client/lib/src/mls/drafts.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/drafts.dart)
- [client/lib/src/mls/envelope_checks.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/envelope_checks.dart)
- [client/lib/src/mls/files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/files.dart)
- [client/lib/src/mls/history_archive.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/history_archive.dart)
- [client/lib/src/mls/local_store.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/local_store.dart)
- [client/lib/src/mls/maintenance.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/maintenance.dart)
- [client/lib/src/mls/mentions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/mentions.dart)
- [client/lib/src/mls/native.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/native.dart)
- [client/lib/src/mls/notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/notifications.dart)
- [client/lib/src/mls/platform_flutter.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/platform_flutter.dart)
- [client/lib/src/mls/platform_stub.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/platform_stub.dart)
- [client/lib/src/mls/receive.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/receive.dart)
- [client/lib/src/mls/recovery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/recovery.dart)
- [client/lib/src/mls/replies.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/replies.dart)
- [client/lib/src/mls/saved_archive.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls/saved_archive.dart)
- [client/lib/src/mls_message_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/mls_message_search.dart)
- [client/lib/src/notification_targets.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/notification_targets.dart)
- [client/lib/src/origin_binding.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/origin_binding.dart)
- [client/lib/src/outbox_lock.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/outbox_lock.dart)
- [client/lib/src/pairing.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing.dart)
- [client/lib/src/pairing_approval_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing_approval_cubit.dart)
- [client/lib/src/pairing_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing_cubit.dart)
- [client/lib/src/pairing_lifetime.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing_lifetime.dart)
- [client/lib/src/pairing_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing_qr.dart)
- [client/lib/src/pairing_selection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/pairing_selection.dart)
- [client/lib/src/participant_directory.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_directory.dart)
- [client/lib/src/participant_follows.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_follows.dart)
- [client/lib/src/participant_follows_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_follows_api.dart)
- [client/lib/src/participant_follows_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_follows_rpc.dart)
- [client/lib/src/participant_follows_validation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_follows_validation.dart)
- [client/lib/src/participant_profiles.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/participant_profiles.dart)
- [client/lib/src/personal_inbox_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_inbox_controller.dart)
- [client/lib/src/personal_notification_delivery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notification_delivery.dart)
- [client/lib/src/personal_notification_pages.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notification_pages.dart)
- [client/lib/src/personal_notification_reads.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notification_reads.dart)
- [client/lib/src/personal_notification_scope.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notification_scope.dart)
- [client/lib/src/personal_notification_target.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notification_target.dart)
- [client/lib/src/personal_notifications_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notifications_api.dart)
- [client/lib/src/personal_notifications_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notifications_controller.dart)
- [client/lib/src/personal_notifications_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/personal_notifications_rpc.dart)
- [client/lib/src/platform_capabilities.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/platform_capabilities.dart)
- [client/lib/src/portable_voice_merge.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/portable_voice_merge.dart)
- [client/lib/src/portable_voice_profile.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/portable_voice_profile.dart)
- [client/lib/src/portable_voice_store.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/portable_voice_store.dart)
- [client/lib/src/preferences.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/preferences.dart)
- [client/lib/src/preferences_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/preferences_events.dart)
- [client/lib/src/preferences_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/preferences_settings.dart)
- [client/lib/src/preferences_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/preferences_state.dart)
- [client/lib/src/presence_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/presence_events.dart)
- [client/lib/src/presence_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/presence_state.dart)
- [client/lib/src/profile_avatar.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/profile_avatar.dart)
- [client/lib/src/push_registration.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/push_registration.dart)
- [client/lib/src/queued_file.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_file.dart)
- [client/lib/src/queued_file_store.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_file_store.dart)
- [client/lib/src/queued_file_transfer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_file_transfer.dart)
- [client/lib/src/queued_mutation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_mutation.dart)
- [client/lib/src/queued_mutation_projection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_mutation_projection.dart)
- [client/lib/src/queued_mutation_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/queued_mutation_rpc.dart)
- [client/lib/src/reactions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/reactions.dart)
- [client/lib/src/recovery_card.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/recovery_card.dart)
- [client/lib/src/recovery_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/recovery_qr.dart)
- [client/lib/src/recovery_spaces.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/recovery_spaces.dart)
- [client/lib/src/remote_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/remote_backup.dart)
- [client/lib/src/remote_backup_cubit.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/remote_backup_cubit.dart)
- [client/lib/src/remote_backup_models.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/remote_backup_models.dart)
- [client/lib/src/remote_backup_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/remote_backup_rpc.dart)
- [client/lib/src/root_adoption.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/root_adoption.dart)
- [client/lib/src/root_device_proof.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/root_device_proof.dart)
- [client/lib/src/root_history.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/root_history.dart)
- [client/lib/src/root_retention.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/root_retention.dart)
- [client/lib/src/root_rotation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/root_rotation.dart)
- [client/lib/src/rpc_clients.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/rpc_clients.dart)
- [client/lib/src/rpc_connection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/rpc_connection.dart)
- [client/lib/src/rpc_http.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/rpc_http.dart)
- [client/lib/src/saved_drafts.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/saved_drafts.dart)
- [client/lib/src/secure_vault.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/secure_vault.dart)
- [client/lib/src/server_endpoints.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/server_endpoints.dart)
- [client/lib/src/server_presence.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/server_presence.dart)
- [client/lib/src/server_workspaces.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/server_workspaces.dart)
- [client/lib/src/settings_snapshot.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/settings_snapshot.dart)
- [client/lib/src/space_link_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/space_link_qr.dart)
- [client/lib/src/space_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/space_search.dart)
- [client/lib/src/space_search_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/space_search_api.dart)
- [client/lib/src/space_search_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/space_search_rpc.dart)
- [client/lib/src/space_search_validation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/space_search_validation.dart)
- [client/lib/src/system_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/system_notifications.dart)
- [client/lib/src/user_export.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export.dart)
- [client/lib/src/user_export_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export_api.dart)
- [client/lib/src/user_export_file.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export_file.dart)
- [client/lib/src/user_export_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export_rpc.dart)
- [client/lib/src/user_export_selection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export_selection.dart)
- [client/lib/src/user_export_validation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/user_export_validation.dart)
- [client/lib/src/voice_activity.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_activity.dart)
- [client/lib/src/voice_android_session.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_android_session.dart)
- [client/lib/src/voice_audio_native.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_audio_native.dart)
- [client/lib/src/voice_audio_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_audio_settings.dart)
- [client/lib/src/voice_connection_info.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_connection_info.dart)
- [client/lib/src/voice_controller.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_controller.dart)
- [client/lib/src/voice_denoiser.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_denoiser.dart)
- [client/lib/src/voice_device_preferences.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_device_preferences.dart)
- [client/lib/src/voice_devices.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_devices.dart)
- [client/lib/src/voice_media.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_media.dart)
- [client/lib/src/voice_microphone_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_microphone_probe.dart)
- [client/lib/src/voice_microphone_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_microphone_test.dart)
- [client/lib/src/voice_network.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_network.dart)
- [client/lib/src/voice_platform.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_platform.dart)
- [client/lib/src/voice_recovery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_recovery.dart)
- [client/lib/src/voice_rpc.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_rpc.dart)
- [client/lib/src/voice_shortcut.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_shortcut.dart)
- [client/lib/src/voice_signaling.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_signaling.dart)
- [client/lib/src/voice_transmission.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/voice_transmission.dart)
- [client/lib/src/window_theme.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/window_theme.dart)
- [client/lib/src/window_theme_fallback.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/window_theme_fallback.dart)
- [client/lib/src/window_theme_fallback_stub.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/window_theme_fallback_stub.dart)
- [client/lib/src/workspace_events.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/workspace_events.dart)
- [client/lib/src/workspace_state.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/src/workspace_state.dart)

### space-app / client/lib/ui/

- [client/lib/ui/accent_controls.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/accent_controls.dart)
- [client/lib/ui/admin_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/admin_panel.dart)
- [client/lib/ui/android_archive_transfer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/android_archive_transfer.dart)
- [client/lib/ui/app_shutdown_gate.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/app_shutdown_gate.dart)
- [client/lib/ui/app_updates_view.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/app_updates_view.dart)
- [client/lib/ui/attachment_gallery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/attachment_gallery.dart)
- [client/lib/ui/attachment_widgets.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/attachment_widgets.dart)
- [client/lib/ui/camera_scanner.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/camera_scanner.dart)
- [client/lib/ui/channel_files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/channel_files.dart)
- [client/lib/ui/chat_history_paging.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/chat_history_paging.dart)
- [client/lib/ui/chat_view.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/chat_view.dart)
- [client/lib/ui/community_favorite_list.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/community_favorite_list.dart)
- [client/lib/ui/community_favorites.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/community_favorites.dart)
- [client/lib/ui/community_mentions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/community_mentions.dart)
- [client/lib/ui/community_reactions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/community_reactions.dart)
- [client/lib/ui/community_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/community_search.dart)
- [client/lib/ui/components.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/components.dart)
- [client/lib/ui/connection_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/connection_panel.dart)
- [client/lib/ui/dashboard.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/dashboard.dart)
- [client/lib/ui/dashboard_highlights.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/dashboard_highlights.dart)
- [client/lib/ui/device_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/device_panel.dart)
- [client/lib/ui/device_transfer_area.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/device_transfer_area.dart)
- [client/lib/ui/directory_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/directory_backup.dart)
- [client/lib/ui/directory_settings_merge.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/directory_settings_merge.dart)
- [client/lib/ui/directory_transfer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/directory_transfer.dart)
- [client/lib/ui/emoji_picker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/emoji_picker.dart)
- [client/lib/ui/favorite_messages.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/favorite_messages.dart)
- [client/lib/ui/feed.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/feed.dart)
- [client/lib/ui/feed_management.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/feed_management.dart)
- [client/lib/ui/feed_social.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/feed_social.dart)
- [client/lib/ui/forum.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum.dart)
- [client/lib/ui/forum_composer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_composer.dart)
- [client/lib/ui/forum_device_permission.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_device_permission.dart)
- [client/lib/ui/forum_moderation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_moderation.dart)
- [client/lib/ui/forum_read_tracker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_read_tracker.dart)
- [client/lib/ui/forum_reports.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_reports.dart)
- [client/lib/ui/forum_widgets.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/forum_widgets.dart)
- [client/lib/ui/home_archive_review.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_archive_review.dart)
- [client/lib/ui/home_backup_editor.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_backup_editor.dart)
- [client/lib/ui/home_backup_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_backup_panel.dart)
- [client/lib/ui/home_diagnostics_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_diagnostics_panel.dart)
- [client/lib/ui/home_disk_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_disk_panel.dart)
- [client/lib/ui/home_network_editor.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_network_editor.dart)
- [client/lib/ui/home_operation_progress.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_operation_progress.dart)
- [client/lib/ui/home_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/home_panel.dart)
- [client/lib/ui/interface_scale.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/interface_scale.dart)
- [client/lib/ui/measure_size.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/measure_size.dart)
- [client/lib/ui/member_profile.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/member_profile.dart)
- [client/lib/ui/mention_badge.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/mention_badge.dart)
- [client/lib/ui/message_actions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_actions.dart)
- [client/lib/ui/message_body_layout.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_body_layout.dart)
- [client/lib/ui/message_bubble.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_bubble.dart)
- [client/lib/ui/message_composer_controls.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_composer_controls.dart)
- [client/lib/ui/message_context_menu.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_context_menu.dart)
- [client/lib/ui/message_footer.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_footer.dart)
- [client/lib/ui/message_input_surface.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_input_surface.dart)
- [client/lib/ui/message_markdown.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_markdown.dart)
- [client/lib/ui/message_reactions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_reactions.dart)
- [client/lib/ui/message_reply.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/message_reply.dart)
- [client/lib/ui/migration_password_dialog.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/migration_password_dialog.dart)
- [client/lib/ui/mls_channel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/mls_channel.dart)
- [client/lib/ui/mls_create.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/mls_create.dart)
- [client/lib/ui/mls_files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/mls_files.dart)
- [client/lib/ui/mls_recovery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/mls_recovery.dart)
- [client/lib/ui/navigation_group_header.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/navigation_group_header.dart)
- [client/lib/ui/notification_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/notification_settings.dart)
- [client/lib/ui/outbox_label.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/outbox_label.dart)
- [client/lib/ui/outbox_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/outbox_panel.dart)
- [client/lib/ui/outbox_recovery.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/outbox_recovery.dart)
- [client/lib/ui/page_transition.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/page_transition.dart)
- [client/lib/ui/pairing_approval_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/pairing_approval_panel.dart)
- [client/lib/ui/pairing_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/pairing_panel.dart)
- [client/lib/ui/pairing_selection.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/pairing_selection.dart)
- [client/lib/ui/panels.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/panels.dart)
- [client/lib/ui/participant_follows.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/participant_follows.dart)
- [client/lib/ui/participant_profile.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/participant_profile.dart)
- [client/lib/ui/personal_feed.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/personal_feed.dart)
- [client/lib/ui/personal_inbox.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/personal_inbox.dart)
- [client/lib/ui/reaction_people.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/reaction_people.dart)
- [client/lib/ui/recovery_file_picker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/recovery_file_picker.dart)
- [client/lib/ui/recovery_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/recovery_panel.dart)
- [client/lib/ui/remote_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/remote_backup.dart)
- [client/lib/ui/retained_indexed_stack.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/retained_indexed_stack.dart)
- [client/lib/ui/search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/search.dart)
- [client/lib/ui/server_inbox.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/server_inbox.dart)
- [client/lib/ui/shell.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell.dart)
- [client/lib/ui/shell_message_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell_message_search.dart)
- [client/lib/ui/shell_mls_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell_mls_notifications.dart)
- [client/lib/ui/shell_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell_notifications.dart)
- [client/lib/ui/shell_personal_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell_personal_notifications.dart)
- [client/lib/ui/shell_space_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shell_space_search.dart)
- [client/lib/ui/shortcut_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/shortcut_settings.dart)
- [client/lib/ui/space_appearance.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_appearance.dart)
- [client/lib/ui/space_availability.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_availability.dart)
- [client/lib/ui/space_frame.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_frame.dart)
- [client/lib/ui/space_link_qr.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_link_qr.dart)
- [client/lib/ui/space_popup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_popup.dart)
- [client/lib/ui/space_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_search.dart)
- [client/lib/ui/space_setup_wizard.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/space_setup_wizard.dart)
- [client/lib/ui/theme_mode_picker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/theme_mode_picker.dart)
- [client/lib/ui/unread_counter.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/unread_counter.dart)
- [client/lib/ui/user_export.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/user_export.dart)
- [client/lib/ui/voice_audio_controls.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_audio_controls.dart)
- [client/lib/ui/voice_connection_info.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_connection_info.dart)
- [client/lib/ui/voice_devices.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_devices.dart)
- [client/lib/ui/voice_room_details.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_room_details.dart)
- [client/lib/ui/voice_room_management.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_room_management.dart)
- [client/lib/ui/voice_room_navigation.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_room_navigation.dart)
- [client/lib/ui/voice_rooms.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_rooms.dart)
- [client/lib/ui/voice_roster.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_roster.dart)
- [client/lib/ui/voice_shortcut_settings.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_shortcut_settings.dart)
- [client/lib/ui/voice_touch_button.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/lib/ui/voice_touch_button.dart)

### space-app / client/test/

- [client/test/admin_administrative_device_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_administrative_device_test.dart)
- [client/test/admin_channels_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_channels_localization_test.dart)
- [client/test/admin_channels_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_channels_panel_test.dart)
- [client/test/admin_devices_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_devices_localization_test.dart)
- [client/test/admin_devices_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_devices_panel_test.dart)
- [client/test/admin_invites_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_invites_localization_test.dart)
- [client/test/admin_manual_setup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_manual_setup_test.dart)
- [client/test/admin_members_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_members_localization_test.dart)
- [client/test/admin_people_invites_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_people_invites_test.dart)
- [client/test/admin_recovery_views_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_recovery_views_test.dart)
- [client/test/admin_settings_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_settings_localization_test.dart)
- [client/test/admin_settings_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_settings_test.dart)
- [client/test/admin_sidebar_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/admin_sidebar_test.dart)
- [client/test/android_push_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/android_push_test.dart)
- [client/test/app_shutdown_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/app_shutdown_test.dart)
- [client/test/app_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/app_test.dart)
- [client/test/app_update_download_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/app_update_download_test.dart)
- [client/test/app_update_install_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/app_update_install_test.dart)
- [client/test/app_updates_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/app_updates_test.dart)
- [client/test/archive_transfer_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/archive_transfer_test.dart)
- [client/test/attachment_gallery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/attachment_gallery_test.dart)
- [client/test/attachment_policy_fixture_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/attachment_policy_fixture_test.dart)
- [client/test/attachment_policy_scope_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/attachment_policy_scope_test.dart)
- [client/test/attachment_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/attachment_widgets_test.dart)
- [client/test/attachments_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/attachments_test.dart)
- [client/test/automatic_network_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/automatic_network_test.dart)
- [client/test/bloc_events_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/bloc_events_test.dart)
- [client/test/button_spacing_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/button_spacing_test.dart)
- [client/test/camera_lifecycle_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/camera_lifecycle_test.dart)
- [client/test/camera_qr_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/camera_qr_test.dart)
- [client/test/camera_scanner_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/camera_scanner_test.dart)
- [client/test/channel_files_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/channel_files_test.dart)
- [client/test/channel_search_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/channel_search_test.dart)
- [client/test/channels_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/channels_test.dart)
- [client/test/chat_design_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_design_test.dart)
- [client/test/chat_empty_layout_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_empty_layout_test.dart)
- [client/test/chat_examples_screenshots_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_examples_screenshots_test.dart)
- [client/test/chat_history_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_history_test.dart)
- [client/test/chat_mentions_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_mentions_test.dart)
- [client/test/chat_notifications_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_notifications_test.dart)
- [client/test/chat_outbox_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/chat_outbox_test.dart)
- [client/test/color_accessibility_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/color_accessibility_test.dart)
- [client/test/community_favorites_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_favorites_test.dart)
- [client/test/community_favorites_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_favorites_widgets_test.dart)
- [client/test/community_mentions_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_mentions_test.dart)
- [client/test/community_reactions_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_reactions_test.dart)
- [client/test/community_reactions_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_reactions_widgets_test.dart)
- [client/test/community_search_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/community_search_test.dart)
- [client/test/composer_markdown_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/composer_markdown_test.dart)
- [client/test/connection_chat_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/connection_chat_localization_test.dart)
- [client/test/connection_failure_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/connection_failure_test.dart)
- [client/test/core_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/core_test.dart)
- [client/test/dashboard_highlights_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/dashboard_highlights_test.dart)
- [client/test/dashboard_workspaces_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/dashboard_workspaces_test.dart)
- [client/test/desktop_window_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/desktop_window_test.dart)
- [client/test/device_migration_files_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/device_migration_files_test.dart)
- [client/test/device_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/device_migration_test.dart)
- [client/test/device_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/device_panel_test.dart)
- [client/test/device_recovery_batch_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/device_recovery_batch_test.dart)
- [client/test/device_transfer_area_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/device_transfer_area_test.dart)
- [client/test/directory_ancestry_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_ancestry_test.dart)
- [client/test/directory_archive_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_archive_test.dart)
- [client/test/directory_backup_cubit_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_backup_cubit_test.dart)
- [client/test/directory_backup_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_backup_panel_test.dart)
- [client/test/directory_backup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_backup_test.dart)
- [client/test/directory_follows_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_follows_test.dart)
- [client/test/directory_transfer_cubit_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_transfer_cubit_test.dart)
- [client/test/directory_transfer_interop_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_transfer_interop_test.dart)
- [client/test/directory_transfer_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_transfer_panel_test.dart)
- [client/test/directory_transfer_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_transfer_test.dart)
- [client/test/directory_voice_format_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/directory_voice_format_test.dart)
- [client/test/emoji_reactions_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/emoji_reactions_test.dart)
- [client/test/favorite_messages_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/favorite_messages_test.dart)
- [client/test/favorites_restart_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/favorites_restart_test.dart)
- [client/test/feed_android_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/feed_android_test.dart)
- [client/test/feed_read_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/feed_read_test.dart)
- [client/test/feed_read_visibility_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/feed_read_visibility_test.dart)
- [client/test/feed_social_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/feed_social_test.dart)
- [client/test/feed_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/feed_test.dart)
- [client/test/fixtures/directory.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/fixtures/directory.dart)
- [client/test/fixtures/remote_backup.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/fixtures/remote_backup.dart)
- [client/test/flutter_test_config.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/flutter_test_config.dart)
- [client/test/forum_moderation_screenshots_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_moderation_screenshots_test.dart)
- [client/test/forum_moderation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_moderation_test.dart)
- [client/test/forum_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_navigation_test.dart)
- [client/test/forum_reports_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_reports_test.dart)
- [client/test/forum_screenshots_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_screenshots_test.dart)
- [client/test/forum_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/forum_test.dart)
- [client/test/history_pages_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/history_pages_test.dart)
- [client/test/home_archive_review_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_archive_review_test.dart)
- [client/test/home_backup_editor_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_backup_editor_test.dart)
- [client/test/home_backup_policy_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_backup_policy_test.dart)
- [client/test/home_backup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_backup_test.dart)
- [client/test/home_diagnostics_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_diagnostics_test.dart)
- [client/test/home_disk_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_disk_panel_test.dart)
- [client/test/home_disk_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_disk_test.dart)
- [client/test/home_installation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_installation_test.dart)
- [client/test/home_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_localization_test.dart)
- [client/test/home_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_migration_test.dart)
- [client/test/home_network_editor_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_network_editor_test.dart)
- [client/test/home_network_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_network_test.dart)
- [client/test/home_public_readiness_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_public_readiness_test.dart)
- [client/test/home_runtime_cleanup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_runtime_cleanup_test.dart)
- [client/test/home_runtime_install_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_runtime_install_test.dart)
- [client/test/home_runtime_upgrade_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_runtime_upgrade_test.dart)
- [client/test/home_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_server_test.dart)
- [client/test/home_shutdown_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_shutdown_test.dart)
- [client/test/home_storage_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_storage_test.dart)
- [client/test/home_transfer_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_transfer_test.dart)
- [client/test/home_update_executor_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_update_executor_test.dart)
- [client/test/home_update_journal_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_update_journal_test.dart)
- [client/test/home_version_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/home_version_test.dart)
- [client/test/interface_scale_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/interface_scale_test.dart)
- [client/test/journal_windows_lock_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/journal_windows_lock_test.dart)
- [client/test/live/attachments_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/attachments_server_test.dart)
- [client/test/live/desktop_chat_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/desktop_chat_server_test.dart)
- [client/test/live/device_full_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/device_full_migration_test.dart)
- [client/test/live/device_migration_home.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/device_migration_home.dart)
- [client/test/live/feed_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/feed_server_test.dart)
- [client/test/live/full_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/full_migration_test.dart)
- [client/test/live/history_pages.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/history_pages.dart)
- [client/test/live/message_replies.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/message_replies.dart)
- [client/test/live/mls_restore_devices.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/mls_restore_devices.dart)
- [client/test/live/mls_restore_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/mls_restore_test.dart)
- [client/test/live/mls_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/mls_server_test.dart)
- [client/test/live/ordinary_sync.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/ordinary_sync.dart)
- [client/test/live/persistent_files.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/persistent_files.dart)
- [client/test/live/personal_notifications_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/personal_notifications_server_test.dart)
- [client/test/live/queued_mutations.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/live/queued_mutations.dart)
- [client/test/local_failure_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/local_failure_test.dart)
- [client/test/local_state_failure_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/local_state_failure_test.dart)
- [client/test/localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/localization_test.dart)
- [client/test/managed_process_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/managed_process_test.dart)
- [client/test/markdown_security_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/markdown_security_test.dart)
- [client/test/member_profile_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/member_profile_test.dart)
- [client/test/message_changes_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_changes_test.dart)
- [client/test/message_delivery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_delivery_test.dart)
- [client/test/message_footer_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_footer_test.dart)
- [client/test/message_replies_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_replies_test.dart)
- [client/test/message_search_controller_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_search_controller_test.dart)
- [client/test/message_search_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/message_search_test.dart)
- [client/test/migration_archive_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/migration_archive_test.dart)
- [client/test/migration_password_dialog_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/migration_password_dialog_test.dart)
- [client/test/mls_channel_pin_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_channel_pin_test.dart)
- [client/test/mls_envelope_checks_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_envelope_checks_test.dart)
- [client/test/mls_hostile_server_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_hostile_server_test.dart)
- [client/test/mls_mentions_native_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_mentions_native_test.dart)
- [client/test/mls_mentions_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_mentions_test.dart)
- [client/test/mls_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_migration_test.dart)
- [client/test/mls_native_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_native_test.dart)
- [client/test/mls_notification_delivery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_notification_delivery_test.dart)
- [client/test/mls_notifications_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_notifications_test.dart)
- [client/test/mls_recovery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_recovery_test.dart)
- [client/test/mls_replies_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_replies_test.dart)
- [client/test/mls_view_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mls_view_test.dart)
- [client/test/mobile_channel_layout_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mobile_channel_layout_test.dart)
- [client/test/mobile_client_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mobile_client_test.dart)
- [client/test/mobile_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/mobile_navigation_test.dart)
- [client/test/navigation_group_header_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/navigation_group_header_test.dart)
- [client/test/navigation_reveal_golden_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/navigation_reveal_golden_test.dart)
- [client/test/navigation_reveal_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/navigation_reveal_test.dart)
- [client/test/notification_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/notification_navigation_test.dart)
- [client/test/notification_targets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/notification_targets_test.dart)
- [client/test/offline_mls_search_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/offline_mls_search_test.dart)
- [client/test/origin_binding_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/origin_binding_test.dart)
- [client/test/outbox_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/outbox_panel_test.dart)
- [client/test/outbox_recovery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/outbox_recovery_test.dart)
- [client/test/overview_scope_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/overview_scope_test.dart)
- [client/test/page_transition_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/page_transition_test.dart)
- [client/test/pairing_approval_cubit_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_approval_cubit_test.dart)
- [client/test/pairing_cubit_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_cubit_test.dart)
- [client/test/pairing_lifetime_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_lifetime_test.dart)
- [client/test/pairing_modes_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_modes_test.dart)
- [client/test/pairing_panels_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_panels_test.dart)
- [client/test/pairing_qr_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_qr_test.dart)
- [client/test/pairing_selection_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_selection_test.dart)
- [client/test/pairing_transport_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/pairing_transport_test.dart)
- [client/test/participant_follows_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/participant_follows_test.dart)
- [client/test/participant_profile_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/participant_profile_widgets_test.dart)
- [client/test/participant_profiles_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/participant_profiles_test.dart)
- [client/test/personal_inbox_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/personal_inbox_test.dart)
- [client/test/personal_notification_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/personal_notification_navigation_test.dart)
- [client/test/personal_notifications_api_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/personal_notifications_api_test.dart)
- [client/test/personal_notifications_controller_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/personal_notifications_controller_test.dart)
- [client/test/portable_voice_merge_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/portable_voice_merge_test.dart)
- [client/test/portable_voice_profile_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/portable_voice_profile_test.dart)
- [client/test/portable_voice_store_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/portable_voice_store_test.dart)
- [client/test/probes/clean_install_data.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/clean_install_data.dart)
- [client/test/probes/clean_install_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/clean_install_probe.dart)
- [client/test/probes/clean_install_support.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/clean_install_support.dart)
- [client/test/probes/community_favorites_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/community_favorites_probe.dart)
- [client/test/probes/directory_crash_linux.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_linux.dart)
- [client/test/probes/directory_crash_macos.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_macos.dart)
- [client/test/probes/directory_crash_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_probe.dart)
- [client/test/probes/directory_crash_support.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_support.dart)
- [client/test/probes/directory_crash_verify.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_verify.dart)
- [client/test/probes/directory_crash_windows.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_crash_windows.dart)
- [client/test/probes/directory_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_probe.dart)
- [client/test/probes/directory_transfer_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/directory_transfer_probe.dart)
- [client/test/probes/feed_social_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/feed_social_probe.dart)
- [client/test/probes/pairing_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/pairing_probe.dart)
- [client/test/probes/participant_follows_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/participant_follows_probe.dart)
- [client/test/probes/space_search_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/space_search_probe.dart)
- [client/test/probes/user_export_probe.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/probes/user_export_probe.dart)
- [client/test/promo_capture_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/promo_capture_test.dart)
- [client/test/promo_screenshots_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/promo_screenshots_test.dart)
- [client/test/queued_files_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/queued_files_test.dart)
- [client/test/queued_mutations_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/queued_mutations_test.dart)
- [client/test/reaction_delivery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/reaction_delivery_test.dart)
- [client/test/read_history_batch_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/read_history_batch_test.dart)
- [client/test/recovery_dialog_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_dialog_localization_test.dart)
- [client/test/recovery_file_picker_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_file_picker_test.dart)
- [client/test/recovery_operation_localization_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_operation_localization_test.dart)
- [client/test/recovery_qr_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_qr_test.dart)
- [client/test/recovery_spaces_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_spaces_test.dart)
- [client/test/recovery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/recovery_test.dart)
- [client/test/redesign_golden_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/redesign_golden_test.dart)
- [client/test/redesign_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/redesign_test.dart)
- [client/test/remote_backup_cubit_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/remote_backup_cubit_test.dart)
- [client/test/remote_backup_interop_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/remote_backup_interop_test.dart)
- [client/test/remote_backup_panel_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/remote_backup_panel_test.dart)
- [client/test/remote_backup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/remote_backup_test.dart)
- [client/test/retained_indexed_stack_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/retained_indexed_stack_test.dart)
- [client/test/root_adoption_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/root_adoption_test.dart)
- [client/test/root_retention_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/root_retention_test.dart)
- [client/test/root_rotation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/root_rotation_test.dart)
- [client/test/root_rotation_tls_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/root_rotation_tls_test.dart)
- [client/test/rpc_budget_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/rpc_budget_test.dart)
- [client/test/rpc_connection_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/rpc_connection_test.dart)
- [client/test/search_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/search_navigation_test.dart)
- [client/test/secure_storage_macos_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/secure_storage_macos_test.dart)
- [client/test/secure_storage_sync_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/secure_storage_sync_test.dart)
- [client/test/server_endpoints_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_endpoints_test.dart)
- [client/test/server_icon_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_icon_test.dart)
- [client/test/server_inbox_states_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_inbox_states_test.dart)
- [client/test/server_presence_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_presence_test.dart)
- [client/test/server_presence_ui_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_presence_ui_test.dart)
- [client/test/server_workspaces_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/server_workspaces_test.dart)
- [client/test/settings_merge_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/settings_merge_test.dart)
- [client/test/settings_merge_widget_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/settings_merge_widget_test.dart)
- [client/test/settings_migration_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/settings_migration_test.dart)
- [client/test/shell_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/shell_test.dart)
- [client/test/shortcut_settings_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/shortcut_settings_test.dart)
- [client/test/site_gallery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/site_gallery_test.dart)
- [client/test/space_qr_photo_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/space_qr_photo_test.dart)
- [client/test/space_qr_platform_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/space_qr_platform_test.dart)
- [client/test/space_search_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/space_search_test.dart)
- [client/test/space_search_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/space_search_widgets_test.dart)
- [client/test/space_setup_wizard_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/space_setup_wizard_test.dart)
- [client/test/stream_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/stream_test.dart)
- [client/test/support/chat_examples.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/chat_examples.dart)
- [client/test/support/chat_outbox.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/chat_outbox.dart)
- [client/test/support/community_favorites.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/community_favorites.dart)
- [client/test/support/community_reactions.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/community_reactions.dart)
- [client/test/support/feed_native_app.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/feed_native_app.dart)
- [client/test/support/feed_social.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/feed_social.dart)
- [client/test/support/feed_transport_native_app.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/feed_transport_native_app.dart)
- [client/test/support/forum_acceptance_native_app.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/forum_acceptance_native_app.dart)
- [client/test/support/forum_moderation_native_app.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/forum_moderation_native_app.dart)
- [client/test/support/forum_reports_native_app.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/forum_reports_native_app.dart)
- [client/test/support/historical_home_runtime.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/historical_home_runtime.dart)
- [client/test/support/participant_follows.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/participant_follows.dart)
- [client/test/support/participant_profiles.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/participant_profiles.dart)
- [client/test/support/personal_notifications.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/personal_notifications.dart)
- [client/test/support/rpc_fault_proxy.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/rpc_fault_proxy.dart)
- [client/test/support/semantics_update_binding.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/semantics_update_binding.dart)
- [client/test/support/site_gallery_session.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/site_gallery_session.dart)
- [client/test/support/space_search.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/space_search.dart)
- [client/test/support/temp_directory.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/temp_directory.dart)
- [client/test/support/user_export.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/support/user_export.dart)
- [client/test/system_notifications_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/system_notifications_test.dart)
- [client/test/temp_directory_cleanup_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/temp_directory_cleanup_test.dart)
- [client/test/theme_mode_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/theme_mode_test.dart)
- [client/test/tooltip_semantics_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/tooltip_semantics_test.dart)
- [client/test/transient_files_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/transient_files_test.dart)
- [client/test/unread_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/unread_test.dart)
- [client/test/user_export_file_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/user_export_file_test.dart)
- [client/test/user_export_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/user_export_test.dart)
- [client/test/user_export_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/user_export_widgets_test.dart)
- [client/test/voice_activity_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_activity_test.dart)
- [client/test/voice_android_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_android_test.dart)
- [client/test/voice_audio_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_audio_test.dart)
- [client/test/voice_connection_info_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_connection_info_test.dart)
- [client/test/voice_controller_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_controller_test.dart)
- [client/test/voice_denoiser_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_denoiser_test.dart)
- [client/test/voice_device_call_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_device_call_test.dart)
- [client/test/voice_devices_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_devices_test.dart)
- [client/test/voice_microphone_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_microphone_test.dart)
- [client/test/voice_network_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_network_test.dart)
- [client/test/voice_recovery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_recovery_test.dart)
- [client/test/voice_room_management_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_room_management_test.dart)
- [client/test/voice_room_navigation_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_room_navigation_test.dart)
- [client/test/voice_room_preview_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_room_preview_test.dart)
- [client/test/voice_room_screenshots_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_room_screenshots_test.dart)
- [client/test/voice_semantics_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_semantics_test.dart)
- [client/test/voice_shortcut_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_shortcut_test.dart)
- [client/test/voice_transmission_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_transmission_test.dart)
- [client/test/voice_widgets_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/test/voice_widgets_test.dart)

### space-app / client/integration_test/

- [client/integration_test/fixtures/gallery_session.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/fixtures/gallery_session.dart)
- [client/integration_test/fixtures/space_link.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/fixtures/space_link.dart)
- [client/integration_test/redesign_camera_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/redesign_camera_test.dart)
- [client/integration_test/redesign_device_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/redesign_device_test.dart)
- [client/integration_test/redesign_manual_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/redesign_manual_test.dart)
- [client/integration_test/release_gallery_test.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/integration_test/release_gallery_test.dart)

### space-app / packages/space_admin_ui/lib/

- [packages/space_admin_ui/lib/avatar_data.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/avatar_data.dart)
- [packages/space_admin_ui/lib/l10n/admin_localizations.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/l10n/admin_localizations.dart)
- [packages/space_admin_ui/lib/l10n/admin_localizations_en.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/l10n/admin_localizations_en.dart)
- [packages/space_admin_ui/lib/l10n/admin_localizations_ru.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/l10n/admin_localizations_ru.dart)
- [packages/space_admin_ui/lib/l10n/admin_localizations_zh.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/l10n/admin_localizations_zh.dart)
- [packages/space_admin_ui/lib/member_avatar.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/member_avatar.dart)
- [packages/space_admin_ui/lib/space_admin_ui.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/space_admin_ui.dart)
- [packages/space_admin_ui/lib/src/admin_operations.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/admin_operations.dart)
- [packages/space_admin_ui/lib/src/channels_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/channels_panel.dart)
- [packages/space_admin_ui/lib/src/content_insets.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/content_insets.dart)
- [packages/space_admin_ui/lib/src/control_spacing.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/control_spacing.dart)
- [packages/space_admin_ui/lib/src/devices_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/devices_panel.dart)
- [packages/space_admin_ui/lib/src/invites_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/invites_panel.dart)
- [packages/space_admin_ui/lib/src/members_panel.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/members_panel.dart)
- [packages/space_admin_ui/lib/src/pairing_start_view.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/pairing_start_view.dart)
- [packages/space_admin_ui/lib/src/recovery_camera_view.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/recovery_camera_view.dart)
- [packages/space_admin_ui/lib/src/recovery_dialogs.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/recovery_dialogs.dart)
- [packages/space_admin_ui/lib/src/recovery_tools_view.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/recovery_tools_view.dart)
- [packages/space_admin_ui/lib/src/server_icon.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/server_icon.dart)
- [packages/space_admin_ui/lib/src/server_icon_picker.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/server_icon_picker.dart)
- [packages/space_admin_ui/lib/src/storage_limits.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_admin_ui/lib/src/storage_limits.dart)

### space-app / packages/space_api/lib/

- [packages/space_api/lib/space_api.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_api/lib/space_api.dart)

### space-app / packages/space_voice_native/lib/

- [packages/space_voice_native/lib/space_voice_native.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_voice_native/lib/space_voice_native.dart)

### space-app / packages/space_mls_native/lib/

- [packages/space_mls_native/lib/space_mls_native.dart](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/packages/space_mls_native/lib/space_mls_native.dart)

### space-app / native/space_voice/

- [native/space_voice/Cargo.toml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_voice/Cargo.toml)
- [native/space_voice/src/lib.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_voice/src/lib.rs)
- [native/space_voice/src/processor.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_voice/src/processor.rs)
- [native/space_voice/src/worker.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_voice/src/worker.rs)

### space-app / native/space_mls/

- [native/space_mls/Cargo.toml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/Cargo.toml)
- [native/space_mls/clippy.toml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/clippy.toml)
- [native/space_mls/rust-toolchain.toml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/rust-toolchain.toml)
- [native/space_mls/src/attachments.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/attachments.rs)
- [native/space_mls/src/binding.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/binding.rs)
- [native/space_mls/src/channel.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/channel.rs)
- [native/space_mls/src/channel_mentions_tests.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/channel_mentions_tests.rs)
- [native/space_mls/src/crypto.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/crypto.rs)
- [native/space_mls/src/device.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/device.rs)
- [native/space_mls/src/lib.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/lib.rs)
- [native/space_mls/src/message_capabilities.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/message_capabilities.rs)
- [native/space_mls/src/message_mentions.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/message_mentions.rs)
- [native/space_mls/src/state.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/state.rs)
- [native/space_mls/src/transaction.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/src/transaction.rs)
- [native/space_mls/tests/closed_channel.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/tests/closed_channel.rs)
- [native/space_mls/tests/devices_and_restart.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/tests/devices_and_restart.rs)
- [native/space_mls/tests/provider_migration.rs](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/native/space_mls/tests/provider_migration.rs)

### space-app / client/android/app/src/

- [client/android/app/src/androidTest/kotlin/org/spaceprotocol/space_client/ArchiveDocumentsTest.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/androidTest/kotlin/org/spaceprotocol/space_client/ArchiveDocumentsTest.kt)
- [client/android/app/src/debug/kotlin/org/spaceprotocol/space_client/ArchiveTestProvider.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/debug/kotlin/org/spaceprotocol/space_client/ArchiveTestProvider.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveBridge.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveBridge.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveDocuments.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveDocuments.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveStreams.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveStreams.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveWorkspace.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/ArchiveWorkspace.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/MainActivity.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/MainActivity.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/NotificationsBridge.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/NotificationsBridge.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushCipher.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushCipher.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushService.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushService.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushStore.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushStore.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushWire.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/PushWire.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/SecureStorageSync.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/SecureStorageSync.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/UserExportBridge.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/UserExportBridge.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/UserExportPolicy.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/UserExportPolicy.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/VoiceBridge.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/VoiceBridge.kt)
- [client/android/app/src/main/kotlin/org/spaceprotocol/space_client/VoiceService.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/main/kotlin/org/spaceprotocol/space_client/VoiceService.kt)
- [client/android/app/src/test/kotlin/org/spaceprotocol/space_client/ArchiveStreamsTest.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/test/kotlin/org/spaceprotocol/space_client/ArchiveStreamsTest.kt)
- [client/android/app/src/test/kotlin/org/spaceprotocol/space_client/PushCipherTest.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/test/kotlin/org/spaceprotocol/space_client/PushCipherTest.kt)
- [client/android/app/src/test/kotlin/org/spaceprotocol/space_client/UserExportPolicyTest.kt](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/client/android/app/src/test/kotlin/org/spaceprotocol/space_client/UserExportPolicyTest.kt)

### space-app / tools/

- [tools/android_environment.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/android_environment.ps1)
- [tools/check_apk_native.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_apk_native.py)
- [tools/check_attachments.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_attachments.ps1)
- [tools/check_clean_install.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_clean_install.ps1)
- [tools/check_community_export_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_export_ui.py)
- [tools/check_community_feed_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_feed_ui.py)
- [tools/check_community_follows_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_follows_ui.py)
- [tools/check_community_interop.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_interop.py)
- [tools/check_community_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_ui.py)
- [tools/check_community_ui_test.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_community_ui_test.py)
- [tools/check_complexity.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_complexity.py)
- [tools/check_complexity_test.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_complexity_test.py)
- [tools/check_desktop_chat_ci.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_desktop_chat_ci.ps1)
- [tools/check_directory_crash.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_directory_crash.py)
- [tools/check_directory_macos.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_directory_macos.py)
- [tools/check_directory_transfer_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_directory_transfer_ui.py)
- [tools/check_directory_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_directory_ui.py)
- [tools/check_directory_windows.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_directory_windows.ps1)
- [tools/check_feed_android.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_feed_android.ps1)
- [tools/check_file_adapters.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_file_adapters.py)
- [tools/check_forum_windows.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_forum_windows.ps1)
- [tools/check_linux_notification_activation.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_linux_notification_activation.py)
- [tools/check_mls_advisories.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_mls_advisories.py)
- [tools/check_mls_advisories_test.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_mls_advisories_test.py)
- [tools/check_pairing_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_pairing_ui.py)
- [tools/check_remote_backup.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_remote_backup.py)
- [tools/check_secure_storage.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_secure_storage.ps1)
- [tools/check_space_search_ui.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_space_search_ui.py)
- [tools/check_voice_native.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_voice_native.py)
- [tools/check_voice_native_test.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_voice_native_test.py)
- [tools/check_voice_probe_output.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_voice_probe_output.ps1)
- [tools/check_voice_rooms.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_voice_rooms.ps1)
- [tools/check_voice_signal.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_voice_signal.py)
- [tools/check_webrtc_cache.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/check_webrtc_cache.py)
- [tools/clean_unused_builds.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/clean_unused_builds.ps1)
- [tools/collect_mls_notices.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/collect_mls_notices.py)
- [tools/collect_voice_notices.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/collect_voice_notices.py)
- [tools/complexity_audit.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/complexity_audit.py)
- [tools/directory_keyring_session.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/directory_keyring_session.py)
- [tools/mls_environment.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/mls_environment.ps1)
- [tools/prepare_complexity.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/prepare_complexity.py)
- [tools/secure_storage_atomic_test.cpp](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/secure_storage_atomic_test.cpp)
- [tools/verify_published_release.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/verify_published_release.py)
- [tools/verify_published_release_test.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/verify_published_release_test.py)
- [tools/voice_android_fixture.py](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/voice_android_fixture.py)
- [tools/voice_probe_output.ps1](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/voice_probe_output.ps1)
- [tools/voice_signal_test.cpp](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/tools/voice_signal_test.cpp)

### space-app / .github/workflows/

- [.github/workflows/android-archives.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/android-archives.yml)
- [.github/workflows/clean-install.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/clean-install.yml)
- [.github/workflows/complexity.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/complexity.yml)
- [.github/workflows/desktop.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/desktop.yml)
- [.github/workflows/directory-backup.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/directory-backup.yml)
- [.github/workflows/directory-macos-crash.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/directory-macos-crash.yml)
- [.github/workflows/directory-pairing-generate.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/directory-pairing-generate.yml)
- [.github/workflows/directory-pairing.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/directory-pairing.yml)
- [.github/workflows/directory-windows-crash.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/directory-windows-crash.yml)
- [.github/workflows/feed-social-generation.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/feed-social-generation.yml)
- [.github/workflows/home-storage.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/home-storage.yml)
- [.github/workflows/milestone-0-8.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/milestone-0-8.yml)
- [.github/workflows/mls.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/mls.yml)
- [.github/workflows/pairing-authority-check.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/pairing-authority-check.yml)
- [.github/workflows/pairing-modes.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/pairing-modes.yml)
- [.github/workflows/participant-follows-generation.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/participant-follows-generation.yml)
- [.github/workflows/portable-voice.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/portable-voice.yml)
- [.github/workflows/published-release.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/published-release.yml)
- [.github/workflows/remote-backup.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/remote-backup.yml)
- [.github/workflows/runtime-install-check.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/runtime-install-check.yml)
- [.github/workflows/settings-merge.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/settings-merge.yml)
- [.github/workflows/source-generation.yml](https://github.com/space-protocol-project/space-app/blob/35b0a9e73666f9d91d650a5b23e75da1441539bf/.github/workflows/source-generation.yml)
