/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/transcript-entry-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/transcript-entry-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * List transcript entries — Read a finished conference's transcript, one
 * utterance per entry.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_KIND = "@particle-academy/google_meet_transcript_entry_list";
export const GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_OPERATION = "transcript_entry_list";

export const GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_META = googleMeetMeta("action", "transcript entries", "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.transcriptEntries",
    "type": "array",
    "description": "This page's entries, in order. Each has name, participant (participants/{id} -- join against participant_list to get a display name), text (the spoken words), languageCode, startTime and endTime."
  },
  {
    "path": "data.nextPageToken",
    "type": "string",
    "description": "Present when there is another page."
  }
];

export const googleMeetTranscriptEntryListKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_META, {
  name: GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_KIND,
  aliases: ["google_meet_transcript_entry_list"],
  label: "List transcript entries",
  description: "Read a finished conference's transcript, one utterance per entry.",
  icon: "📝",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "conferenceRecordId",
      "label": "Conference record ID",
      "required": true,
      "description": "The id from conference_record_list's data.conferenceRecords[].name (give the id after conferenceRecords/)."
    },
    {
      "type": "text",
      "key": "transcriptId",
      "label": "Transcript ID",
      "required": true,
      "description": "The id from transcript_list's data.transcripts[].name (give the id after transcripts/)."
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
    summarize(GOOGLE_MEET_TRANSCRIPT_ENTRY_LIST_META, config as Record<string, unknown>, "transcript entries"),
});
