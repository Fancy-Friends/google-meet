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
 * The Google Meet faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES Google Meet actually publishes, so an author can wire {{ $json.data.id
 * }} against a fake and have it keep working against the real thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakeConferenceRecordList({ config, fake }: FakeRequest): unknown {
  return {
    "conferenceRecords": [
      {
        "name": fake.id("conferenceRecords"),
        "startTime": "2026-09-15T14:00:00.000Z",
        "endTime": "2026-09-15T14:40:12.000Z",
        "expireTime": "2026-10-15T14:40:12.000Z",
        "space": "spaces/abc123def456",
      },
    ],
  };
}

function fakeParticipantList({ config, fake }: FakeRequest): unknown {
  return {
    "participants": [
      {
        "name": fake.id("participants"),
        "earliestStartTime": "2026-09-15T14:00:05.000Z",
        "latestEndTime": "2026-09-15T14:40:00.000Z",
        "signedinUser": {
          "user": "users/ada",
          "displayName": "Ada Lovelace",
        },
      },
      {
        "name": fake.id("participants"),
        "earliestStartTime": "2026-09-15T14:01:30.000Z",
        "latestEndTime": "2026-09-15T14:38:00.000Z",
        "anonymousUser": {
          "displayName": "Guest",
        },
      },
      {
        "name": fake.id("participants"),
        "earliestStartTime": "2026-09-15T14:02:00.000Z",
        "latestEndTime": "2026-09-15T14:15:00.000Z",
        "phoneUser": {
          "displayName": "+1 555-***-0100",
        },
      },
    ],
  };
}

function fakeSpaceCreate({ config, fake }: FakeRequest): unknown {
  return {
    "name": fake.id("spaces"),
    "meetingUri": "https://meet.google.com/abc-defg-hij",
    "meetingCode": "abc-defg-hij",
    "config": {
      "accessType": (config.accessType !== undefined && config.accessType !== null && config.accessType !== "" ? String(config.accessType) : "OPEN"),
      "entryPointAccess": (config.entryPointAccess !== undefined && config.entryPointAccess !== null && config.entryPointAccess !== "" ? String(config.entryPointAccess) : "ALL"),
    },
  };
}

function fakeSpaceGet({ config, fake }: FakeRequest): unknown {
  return {
    "name": (config.spaceId !== undefined && config.spaceId !== null && config.spaceId !== "" ? String(config.spaceId) : fake.id("spaces")),
    "meetingUri": "https://meet.google.com/abc-defg-hij",
    "meetingCode": "abc-defg-hij",
    "config": {
      "accessType": "TRUSTED",
      "entryPointAccess": "ALL",
    },
    "activeConference": {
      "conferenceRecord": fake.id("conferenceRecords"),
    },
  };
}

function fakeTranscriptEntryList({ config, fake }: FakeRequest): unknown {
  return {
    "transcriptEntries": [
      {
        "name": fake.id("entries"),
        "participant": "participants/p1",
        "text": "Let's start with the roadmap.",
        "languageCode": "en-US",
        "startTime": "2026-09-15T14:00:12.000Z",
        "endTime": "2026-09-15T14:00:15.000Z",
      },
      {
        "name": fake.id("entries"),
        "participant": "participants/p2",
        "text": "Sounds good, I'll share my screen.",
        "languageCode": "en-US",
        "startTime": "2026-09-15T14:00:16.000Z",
        "endTime": "2026-09-15T14:00:19.000Z",
      },
    ],
  };
}

function fakeTranscriptList({ config, fake }: FakeRequest): unknown {
  return {
    "transcripts": [
      {
        "name": fake.id("transcripts"),
        "state": "ENDED",
        "startTime": "2026-09-15T14:00:10.000Z",
        "endTime": "2026-09-15T14:40:05.000Z",
        "docsDestination": {
          "document": fake.id("doc"),
          "exportUri": "https://docs.google.com/document/d/abcdef123456",
        },
      },
    ],
  };
}

export const googleMeetFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "conference_record_list":
      return fakeConferenceRecordList(request);

    case "participant_list":
      return fakeParticipantList(request);

    case "space_create":
      return fakeSpaceCreate(request);

    case "space_get":
      return fakeSpaceGet(request);

    case "transcript_entry_list":
      return fakeTranscriptEntryList(request);

    case "transcript_list":
      return fakeTranscriptList(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `google_meet: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
