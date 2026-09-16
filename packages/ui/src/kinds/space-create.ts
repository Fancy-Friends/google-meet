/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/space-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/space-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * Create meeting space — Create a new Google Meet space and get its join link.
 *
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/create
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleMeetMeta } from "../service.js";

export const GOOGLE_MEET_SPACE_CREATE_KIND = "@particle-academy/google_meet_space_create";
export const GOOGLE_MEET_SPACE_CREATE_OPERATION = "space_create";

export const GOOGLE_MEET_SPACE_CREATE_META = googleMeetMeta("action", "a Meet space", "https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/create");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_MEET_SPACE_CREATE_OUTPUT: OutputField[] = [
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
    "description": "The short, human-typeable code shown in the Meet UI (part of meetingUri)."
  },
  {
    "path": "data.config.accessType",
    "type": "string",
    "description": "Echoes what was requested, or Google's default when omitted."
  },
  {
    "path": "data.config.entryPointAccess",
    "type": "string",
    "description": "Echoes what was requested, or Google's default (ALL) when omitted."
  }
];

export const googleMeetSpaceCreateKind: NodeKindDefinition = defineConnectorKind(GOOGLE_MEET_SPACE_CREATE_META, {
  name: GOOGLE_MEET_SPACE_CREATE_KIND,
  aliases: ["google_meet_space_create"],
  label: "Create meeting space",
  description: "Create a new Google Meet space and get its join link.",
  icon: "🎥",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: GOOGLE_MEET_SPACE_CREATE_OUTPUT,
  configSchema: [
    {
      "type": "select",
      "key": "accessType",
      "label": "Who can join",
      "description": "OPEN: anyone with the link, no knock. TRUSTED: anyone in your organization, no knock; others knock. RESTRICTED: only people and groups explicitly invited. Leave blank for Google's account default.",
      "options": [
        {
          "value": "OPEN",
          "label": "Open — anyone with the link"
        },
        {
          "value": "TRUSTED",
          "label": "Trusted — your organization joins directly"
        },
        {
          "value": "RESTRICTED",
          "label": "Restricted — invited people and groups only"
        }
      ]
    },
    {
      "type": "select",
      "key": "entryPointAccess",
      "label": "Entry points",
      "description": "ALL: any Meet client (web, mobile, phone dial-in, the calling API). CREATOR_APP_ONLY: only the app that created the space, and only through the Meet REST API and SIP — no phone dial-in and no other Meet client. Leave blank for Google's default (ALL).",
      "options": [
        {
          "value": "ALL",
          "label": "All entry points"
        },
        {
          "value": "CREATOR_APP_ONLY",
          "label": "This app only"
        }
      ]
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_MEET_SPACE_CREATE_META, config as Record<string, unknown>, "a Meet space"),
});
