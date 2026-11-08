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
 * Google Meet's identity on the authoring surface, shared by every Google Meet
 * node.
 *
 * This file must import nothing from the js package: a PHP or Python project
 * installs the ui package and never that one, and the import would be a
 * dangling module the moment it did.
 *
 * ## The sandbox trap
 *
 * Google Meet has no test estate distinct from a real account, as far as this
 * review found (2026-09-16) -- but it is UNVERIFIED, not confirmed.
 * space_create makes a real, joinable meeting space. Use fake mode while
 * building.
 */

import type { ConnectorDomain, ConnectorMeta } from "@particle-academy/fancy-flow/connectors";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported — an imported constant lets an upgrade rewrite the
 * very claim it exists to detect.
 */
export const CONNECTOR_API_VERSION = 1;

/** The parts of a connector's identity that belong to the SERVICE, not the node. */
export const GOOGLE_MEET_SERVICE = {
  service: "google_meet",
  serviceTitle: "Google Meet",
  domain: "messaging",
  sandbox: "unverified",
} as const satisfies Pick<ConnectorMeta, "service" | "serviceTitle" | "domain" | "sandbox">;

/**
 * Every connector domain weaver knows, pinned against fancy-flow's union.
 *
 * A closed set copied into three codebases stays correct only while something
 * MAKES it: this line fails to compile the moment weaver carries a value
 * fancy-flow does not, including the values no provider uses yet.
 */
const WEAVER_DOMAINS: readonly ConnectorDomain[] = [
  "payments",
  "commerce",
  "messaging",
  "email",
  "crm",
  "support",
  "storage",
  "calendar",
  "productivity",
  "database",
  "devtools",
  "analytics",
  "marketing",
  "ai",
  "forms",
  "hr",
  "geo"
];
void WEAVER_DOMAINS;

/** The credentials a Google Meet connection holds. */
export const GOOGLE_MEET_CREDENTIALS = [
  {
    "key": "clientId",
    "label": "OAuth client ID",
    "scope": "provider",
    "secret": false,
    "help": "From the Google Cloud project you registered. One value for the whole installation -- the same app serves every connected Google account."
  },
  {
    "key": "clientSecret",
    "label": "OAuth client secret",
    "scope": "provider",
    "secret": true,
    "help": "From the same Google Cloud project. Used to exchange the code and to refresh; never sent with an API request."
  },
  {
    "key": "accessToken",
    "label": "Access token",
    "scope": "account",
    "secret": true,
    "help": "Obtained by the host's OAuth exchange, PER CONNECTED GOOGLE ACCOUNT. Expires after one hour -- a host that does not refresh will work for a while and then fail with no warning."
  },
  {
    "key": "refreshToken",
    "label": "Refresh token",
    "scope": "account",
    "secret": true,
    "optional": true,
    "help": "Also per account. Reusable -- Google does not rotate it on refresh."
  }
] as const;

/**
 * The OAuth2 exchange Google Meet requires — DECLARED here, performed by the
 * host.
 *
 * A consent screen needs a browser, a redirect URI and somewhere to persist
 * the result, and all three belong to the host; a package that ran the dance
 * itself would have to own a web server. So this says precisely enough for a
 * host to do it.
 *
 * The access token lasts 3600 seconds. A host that never refreshes will work
 * all afternoon and be broken by morning, which is why the lifetime is stated
 * rather than left to be discovered.
 *
 * Its refresh tokens do NOT rotate: the same one is reusable, so a refresh may
 * safely be retried and may run concurrently. That is stated rather than
 * assumed because the opposite — a provider that spends the token and revokes
 * the grant on a replay — looks identical until it happens.
 *
 * Its consent grant is SHARED with every connector declaring grant "google":
 * one OAuth client, one consent and one refresh token per person, scopes added
 * as features are first used (authorizeParams). Revoking removes the WHOLE
 * grant, so only a full disconnect revokes; a per-feature disconnect stops
 * using the scope locally. Identify the account by the id_token's sub, never
 * by email.
 */
export const GOOGLE_MEET_OAUTH = {
  "flow": "authorization_code",
  "authorizeUrl": "https://accounts.google.com/o/oauth2/v2/auth",
  "tokenUrl": "https://oauth2.googleapis.com/token",
  "scopes": [
    "https://www.googleapis.com/auth/meetings.space.created",
    "https://www.googleapis.com/auth/meetings.space.readonly"
  ],
  "accessTokenCredential": "accessToken",
  "refreshTokenCredential": "refreshToken",
  "refreshTokenRotates": false,
  "accessTokenTtlSeconds": 3600,
  "grant": "google",
  "authorizeParams": {
    "access_type": "offline",
    "include_granted_scopes": "true"
  },
  "revoke": {
    "url": "https://oauth2.googleapis.com/revoke",
    "param": "token",
    "scope": "grant"
  },
  "identity": {
    "scope": "openid",
    "claim": "sub",
    "issuers": [
      "https://accounts.google.com",
      "accounts.google.com"
    ],
    "jwksUrl": "https://www.googleapis.com/oauth2/v3/certs",
    "audienceCredential": "clientId"
  },
  "restrictedScopes": []
} as const;

/** Build a Google Meet node's connector metadata from the operation it performs. */
export function googleMeetMeta(
  role: ConnectorMeta["role"],
  operation: string,
  docs: string,
): ConnectorMeta {
  return { ...GOOGLE_MEET_SERVICE, role, operation, docs };
}
