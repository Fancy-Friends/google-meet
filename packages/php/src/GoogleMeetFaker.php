<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleMeet;

use ParticleAcademy\Connectors\FakeRequest;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_meet
 */
/**
 * The Google Meet faker — the PHP twin of the js package's `src/faker.ts`.
 *
 * Bit-for-bit identical: the same FNV-1a seed and the same xorshift32
 * sequence, so a golden fixture asserts the exact faked payload and BOTH
 * runtimes have to produce it. That turns the faker into a parity test rather
 * than a convenience.
 */
final class GoogleMeetFaker
{
    /** @param array<string,mixed> $request */
    public static function respond(string $operation, array $request): mixed
    {
        /** @var array<string,mixed> $config */
        $config = $request['config'] ?? [];
        /** @var FakeValuesLike $fake */
        $fake = $request['fake'];

        return match ($operation) {
            'conference_record_list' => self::ConferenceRecordList($config, $fake),
            'participant_list' => self::ParticipantList($config, $fake),
            'space_create' => self::SpaceCreate($config, $fake),
            'space_get' => self::SpaceGet($config, $fake),
            'transcript_entry_list' => self::TranscriptEntryList($config, $fake),
            'transcript_list' => self::TranscriptList($config, $fake),
            default => throw new \InvalidArgumentException(
                // A faker asked for an operation it has no shape for must SAY so.
                // Making something up would produce a green run whose output
                // silently has none of the fields the author is about to reference.
                'google_meet: no fake response is defined for "'.$operation.'". '
                    .'Add a fixture under provider/fixtures/ and regenerate — a connector without a faker '
                    .'cannot be developed against, tested, or demonstrated.'
            ),
        };
    }

    /** @param array<string,mixed> $config */
    private static function ConferenceRecordList(array $config, mixed $fake): array|\stdClass
    {
        return [
        'conferenceRecords' => [
            [
                'name' => $fake->id('conferenceRecords'),
                'startTime' => '2026-09-15T14:00:00.000Z',
                'endTime' => '2026-09-15T14:40:12.000Z',
                'expireTime' => '2026-10-15T14:40:12.000Z',
                'space' => 'spaces/abc123def456',
            ],
        ],
    ];
    }

    /** @param array<string,mixed> $config */
    private static function ParticipantList(array $config, mixed $fake): array|\stdClass
    {
        return [
        'participants' => [
            [
                'name' => $fake->id('participants'),
                'earliestStartTime' => '2026-09-15T14:00:05.000Z',
                'latestEndTime' => '2026-09-15T14:40:00.000Z',
                'signedinUser' => [
                    'user' => 'users/ada',
                    'displayName' => 'Ada Lovelace',
                ],
            ],
            [
                'name' => $fake->id('participants'),
                'earliestStartTime' => '2026-09-15T14:01:30.000Z',
                'latestEndTime' => '2026-09-15T14:38:00.000Z',
                'anonymousUser' => [
                    'displayName' => 'Guest',
                ],
            ],
            [
                'name' => $fake->id('participants'),
                'earliestStartTime' => '2026-09-15T14:02:00.000Z',
                'latestEndTime' => '2026-09-15T14:15:00.000Z',
                'phoneUser' => [
                    'displayName' => '+1 555-***-0100',
                ],
            ],
        ],
    ];
    }

    /** @param array<string,mixed> $config */
    private static function SpaceCreate(array $config, mixed $fake): array|\stdClass
    {
        return [
        'name' => $fake->id('spaces'),
        'meetingUri' => 'https://meet.google.com/abc-defg-hij',
        'meetingCode' => 'abc-defg-hij',
        'config' => [
            'accessType' => ((($v = $config['accessType'] ?? null) !== null && $v !== '') ? (string) $v : 'OPEN'),
            'entryPointAccess' => ((($v = $config['entryPointAccess'] ?? null) !== null && $v !== '') ? (string) $v : 'ALL'),
        ],
    ];
    }

    /** @param array<string,mixed> $config */
    private static function SpaceGet(array $config, mixed $fake): array|\stdClass
    {
        return [
        'name' => ((($v = $config['spaceId'] ?? null) !== null && $v !== '') ? (string) $v : $fake->id('spaces')),
        'meetingUri' => 'https://meet.google.com/abc-defg-hij',
        'meetingCode' => 'abc-defg-hij',
        'config' => [
            'accessType' => 'TRUSTED',
            'entryPointAccess' => 'ALL',
        ],
        'activeConference' => [
            'conferenceRecord' => $fake->id('conferenceRecords'),
        ],
    ];
    }

    /** @param array<string,mixed> $config */
    private static function TranscriptEntryList(array $config, mixed $fake): array|\stdClass
    {
        return [
        'transcriptEntries' => [
            [
                'name' => $fake->id('entries'),
                'participant' => 'participants/p1',
                'text' => 'Let\'s start with the roadmap.',
                'languageCode' => 'en-US',
                'startTime' => '2026-09-15T14:00:12.000Z',
                'endTime' => '2026-09-15T14:00:15.000Z',
            ],
            [
                'name' => $fake->id('entries'),
                'participant' => 'participants/p2',
                'text' => 'Sounds good, I\'ll share my screen.',
                'languageCode' => 'en-US',
                'startTime' => '2026-09-15T14:00:16.000Z',
                'endTime' => '2026-09-15T14:00:19.000Z',
            ],
        ],
    ];
    }

    /** @param array<string,mixed> $config */
    private static function TranscriptList(array $config, mixed $fake): array|\stdClass
    {
        return [
        'transcripts' => [
            [
                'name' => $fake->id('transcripts'),
                'state' => 'ENDED',
                'startTime' => '2026-09-15T14:00:10.000Z',
                'endTime' => '2026-09-15T14:40:05.000Z',
                'docsDestination' => [
                    'document' => $fake->id('doc'),
                    'exportUri' => 'https://docs.google.com/document/d/abcdef123456',
                ],
            ],
        ],
    ];
    }
}
