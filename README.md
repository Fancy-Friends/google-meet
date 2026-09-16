# Google Meet

[![Fancified](art/fancified.svg)](https://particle.academy)

Google Meet for [fancy-flow][flow] — as **four imported, versioned packages**, one
per runtime. Not vendored source: a copy cannot be upgraded, and third-party APIs
change.

[flow]: https://github.com/Particle-Academy/fancy-flow

| Runtime | Package | Install |
|---|---|---|
| Authoring surface (every host) | `@particle-academy/google-meet-ui` | `npm install @particle-academy/google-meet-ui` |
| Node | `@particle-academy/google-meet-js` | `npm install @particle-academy/google-meet-js` |
| PHP 8.4+ | `particle-academy/google-meet-php` | `composer require particle-academy/google-meet-php` |
| Python 3.11+ | `fancy-google-meet` | `pip install fancy-google-meet` |

The `ui` package is the editor surface and is React on every host — a PHP or
Python project installs it *and* its own runtime package, and never the `js` one.

## What it costs you

One dependency: `@particle-academy/fancy-connector-core` (or
`particle-academy/fancy-connector-core` on Composer), which the `js` and `php`
packages pull in themselves. The Python package has **zero** runtime
dependencies.

**No Google Meet SDK.** Plain HTTP, deliberately: a vendor SDK is third-party code
subject to the kit's full approval bar, and one per provider is hundreds of
dependencies nobody is tracking.

## Setting it up

Everything below is generated from `provider/manifest.json`, so it cannot disagree with what the packages do.

### Credentials

A Google Meet connection holds 4 values.

**Two kinds of value, and mixing them up matters.** A `provider` credential is ONE value for the whole installation — an OAuth app's client secret serves every connected account. An `account` credential is one per connected account. A host that stores the second where it stores the first lets one account's credentials reach another's.

| Field | Scope | Secret | Where it comes from |
|---|---|---|---|
| **OAuth client ID** | per installation | not secret | From the Google Cloud project you registered. One value for the whole installation -- the same app serves every connected Google account. |
| **OAuth client secret** | per installation | **secret** | From the same Google Cloud project. Used to exchange the code and to refresh; never sent with an API request. |
| **Access token** | per connected account | **secret** | Obtained by the host's OAuth exchange, PER CONNECTED GOOGLE ACCOUNT. Expires after one hour -- a host that does not refresh will work for a while and then fail with no warning. |
| **Refresh token** *(optional)* | per connected account | **secret** | Also per account. Reusable -- Google does not rotate it on refresh. |

### Authorising

Google Meet uses OAuth2 (authorization_code). The package DECLARES the exchange; the HOST performs it — a consent screen needs a browser, a redirect URI and somewhere to persist the result, and all three belong to the host.

- **Authorize URL** — https://accounts.google.com/o/oauth2/v2/auth
- **Token URL** — https://oauth2.googleapis.com/token
- **Scopes** — `https://www.googleapis.com/auth/meetings.space.created`, `https://www.googleapis.com/auth/meetings.space.readonly`
- **Access token lifetime** — 3600 seconds (1 hours). A host that never refreshes works all afternoon and is broken by morning.

The refresh tokens do **not** rotate: the same one is reusable, so a refresh may safely be retried and may run concurrently. Stated rather than assumed, because the opposite — a provider that spends the token and revokes the grant on a replay — looks identical until it happens.

### The estate

**Nobody has checked whether Google Meet has a test estate.** Treat every call as real.

> Google Meet has no test estate distinct from a real account, as far as this review found (2026-09-16) -- but it is UNVERIFIED, not confirmed. space_create makes a real, joinable meeting space. Use fake mode while building.

## What it can do

### Actions

#### `conference_record_list` — List conference records

List past conferences, optionally filtered to one space.

`GET /conferenceRecords` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `filter` | no | Google's filter grammar, e.g. space.name = "spaces/abc123" to see one space's history, or space.meeting_code = "abc-defg-hij". Leave blank for every conference the account can see. |
| `pageSize` | no | Records per page. Leave blank for Google's default. |
| `pageToken` | no | From a previous call's data.nextPageToken. |

#### `participant_list` — List participants

List who attended a conference.

`GET /conferenceRecords/{conferenceRecordId}/participants` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `conferenceRecordId` | yes | The id from conference_record_list's data.conferenceRecords[].name (conferenceRecords/{id} -- give the id after the slash) or from space_get's data.activeConference.conferenceRecord. |
| `pageToken` | no | From a previous call's data.nextPageToken. |

#### `space_create` — Create meeting space

Create a new Google Meet space and get its join link.

`POST /spaces` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `accessType` | no | OPEN: anyone with the link, no knock. TRUSTED: anyone in your organization, no knock; others knock. RESTRICTED: only people and groups explicitly invited. Leave blank for Google's account default. |
| `entryPointAccess` | no | ALL: any Meet client (web, mobile, phone dial-in, the calling API). CREATOR_APP_ONLY: only the app that created the space, and only through the Meet REST API and SIP — no phone dial-in and no other Meet client. Leave blank for Google's default (ALL). |

#### `space_get` — Get meeting space

Read a Meet space's current state, including whether a conference is active right now.

`GET /spaces/{spaceId}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `spaceId` | yes | The id from space_create's data.name (spaces/{id} -- give the id after the slash), or the meeting code shown in Meet's own UI. NOT independently spot-checked that the meeting-code form resolves through this exact endpoint; verify with a live call before relying on it. |

#### `transcript_entry_list` — List transcript entries

Read a finished conference's transcript, one utterance per entry.

`GET /conferenceRecords/{conferenceRecordId}/transcripts/{transcriptId}/entries` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `conferenceRecordId` | yes | The id from conference_record_list's data.conferenceRecords[].name (give the id after conferenceRecords/). |
| `transcriptId` | yes | The id from transcript_list's data.transcripts[].name (give the id after transcripts/). |
| `pageToken` | no | From a previous call's data.nextPageToken. |

#### `transcript_list` — List transcripts

List a finished conference's transcripts, when transcription was on.

`GET /conferenceRecords/{conferenceRecordId}/transcripts` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `conferenceRecordId` | yes | The id from conference_record_list's data.conferenceRecords[].name (conferenceRecords/{id} -- give the id after the slash). |

## Run it before you have credentials

Every operation ships a **faker**, whether or not Google Meet has a sandbox. Set a
node's mode to `fake` and it returns the shape Google Meet actually publishes — the
same field names, deterministically — so you can wire the downstream nodes before
touching an account, a key, or a network.

## This repository is generated

`provider/` is the source. Everything under `packages/` is emitted from it and
**must not be hand-edited** — CI regenerates and diffs on every push, and the
next protocol sync destroys anything it finds. See [`AGENTS.md`](AGENTS.md).

## Two namespaces, which do not match on purpose

The repo is `github.com/Fancy-Friends/google-meet`; the packages publish under
`particle-academy`. Nothing derives one from the other — the names come from
weaver's `friends.json` and nowhere else.

## Licence

MIT.
