/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/conference-record-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/conference-record-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * List conference records — List past conferences, optionally filtered to one
 * space.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords/list
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_CONFERENCE_RECORD_LIST_KIND = "@particle-academy/google_meet_conference_record_list";
export const GOOGLE_MEET_CONFERENCE_RECORD_LIST_OPERATION = "conference_record_list";

export const GOOGLE_MEET_CONFERENCE_RECORD_LIST_META = googleMeetMeta("action", "conference records", "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords/list");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_CONFERENCE_RECORD_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.conferenceRecords",
    "type": "array",
    "description": "This page's records, each with name (conferenceRecords/{id}), startTime, endTime, expireTime and space (the spaces/{id} it belongs to)."
  },
  {
    "path": "data.nextPageToken",
    "type": "string",
    "description": "Present when there is another page."
  }
];

export const googleMeetConferenceRecordListKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_CONFERENCE_RECORD_LIST_META, {
  name: GOOGLE_MEET_CONFERENCE_RECORD_LIST_KIND,
  aliases: ["google_meet_conference_record_list"],
  label: "List conference records",
  description: "List past conferences, optionally filtered to one space.",
  icon: "🎥",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_MEET_CONFERENCE_RECORD_LIST_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "filter",
      "label": "Filter",
      "description": "Google's filter grammar, e.g. space.name = \"spaces/abc123\" to see one space's history, or space.meeting_code = \"abc-defg-hij\". Leave blank for every conference the account can see."
    },
    {
      "type": "number",
      "key": "pageSize",
      "label": "Page size",
      "min": 1,
      "max": 100,
      "description": "Records per page. Leave blank for Google's default."
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
    summarize(GOOGLE_MEET_CONFERENCE_RECORD_LIST_META, config as Record<string, unknown>, "conference records"),
});
