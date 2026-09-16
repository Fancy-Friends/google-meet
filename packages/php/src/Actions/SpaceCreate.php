<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Actions;

use ParticleAcademy\GoogleMeet\GoogleMeet;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/space-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/space-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */
/**
 * Create a new Google Meet space and get its join link.
 *
 * POST /spaces —
 * https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/create
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls Google Meet or calls the faker.
 */
final class SpaceCreate
{
    public const OPERATION = 'space_create';
    public const METHOD = 'POST';
    public const PATH = '/spaces';
    public const SIDE_EFFECTS = 'unsafe-to-replay';

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
        $body = [];

        $value = $config['accessType'] ?? null;
        if ($value !== null && $value !== '') {
            $body['config.accessType'] = (string) $value;
        }

        $value = $config['entryPointAccess'] ?? null;
        if ($value !== null && $value !== '') {
            $body['config.entryPointAccess'] = (string) $value;
        }

        $body = self::nestFields($body);
        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }

    /**
     * `['properties.email' => x]` -> `['properties' => ['email' => x]]`.
     *
     * A dotted `as` means NESTING, and only a JSON body can nest — in a form
     * body that spelling already means a literal dotted key.
     *
     * @param  array<string,mixed>  $flat
     * @return array<string,mixed>
     */
    private static function nestFields(array $flat): array
    {
        $out = [];

        foreach ($flat as $path => $value) {
            $parts = explode('.', (string) $path);
            $node = &$out;

            while (count($parts) > 1) {
                $key = array_shift($parts);

                if (! isset($node[$key]) || ! is_array($node[$key])) {
                    $node[$key] = [];
                }

                $node = &$node[$key];
            }

            $node[$parts[0]] = $value;
            unset($node);
        }

        return $out;
    }
}
