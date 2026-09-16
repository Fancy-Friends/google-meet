/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * Google Meet's node kinds for fancy-flow.
 *
 * Install this on every host. The TypeScript executors live in the js
 * package's `./flow` subpath; PHP and Python hosts run their own and need only
 * this.
 */

export * from "./service.js";
export * from "./kinds/conference-record-list.js";
export * from "./kinds/participant-list.js";
export * from "./kinds/space-create.js";
export * from "./kinds/space-get.js";
export * from "./kinds/transcript-entry-list.js";
export * from "./kinds/transcript-list.js";

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { googleMeetConferenceRecordListKind } from "./kinds/conference-record-list.js";
import { googleMeetParticipantListKind } from "./kinds/participant-list.js";
import { googleMeetSpaceCreateKind } from "./kinds/space-create.js";
import { googleMeetSpaceGetKind } from "./kinds/space-get.js";
import { googleMeetTranscriptEntryListKind } from "./kinds/transcript-entry-list.js";
import { googleMeetTranscriptListKind } from "./kinds/transcript-list.js";

/** Every Google Meet kind, for a host that registers the lot. */
export const GOOGLE_MEET_KINDS: NodeKindDefinition[] = [
  googleMeetConferenceRecordListKind,
  googleMeetParticipantListKind,
  googleMeetSpaceCreateKind,
  googleMeetSpaceGetKind,
  googleMeetTranscriptEntryListKind,
  googleMeetTranscriptListKind,
];
