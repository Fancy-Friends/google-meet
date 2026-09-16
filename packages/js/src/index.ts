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
 * Google Meet for Node.
 *
 * The service descriptor, its faker, its delivery contract, and one function
 * per operation — plain HTTP, no vendor SDK.
 *
 * The fancy-flow executors and runnable node kinds live behind the `./flow`
 * subpath, so a host with no workflow engine pays nothing for them.
 */

export * from "./service.js";
export * from "./faker.js";
export * from "./actions/conference-record-list.js";
export * from "./actions/participant-list.js";
export * from "./actions/space-create.js";
export * from "./actions/space-get.js";
export * from "./actions/transcript-entry-list.js";
export * from "./actions/transcript-list.js";
