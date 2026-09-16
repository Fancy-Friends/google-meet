<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleMeet\Actions\ConferenceRecordList;
use ParticleAcademy\GoogleMeet\GoogleMeet;

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
 * List conference records, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleMeetConferenceRecordListExecutor` in
 * @particle-academy/google-meet-js: the same request, built from the node's
 * config by the same `Actions\ConferenceRecordList` a host would call
 * directly, and the same value on `out` — the client's `{data, mode,
 * connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Meet. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_meet_conference_record_list',
    aliases: [
        'google_meet_conference_record_list',
    ],
    category: 'io',
    label: 'List conference records',
    description: 'List past conferences, optionally filtered to one space.',
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
            'path' => 'data.conferenceRecords',
            'type' => 'array',
            'description' => 'This page\'s records, each with name (conferenceRecords/{id}), startTime, endTime, expireTime and space (the spaces/{id} it belongs to).',
        ],
        [
            'path' => 'data.nextPageToken',
            'type' => 'string',
            'description' => 'Present when there is another page.',
        ],
    ],
)]
final class ConferenceRecordListExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleMeet::descriptor(),
            ConferenceRecordList::OPERATION,
            $config,
            [
                'method' => ConferenceRecordList::METHOD,
                'path' => ConferenceRecordList::PATH,
                'query' => ConferenceRecordList::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_meet conference_record_list'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
