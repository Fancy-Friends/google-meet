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
 * List who attended a conference.
 *
 * GET /conferenceRecords/{conferenceRecordId}/participants —
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list
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

export const PARTICIPANT_LIST_OPERATION = "participant_list";

export type ParticipantListOptions = {
  /** The node's resolved config. Keys: conferenceRecordId, pageToken. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleMeetParticipantList(options: ParticipantListOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.conferenceRecordId === undefined || config.conferenceRecordId === null || config.conferenceRecordId === "") {
    throw new Error(`participant_list: "conferenceRecordId" is required (Conference record ID).`);
  }

  return callConnector(GOOGLE_MEET, {
    operation: PARTICIPANT_LIST_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/conferenceRecords/${encodeURIComponent(String(config.conferenceRecordId))}/participants`,
      query: {
        ...(config.pageToken !== undefined && config.pageToken !== null && config.pageToken !== "" ? { "pageToken": String(config.pageToken) } : {}),
      },
    },
  });
}
