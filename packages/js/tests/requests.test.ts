/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * What Google Meet actually receives.
 *
 * Every assertion below is about the request rather than the response, and
 * none of it touches the network: the transport is a stub that records what it
 * was handed.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import type { PreparedRequest } from "@particle-academy/fancy-connector-core";

import { googleMeetConferenceRecordList } from "../src/actions/conference-record-list.js";
import { googleMeetParticipantList } from "../src/actions/participant-list.js";
import { googleMeetSpaceCreate } from "../src/actions/space-create.js";
import { googleMeetSpaceGet } from "../src/actions/space-get.js";
import { googleMeetTranscriptEntryList } from "../src/actions/transcript-entry-list.js";
import { googleMeetTranscriptList } from "../src/actions/transcript-list.js";

/** Capture the prepared request instead of sending it. */
function capture() {
  const seen: PreparedRequest[] = [];

  return {
    seen,
    transport: async (request: PreparedRequest) => {
      seen.push(request);

      return { status: 200, body: JSON.stringify({ id: "captured" }), headers: {} };
    },
  };
}

const CREDENTIALS = {
  "clientId": "test_clientId",
  "clientSecret": "test_clientSecret",
  "accessToken": "test_accessToken",
  "refreshToken": "test_refreshToken"
};

test("conference_record_list sends GET /conferenceRecords", async () => {
  const { seen, transport } = capture();

  await googleMeetConferenceRecordList({
    config: {
      "filter": "example-filter",
      "pageSize": 100,
      "pageToken": "example-pageToken"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/conferenceRecords"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "filter": "example-filter",
      "pageSize": "100",
      "pageToken": "example-pageToken"
    },
  );
});

test("participant_list sends GET /conferenceRecords/{conferenceRecordId}/participants", async () => {
  const { seen, transport } = capture();

  await googleMeetParticipantList({
    config: {
      "conferenceRecordId": "example-conferenceRecordId",
      "pageToken": "example-pageToken"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/conferenceRecords/example-conferenceRecordId/participants"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "pageToken": "example-pageToken"
    },
  );
});

test("space_create sends POST /spaces", async () => {
  const { seen, transport } = capture();

  await googleMeetSpaceCreate({
    config: {
      "accessType": "OPEN",
      "entryPointAccess": "ALL"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/spaces"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "config": {
      "accessType": "OPEN",
      "entryPointAccess": "ALL"
    }
  });
});

test("space_get sends GET /spaces/{spaceId}", async () => {
  const { seen, transport } = capture();

  await googleMeetSpaceGet({
    config: {
      "spaceId": "example-spaceId"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/spaces/example-spaceId"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {},
  );
});

test("transcript_entry_list sends GET /conferenceRecords/{conferenceRecordId}/transcripts/{transcriptId}/entries", async () => {
  const { seen, transport } = capture();

  await googleMeetTranscriptEntryList({
    config: {
      "conferenceRecordId": "example-conferenceRecordId",
      "transcriptId": "example-transcriptId",
      "pageToken": "example-pageToken"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/conferenceRecords/example-conferenceRecordId/transcripts/example-transcriptId/entries"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "pageToken": "example-pageToken"
    },
  );
});

test("transcript_list sends GET /conferenceRecords/{conferenceRecordId}/transcripts", async () => {
  const { seen, transport } = capture();

  await googleMeetTranscriptList({
    config: {
      "conferenceRecordId": "example-conferenceRecordId"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/conferenceRecords/example-conferenceRecordId/transcripts"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {},
  );
});

test("the credential is placed the way the provider wants it", async () => {
  const { seen, transport } = capture();

  await googleMeetConferenceRecordList({
    config: {
      "filter": "example-filter",
      "pageSize": 100,
      "pageToken": "example-pageToken"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen[0]!.headers.Authorization, "Bearer test_accessToken");
});

test("a missing required field is refused BEFORE anything is sent", async () => {
  // Nothing was attempted, so there is nothing to classify — and the message names
  // the field, rather than letting the provider answer three frames later with
  // "invalid request".
  const { seen, transport } = capture();

  await assert.rejects(
    googleMeetParticipantList({
      config: {
        "pageToken": "example-pageToken"
      },
      credentials: CREDENTIALS,
      mode: "live",
      transport,
    }),
    new RegExp("conferenceRecordId"),
  );

  assert.equal(seen.length, 0, "the request must not have been sent");
});
