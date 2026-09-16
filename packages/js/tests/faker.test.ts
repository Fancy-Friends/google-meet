/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { googleMeetFaker } from "../src/faker.js";

test("conference_record_list fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("conference_record_list", fakeRequest("google_meet", "conference_record_list", config));

  assert.deepEqual(faked, {
    "conferenceRecords": [
      {
        "name": "conferenceRecords_fake_45a444b26b7e",
        "startTime": "2026-09-15T14:00:00.000Z",
        "endTime": "2026-09-15T14:40:12.000Z",
        "expireTime": "2026-10-15T14:40:12.000Z",
        "space": "spaces/abc123def456"
      }
    ]
  });
});

test("participant_list fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("participant_list", fakeRequest("google_meet", "participant_list", config));

  assert.deepEqual(faked, {
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
  });
});

test("space_create fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("space_create", fakeRequest("google_meet", "space_create", config));

  assert.deepEqual(faked, {
    "name": "spaces_fake_a5eb17d8251e",
    "meetingUri": "https://meet.google.com/abc-defg-hij",
    "meetingCode": "abc-defg-hij",
    "config": {
      "accessType": "OPEN",
      "entryPointAccess": "ALL"
    }
  });
});

test("space_get fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("space_get", fakeRequest("google_meet", "space_get", config));

  assert.deepEqual(faked, {
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
  });
});

test("transcript_entry_list fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("transcript_entry_list", fakeRequest("google_meet", "transcript_entry_list", config));

  assert.deepEqual(faked, {
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
  });
});

test("transcript_list fakes the shape Google Meet publishes", () => {
  const config = {};

  const faked = googleMeetFaker("transcript_list", fakeRequest("google_meet", "transcript_list", config));

  assert.deepEqual(faked, {
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
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => googleMeetFaker("no_such_operation", fakeRequest("google_meet", "no_such_operation", {})), /no fake response/);
});
