/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/transcript-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/transcript-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * List transcripts — List a finished conference's transcripts, when
 * transcription was on.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts/list
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_TRANSCRIPT_LIST_KIND = "@particle-academy/google_meet_transcript_list";
export const GOOGLE_MEET_TRANSCRIPT_LIST_OPERATION = "transcript_list";

export const GOOGLE_MEET_TRANSCRIPT_LIST_META = googleMeetMeta("action", "a conference's transcripts", "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts/list");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_TRANSCRIPT_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.transcripts",
    "type": "array",
    "description": "Usually one, unless the meeting was recorded in segments. Each has name (…/transcripts/{id} -- what transcript_entry_list needs), state, startTime, endTime, and docsDestination.exportUri (a Google Docs link, when export finished)."
  }
];

export const googleMeetTranscriptListKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_TRANSCRIPT_LIST_META, {
  name: GOOGLE_MEET_TRANSCRIPT_LIST_KIND,
  aliases: ["google_meet_transcript_list"],
  label: "List transcripts",
  description: "List a finished conference's transcripts, when transcription was on.",
  icon: "📝",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_MEET_TRANSCRIPT_LIST_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "conferenceRecordId",
      "label": "Conference record ID",
      "required": true,
      "description": "The id from conference_record_list's data.conferenceRecords[].name (conferenceRecords/{id} -- give the id after the slash)."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_MEET_TRANSCRIPT_LIST_META, config as Record<string, unknown>, "a conference's transcripts"),
});
