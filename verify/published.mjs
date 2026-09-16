/*
 * Google Meet — the published npm packages.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { googleMeetFaker } from "@particle-academy/google-meet-js";
import { GOOGLE_MEET_KINDS } from "@particle-academy/google-meet-ui";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

/*
 * WHERE did that come from?
 *
 * Node resolves a bare specifier from the importing MODULE's directory, not
 * the working directory. So running this script across from a checkout
 * resolves out of the REPO's node_modules and silently tests the source
 * again — which it did, and passed, before CI caught it.
 *
 * Two things are checked, because neither is enough alone: that the package
 * came from an INSTALL rather than from source, and that this script is not
 * sitting inside the provider repo it is supposed to be testing.
 */
const resolved = import.meta.resolve("@particle-academy/google-meet-js");
const here = dirname(fileURLToPath(import.meta.url));

assert.ok(
  !existsSync(join(here, "..", "packages", "js", "package.json")),
  `${here} is inside the provider repo, so a bare import resolves the repo's ` +
    "own node_modules. Copy this script into a project that installed the " +
    "published package and run it there.",
);
assert.match(resolved, /node_modules/, `resolved ${resolved}, which is not an installed package`);
console.log(`  ok   resolved from ${resolved}`);

const GOLDENS = [
  {
    "operation": "conference_record_list",
    "config": {},
    "expected": {
      "conferenceRecords": [
        {
          "name": "conferenceRecords_fake_45a444b26b7e",
          "startTime": "2026-09-15T14:00:00.000Z",
          "endTime": "2026-09-15T14:40:12.000Z",
          "expireTime": "2026-10-15T14:40:12.000Z",
          "space": "spaces/abc123def456"
        }
      ]
    }
  },
  {
    "operation": "participant_list",
    "config": {},
    "expected": {
      "participants": [
        {
          "name": "participants_fake_b9f850ddcf96",
          "earliestStartTime": "2026-09-15T14:00:05.000Z",
          "latestEndTime": "2026-09-15T14:40:00.000Z",
          "signedinUser": {
            "user": "users/ada",
            "displayName": "Ada Lovelace"
          }
        },
        {
          "name": "participants_fake_de63760da4f3",
          "earliestStartTime": "2026-09-15T14:01:30.000Z",
          "latestEndTime": "2026-09-15T14:38:00.000Z",
          "anonymousUser": {
            "displayName": "Guest"
          }
        },
        {
          "name": "participants_fake_455cdcf806b5",
          "earliestStartTime": "2026-09-15T14:02:00.000Z",
          "latestEndTime": "2026-09-15T14:15:00.000Z",
          "phoneUser": {
            "displayName": "+1 555-***-0100"
          }
        }
      ]
    }
  },
  {
    "operation": "space_create",
    "config": {},
    "expected": {
      "name": "spaces_fake_a5eb17d8251e",
      "meetingUri": "https://meet.google.com/abc-defg-hij",
      "meetingCode": "abc-defg-hij",
      "config": {
        "accessType": "OPEN",
        "entryPointAccess": "ALL"
      }
    }
  },
  {
    "operation": "space_get",
    "config": {},
    "expected": {
      "name": "spaces_fake_06f98e98d278",
      "meetingUri": "https://meet.google.com/abc-defg-hij",
      "meetingCode": "abc-defg-hij",
      "config": {
        "accessType": "TRUSTED",
        "entryPointAccess": "ALL"
      },
      "activeConference": {
        "conferenceRecord": "conferenceRecords_fake_495225bbb14d"
      }
    }
  },
  {
    "operation": "transcript_entry_list",
    "config": {},
    "expected": {
      "transcriptEntries": [
        {
          "name": "entries_fake_0c7bb3783885",
          "participant": "participants/p1",
          "text": "Let's start with the roadmap.",
          "languageCode": "en-US",
          "startTime": "2026-09-15T14:00:12.000Z",
          "endTime": "2026-09-15T14:00:15.000Z"
        },
        {
          "name": "entries_fake_80ea4613cd20",
          "participant": "participants/p2",
          "text": "Sounds good, I'll share my screen.",
          "languageCode": "en-US",
          "startTime": "2026-09-15T14:00:16.000Z",
          "endTime": "2026-09-15T14:00:19.000Z"
        }
      ]
    }
  },
  {
    "operation": "transcript_list",
    "config": {},
    "expected": {
      "transcripts": [
        {
          "name": "transcripts_fake_eea981f20c62",
          "state": "ENDED",
          "startTime": "2026-09-15T14:00:10.000Z",
          "endTime": "2026-09-15T14:40:05.000Z",
          "docsDestination": {
            "document": "doc_fake_297e7e113139",
            "exportUri": "https://docs.google.com/document/d/abcdef123456"
          }
        }
      ]
    }
  }
];

for (const { operation, config, expected } of GOLDENS) {
  const faked = googleMeetFaker(operation, fakeRequest("google_meet", operation, config));

  assert.deepEqual(
    faked,
    expected,
    `the PUBLISHED package produced different bytes for ${operation} than the repo does`,
  );
  console.log(`  ok   ${operation}`);
}

// The ui package is a separate tarball, and js depends on it by its
// published name — so this also proves that dependency resolves.
assert.equal(GOOGLE_MEET_KINDS.length, 6);
for (const kind of GOOGLE_MEET_KINDS) {
  const keys = kind.configSchema.map((field) => field.key);
  assert.equal(keys[0], "connection");
  assert.equal(keys[1], "mode");
  assert.ok(kind.outputShape.length > 0, `${kind.name} declares no output shape`);
}
console.log(`  ok   ui kinds resolve from ${"@particle-academy/google-meet-ui"}`);

console.log(`\n  ${GOLDENS.length} operations verified against the published packages.`);
