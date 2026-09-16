/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/participant-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/participant-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * List participants — List who attended a conference.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_PARTICIPANT_LIST_KIND = "@particle-academy/google_meet_participant_list";
export const GOOGLE_MEET_PARTICIPANT_LIST_OPERATION = "participant_list";

export const GOOGLE_MEET_PARTICIPANT_LIST_META = googleMeetMeta("action", "a conference's participants", "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_PARTICIPANT_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.participants",
    "type": "array",
    "description": "This page's participants. Each has name (participants/{id}), earliestStartTime, latestEndTime -- the SPAN across every time this person joined and left, not a single join/leave pair, since one person can rejoin -- and exactly one of signedinUser.displayName, anonymousUser.displayName, or phoneUser.displayName (a partially redacted phone number)."
  },
  {
    "path": "data.nextPageToken",
    "type": "string",
    "description": "Present when there is another page."
  }
];

export const googleMeetParticipantListKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_PARTICIPANT_LIST_META, {
  name: GOOGLE_MEET_PARTICIPANT_LIST_KIND,
  aliases: ["google_meet_participant_list"],
  label: "List participants",
  description: "List who attended a conference.",
  icon: "🎥",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_MEET_PARTICIPANT_LIST_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "conferenceRecordId",
      "label": "Conference record ID",
      "required": true,
      "description": "The id from conference_record_list's data.conferenceRecords[].name (conferenceRecords/{id} -- give the id after the slash) or from space_get's data.activeConference.conferenceRecord."
    },
    {
      "type": "text",
      "key": "pageToken",
      "label": "Page token",
      "description": "From a previous call's data.nextPageToken."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_MEET_PARTICIPANT_LIST_META, config as Record<string, unknown>, "a conference's participants"),
});
