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
 * List a finished conference's transcripts, when transcription was on.
 *
 * GET /conferenceRecords/{conferenceRecordId}/transcripts —
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts/list
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls Google Meet or calls the
 * faker.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { GOOGLE_MEET } from "../service.js";

export const TRANSCRIPT_LIST_OPERATION = "transcript_list";

export type TranscriptListOptions = {
  /** The node's resolved config. Keys: conferenceRecordId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleMeetTranscriptList(options: TranscriptListOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.conferenceRecordId === undefined || config.conferenceRecordId === null || config.conferenceRecordId === "") {
    throw new Error(`transcript_list: "conferenceRecordId" is required (Conference record ID).`);
  }

  return callConnector(GOOGLE_MEET, {
    operation: TRANSCRIPT_LIST_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/conferenceRecords/${encodeURIComponent(String(config.conferenceRecordId))}/transcripts`,
      query: {},
    },
  });
}
