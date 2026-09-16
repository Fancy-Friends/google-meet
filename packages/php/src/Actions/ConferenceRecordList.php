<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Actions;

use ParticleAcademy\GoogleMeet\GoogleMeet;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
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
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls Google Meet or calls the faker.
 */
final class ConferenceRecordList
{
    public const OPERATION = 'conference_record_list';
    public const METHOD = 'GET';
    public const PATH = '/conferenceRecords';
    public const SIDE_EFFECTS = 'none';

    /**
     * Build the JSON body for one call.
     *
     * Validation fails loudly and specifically here, rather than three frames
     * later as an "invalid request" from Google Meet.
     *
     * @param array<string,mixed> $config
     * An EMPTY body is `{}`, not `[]` — and PHP cannot tell those apart, because
     * both are `array()` and `json_encode` picks the list. So an empty one is
     * returned as an object. TypeScript and Python have no such ambiguity, which
     * is why this is a difference only the byte-parity suite can see.
     *
     * @return array<string,mixed>|\stdClass
     */
    public static function body(array $config): array|\stdClass
    {
        $pageSize = $config['pageSize'] ?? null;
        if (($pageSize !== null && $pageSize !== '') && ! (is_numeric($pageSize) && (float) $pageSize === floor((float) $pageSize) && (float) $pageSize >= 1 && (float) $pageSize <= 100)) {
            throw new ConnectorConfigException(
                'conference_record_list: "pageSize" must be a integer, got '.json_encode($pageSize).'.'
            );
        }

        $body = [];

        $value = $config['filter'] ?? null;
        if ($value !== null && $value !== '') {
            $body['filter'] = (string) $value;
        }

        $value = $config['pageSize'] ?? null;
        if ($value !== null && $value !== '') {
            $body['pageSize'] = (int) $value;
        }

        $value = $config['pageToken'] ?? null;
        if ($value !== null && $value !== '') {
            $body['pageToken'] = (string) $value;
        }

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }
}
