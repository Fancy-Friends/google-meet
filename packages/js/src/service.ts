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
 * Google Meet, as one service descriptor shared by every Google Meet
 * operation.
 *
 * @particle-academy/fancy-connector-core carries what is true of ALL
 * connectors. This carries what is true of Google Meet: its base URL, its auth
 * scheme, its idempotency header, and its faker.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Google Meet has no test estate distinct from a real account, as far as this
 * review found (2026-09-16) -- but it is UNVERIFIED, not confirmed.
 * space_create makes a real, joinable meeting space. Use fake mode while
 * building.
 */

import type { ConnectorMode, PreparedRequest, ServiceDescriptor } from "@particle-academy/fancy-connector-core";

import { googleMeetFaker } from "./faker.js";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported. An imported constant lets an upgrade rewrite the
 * very claim it exists to detect, after which the copy agrees with itself
 * forever.
 */
export const CONNECTOR_API_VERSION = 1;

export const GOOGLE_MEET_BASE_URLS = {
  "live": "https://meet.googleapis.com/v2"
} as const;

/** Credential keys a remote call cannot proceed without. */
export const GOOGLE_MEET_REQUIRES = [
  "accessToken"
] as const;

/**
 * Apply Google Meet's auth scheme to an outgoing request.
 *
 * Every Meet API v2 call is a Bearer token on the Authorization header.
 *
 * The mode is passed in because for some providers auth and estate are the
 * same decision expressed in the URL; here it is unused, and saying so is
 * cheaper than wondering later whether it was forgotten.
 */
export function googleMeetAuthorize(
  credentials: Record<string, string | undefined>,
  request: PreparedRequest,
  _mode: ConnectorMode,
): void {
  request.headers.Authorization = `Bearer ${credentials.accessToken ?? ""}`;
}

/** The Google Meet service, for the TypeScript runtime. */
export const GOOGLE_MEET: ServiceDescriptor = {
  service: "google_meet",
  title: "Google Meet",
  sandbox: "unverified",
  baseUrls: { ...GOOGLE_MEET_BASE_URLS },
  requires: [...GOOGLE_MEET_REQUIRES],
  authorize: googleMeetAuthorize,
  faker: googleMeetFaker,
};
