<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleMeet\Actions\SpaceCreate;
use ParticleAcademy\GoogleMeet\GoogleMeet;

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
 * Create meeting space, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleMeetSpaceCreateExecutor` in
 * @particle-academy/google-meet-js: the same request, built from the node's
 * config by the same `Actions\SpaceCreate` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Meet. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_meet_space_create',
    aliases: [
        'google_meet_space_create',
    ],
    category: 'io',
    label: 'Create meeting space',
    description: 'Create a new Google Meet space and get its join link.',
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
    sideEffects: 'unsafe-to-replay',
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
            'description' => 'The short, human-typeable code shown in the Meet UI (part of meetingUri).',
        ],
        [
            'path' => 'data.config.accessType',
            'type' => 'string',
            'description' => 'Echoes what was requested, or Google\'s default when omitted.',
        ],
        [
            'path' => 'data.config.entryPointAccess',
            'type' => 'string',
            'description' => 'Echoes what was requested, or Google\'s default (ALL) when omitted.',
        ],
    ],
)]
final class SpaceCreateExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleMeet::descriptor(),
            SpaceCreate::OPERATION,
            $config,
            [
                'method' => SpaceCreate::METHOD,
                'path' => SpaceCreate::PATH,
                'json' => SpaceCreate::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_meet space_create'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
