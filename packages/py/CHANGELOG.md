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
