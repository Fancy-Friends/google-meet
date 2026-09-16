/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ + triggers/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ + triggers/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */

/**
 * Google Meet's node kinds with their TypeScript executors attached — for
 * hosts that EXECUTE on TS.
 *
 * The authoring surface in @particle-academy/google-meet-ui carries no
 * executor: the editor is React on every host, so a PHP or Python project
 * installs the ui package and never this one.
 */

import type { NodeExecutor, NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import {
  idempotencyKeyFor,
  NO_IDEMPOTENCY_KEY_WARNING,
  resolveConnection,
  triggerEvent,
  type RequestedMode,
} from "@particle-academy/fancy-connector-core";
import { GOOGLE_MEET } from "./service.js";

import {
  googleMeetConferenceRecordListKind,
  googleMeetParticipantListKind,
  googleMeetSpaceCreateKind,
  googleMeetSpaceGetKind,
  googleMeetTranscriptEntryListKind,
  googleMeetTranscriptListKind,
} from "@particle-academy/google-meet-ui";

import { googleMeetConferenceRecordList } from "./actions/conference-record-list.js";
import { googleMeetParticipantList } from "./actions/participant-list.js";
import { googleMeetSpaceCreate } from "./actions/space-create.js";
import { googleMeetSpaceGet } from "./actions/space-get.js";
import { googleMeetTranscriptEntryList } from "./actions/transcript-entry-list.js";
import { googleMeetTranscriptList } from "./actions/transcript-list.js";

export const googleMeetConferenceRecordListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetConferenceRecordList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet conference_record_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleMeetParticipantListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetParticipantList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet participant_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleMeetSpaceCreateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetSpaceCreate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet space_create ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleMeetSpaceGetExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetSpaceGet({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet space_get ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleMeetTranscriptEntryListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetTranscriptEntryList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet transcript_entry_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleMeetTranscriptListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleMeetTranscriptList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_meet transcript_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

/** The kinds a TypeScript host registers. */
export const GOOGLE_MEET_RUNNABLE_KINDS: NodeKindDefinition[] = [
  { ...googleMeetConferenceRecordListKind, executor: googleMeetConferenceRecordListExecutor },
  { ...googleMeetParticipantListKind, executor: googleMeetParticipantListExecutor },
  { ...googleMeetSpaceCreateKind, executor: googleMeetSpaceCreateExecutor },
  { ...googleMeetSpaceGetKind, executor: googleMeetSpaceGetExecutor },
  { ...googleMeetTranscriptEntryListKind, executor: googleMeetTranscriptEntryListExecutor },
  { ...googleMeetTranscriptListKind, executor: googleMeetTranscriptListExecutor },
];
