<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleMeet\Actions\SpaceGet;
use ParticleAcademy\GoogleMeet\GoogleMeet;

/*
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
 * Get meeting space, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleMeetSpaceGetExecutor` in
 * @particle-academy/google-meet-js: the same request, built from the node's
 * config by the same `Actions\SpaceGet` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Meet. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_meet_space_get',
    aliases: [
        'google_meet_space_get',
    ],
    category: 'io',
    label: 'Get meeting space',
    description: 'Read a Meet space\'s current state, including whether a conference is active right now.',
    icon: '🎥',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => 'data.name',
            'type' => 'string',
            'description' => 'The space\'s resource name, spaces/{id}.',
        ],
        [
            'path' => 'data.meetingUri',
            'type' => 'string',
            'description' => 'The join link.',
        ],
        [
            'path' => 'data.meetingCode',
            'type' => 'string',
            'description' => 'The short, human-typeable code.',
        ],
        [
            'path' => 'data.config.accessType',
            'type' => 'string',
            'description' => 'OPEN, TRUSTED or RESTRICTED.',
        ],
        [
            'path' => 'data.config.entryPointAccess',
            'type' => 'string',
            'description' => 'ALL or CREATOR_APP_ONLY.',
        ],
        [
            'path' => 'data.activeConference.conferenceRecord',
            'type' => 'string',
            'description' => 'Present only while a conference is LIVE right now — the conferenceRecords/{id} resource name to read once it ends. Absent between meetings.',
        ],
    ],
)]
final class SpaceGetExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleMeet::descriptor(),
            SpaceGet::OPERATION,
            $config,
            [
                'method' => SpaceGet::METHOD,
                'path' => SpaceGet::path($config),
                'query' => SpaceGet::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_meet space_get'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
