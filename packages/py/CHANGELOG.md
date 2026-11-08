# Changelog — Google Meet

All four packages — `@particle-academy/google-meet-ui`, `@particle-academy/google-meet-js`,
`particle-academy/google-meet-php` and `fancy-google-meet` — are released together
under one version. They are generated from one `provider/` definition, so a
change to it changes all four, and separate version lines would only record
which of the four somebody remembered to bump.

**Write entries HERE**, in the weaver envelope at `providers/google-meet/CHANGELOG.md`,
then regenerate. This file is the one thing in a release that cannot be
derived — somebody has to write what changed — but writing it in the
provider repo would be a hand-edit that `.weaver.json` flags and the next
sync destroys.

## [0.3.1] — 2026-11-08

### Fixed

- **The Laravel config's environment variable names now split camelCase**,
  as documented. **Consumer action: none.** The old unsplit names are still
  read as a fallback, so an app that set them keeps working; the new names
  are preferred.

  | Preferred | Still read |
  |---|---|
  | `GOOGLE_MEET_CLIENT_ID` | `GOOGLE_MEET_CLIENTID` |
  | `GOOGLE_MEET_CLIENT_SECRET` | `GOOGLE_MEET_CLIENTSECRET` |
  | `GOOGLE_MEET_ACCESS_TOKEN` | `GOOGLE_MEET_ACCESSTOKEN` |
  | `GOOGLE_MEET_REFRESH_TOKEN` | `GOOGLE_MEET_REFRESHTOKEN` |

## [0.3.0] — 2026-11-08

### Added

- **One Google consent grant, shared by every Google connector** (`oauth.grant:
  "google"`), for an org-level Google connection: one OAuth client, one consent
  and one refresh token per person, with each feature's scopes asked for when it
  is first used. Declared in the manifest, the `-ui` package's OAuth constant,
  the README and the registry index:
  - `authorizeParams`: `access_type=offline` and `include_granted_scopes=true`.
    A refresh token comes back only on the FIRST code exchange, so keep the stored
    one when an exchange returns none.
  - `revoke`: POST `https://oauth2.googleapis.com/revoke` with `token`, and
    `scope: "grant"`. **Revoking removes the person's WHOLE Google grant, every
    Google connector**, so a per-feature disconnect stops using that feature's
    scopes locally and only a full Google disconnect revokes.
  - `identity`: identify the account by the id_token's `sub` (request `openid`;
    issuer `https://accounts.google.com` or `accounts.google.com`; audience is
    the `clientId`), never by email, which Google says is neither unique nor
    permanent.
  `restrictedScopes` is empty: none of this connector's scopes is restricted.

  Nothing a request sends has changed; this is what a host needs to run the
  connection.

## [0.2.0] — 2026-11-08

### Added

- **Laravel integration, in this package** (`src/Laravel/`), auto-discovered
  through composer's `extra.laravel`. Laravel is SUGGESTED, never required:
  outside a Laravel app none of it loads.
  - a service provider that merges `config/google-meet.php` under
    `connectors.google-meet` (credentials from the environment, or per call for a
    multi-account app);
  - the `GoogleMeet` facade: `GoogleMeet::call('<operation>', [...])` runs any action;
  - `GoogleMeet::fake()`, answered from the connector's faker, with
    `assertSent` / `assertNotSent` / `assertNothingSent` / `assertSentCount`;
  - its own Pest test of all of it against a booted Laravel app.

### Changed

- **Tests: Pest `^5`**, and `laravel/framework` `^13` as a DEV-ONLY test
  dependency (the framework this package integrates with; nothing ships in
  `require`).

## [0.1.0] — 2026-09-16

### Added

- **`space_create`** — create a Meet space and get its join link (`POST /spaces`, scope `meetings.space.created`).
- **`space_get`** — read a space's current state, including whether a conference is live right now (`GET /spaces/{spaceId}`).
- **`conference_record_list`** — past conferences, optionally filtered to one space with Google's own filter grammar passed through verbatim (`GET /conferenceRecords`).
- **`participant_list`** — who attended, as one of signed-in / anonymous / phone-dial-in per row, the whole attendance span rather than a single join/leave pair.
- **`transcript_list`** / **`transcript_entry_list`** — a finished conference's transcript, one utterance per entry, when transcription was on.
- OAuth2, standard reusable Google refresh tokens. Sandbox `unverified`: no separate test estate found, but nobody has confirmed there is truly nothing.

**This is the CONNECTOR half of Tynn #9 (MOIC's meeting bot).** A LIVE
transcript and live participant status (waiting room / admitted / left) are
NOT offered by the stable Meet REST API v2 this connector uses — that needs
Meet's Media API, developer-preview as of this writing, and the bot RUNTIME
that would actually join a call and stream media is explicitly the owner's
architecture decision, not this connector's. What ships here: creating a
space, and reading what happened after the fact.

Verified against the Meet API v2 Discovery Document
(`https://meet.googleapis.com/$discovery/rest?version=v2`) on 2026-09-16.
