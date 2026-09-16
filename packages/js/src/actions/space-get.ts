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
 * Read a Meet space's current state, including whether a conference is active
 * right now.
 *
 * GET /spaces/{spaceId} —
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/get
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

export const SPACE_GET_OPERATION = "space_get";

export type SpaceGetOptions = {
  /** The node's resolved config. Keys: spaceId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleMeetSpaceGet(options: SpaceGetOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.spaceId === undefined || config.spaceId === null || config.spaceId === "") {
    throw new Error(`space_get: "spaceId" is required (Space ID).`);
  }

  return callConnector(GOOGLE_MEET, {
    operation: SPACE_GET_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/spaces/${encodeURIComponent(String(config.spaceId))}`,
      query: {},
    },
  });
}
