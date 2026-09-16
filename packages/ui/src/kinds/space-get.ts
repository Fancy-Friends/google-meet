/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/space-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/space-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * Get meeting space — Read a Meet space's current state, including whether a
 * conference is active right now.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/get
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_SPACE_GET_KIND = "@particle-academy/google_meet_space_get";
export const GOOGLE_MEET_SPACE_GET_OPERATION = "space_get";

export const GOOGLE_MEET_SPACE_GET_META = googleMeetMeta("action", "a Meet space", "https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/get");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_SPACE_GET_OUTPUT: OutputField[] = [
  {
    "path": "data.name",
    "type": "string",
    "description": "The space's resource name, spaces/{id}."
  },
  {
    "path": "data.meetingUri",
    "type": "string",
    "description": "The join link."
  },
  {
    "path": "data.meetingCode",
    "type": "string",
    "description": "The short, human-typeable code."
  },
  {
    "path": "data.config.accessType",
    "type": "string",
    "description": "OPEN, TRUSTED or RESTRICTED."
  },
  {
    "path": "data.config.entryPointAccess",
    "type": "string",
    "description": "ALL or CREATOR_APP_ONLY."
  },
  {
    "path": "data.activeConference.conferenceRecord",
    "type": "string",
    "description": "Present only while a conference is LIVE right now — the conferenceRecords/{id} resource name to read once it ends. Absent between meetings."
  }
];

export const googleMeetSpaceGetKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_SPACE_GET_META, {
  name: GOOGLE_MEET_SPACE_GET_KIND,
  aliases: ["google_meet_space_get"],
  label: "Get meeting space",
  description: "Read a Meet space's current state, including whether a conference is active right now.",
  icon: "🎥",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_MEET_SPACE_GET_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "spaceId",
      "label": "Space ID",
      "required": true,
      "description": "The id from space_create's data.name (spaces/{id} -- give the id after the slash), or the meeting code shown in Meet's own UI. NOT independently spot-checked that the meeting-code form resolves through this exact endpoint; verify with a live call before relying on it."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_MEET_SPACE_GET_META, config as Record<string, unknown>, "a Meet space"),
});
