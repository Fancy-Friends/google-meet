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
 * List past conferences, optionally filtered to one space.
 *
 * GET /conferenceRecords —
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords/list
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

export const CONFERENCE_RECORD_LIST_OPERATION = "conference_record_list";

export type ConferenceRecordListOptions = {
  /** The node's resolved config. Keys: filter, pageSize, pageToken. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleMeetConferenceRecordList(options: ConferenceRecordListOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  {
    const n = Number(config.pageSize);
    const given = config.pageSize !== undefined && config.pageSize !== null && config.pageSize !== "";
    if (given && !(Number.isInteger(n) && n >= 1 && n <= 100)) {
      throw new Error(
        `conference_record_list: "pageSize" must be a integer, got ${JSON.stringify(config.pageSize)}.`,
      );
    }
  }

  return callConnector(GOOGLE_MEET, {
    operation: CONFERENCE_RECORD_LIST_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: "/conferenceRecords",
      query: {
        ...(config.filter !== undefined && config.filter !== null && config.filter !== "" ? { "filter": String(config.filter) } : {}),
        ...(config.pageSize !== undefined && config.pageSize !== null && config.pageSize !== "" ? { "pageSize": Math.trunc(Number(config.pageSize)) } : {}),
        ...(config.pageToken !== undefined && config.pageToken !== null && config.pageToken !== "" ? { "pageToken": String(config.pageToken) } : {}),
      },
    },
  });
}
