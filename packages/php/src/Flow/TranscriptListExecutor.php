<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleMeet\Actions\TranscriptList;
use ParticleAcademy\GoogleMeet\GoogleMeet;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/transcript-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/transcript-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */
/**
 * List transcripts, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleMeetTranscriptListExecutor` in
 * @particle-academy/google-meet-js: the same request, built from the node's
 * config by the same `Actions\TranscriptList` a host would call directly, and
 * the same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Meet. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_meet_transcript_list',
    aliases: [
        'google_meet_transcript_list',
    ],
    category: 'io',
    label: 'List transcripts',
    description: 'List a finished conference\'s transcripts, when transcription was on.',
    icon: '📝',
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
            'path' => 'data.transcripts',
            'type' => 'array',
            'description' => 'Usually one, unless the meeting was recorded in segments. Each has name (…/transcripts/{id} -- what transcript_entry_list needs), state, startTime, endTime, and docsDestination.exportUri (a Google Docs link, when export finished).',
        ],
    ],
)]
final class TranscriptListExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleMeet::descriptor(),
            TranscriptList::OPERATION,
            $config,
            [
                'method' => TranscriptList::METHOD,
                'path' => TranscriptList::path($config),
                'query' => TranscriptList::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_meet transcript_list'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
