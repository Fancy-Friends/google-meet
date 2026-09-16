<?php

declare(strict_types=1);

/*
 * Google Meet — the published Composer package.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

$autoload = getcwd().'/vendor/autoload.php';

if (! is_file($autoload)) {
    fwrite(STDERR, 'No vendor/autoload.php in '.getcwd().PHP_EOL);
    fwrite(STDERR, 'Run this from a project that has composer-required the published package:'.PHP_EOL);
    fwrite(STDERR, '    composer require particle-academy/google-meet-php'.PHP_EOL);
    exit(2);
}

require $autoload;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\GoogleMeet\GoogleMeetFaker;

$goldens = [
    [
        'operation' => 'conference_record_list',
        'config' => [],
        'expected' => [
            'conferenceRecords' => [
                [
                    'name' => 'conferenceRecords_fake_45a444b26b7e',
                    'startTime' => '2026-09-15T14:00:00.000Z',
                    'endTime' => '2026-09-15T14:40:12.000Z',
                    'expireTime' => '2026-10-15T14:40:12.000Z',
                    'space' => 'spaces/abc123def456',
                ],
            ],
        ],
    ],
    [
        'operation' => 'participant_list',
        'config' => [],
        'expected' => [
            'participants' => [
                [
                    'name' => 'participants_fake_b9f850ddcf96',
                    'earliestStartTime' => '2026-09-15T14:00:05.000Z',
                    'latestEndTime' => '2026-09-15T14:40:00.000Z',
                    'signedinUser' => [
                        'user' => 'users/ada',
                        'displayName' => 'Ada Lovelace',
                    ],
                ],
                [
                    'name' => 'participants_fake_de63760da4f3',
                    'earliestStartTime' => '2026-09-15T14:01:30.000Z',
                    'latestEndTime' => '2026-09-15T14:38:00.000Z',
                    'anonymousUser' => [
                        'displayName' => 'Guest',
                    ],
                ],
                [
                    'name' => 'participants_fake_455cdcf806b5',
                    'earliestStartTime' => '2026-09-15T14:02:00.000Z',
                    'latestEndTime' => '2026-09-15T14:15:00.000Z',
                    'phoneUser' => [
                        'displayName' => '+1 555-***-0100',
                    ],
                ],
            ],
        ],
    ],
    [
        'operation' => 'space_create',
        'config' => [],
        'expected' => [
            'name' => 'spaces_fake_a5eb17d8251e',
            'meetingUri' => 'https://meet.google.com/abc-defg-hij',
            'meetingCode' => 'abc-defg-hij',
            'config' => [
                'accessType' => 'OPEN',
                'entryPointAccess' => 'ALL',
            ],
        ],
    ],
    [
        'operation' => 'space_get',
        'config' => [],
        'expected' => [
            'name' => 'spaces_fake_06f98e98d278',
            'meetingUri' => 'https://meet.google.com/abc-defg-hij',
            'meetingCode' => 'abc-defg-hij',
            'config' => [
                'accessType' => 'TRUSTED',
                'entryPointAccess' => 'ALL',
            ],
            'activeConference' => [
                'conferenceRecord' => 'conferenceRecords_fake_495225bbb14d',
            ],
        ],
    ],
    [
        'operation' => 'transcript_entry_list',
        'config' => [],
        'expected' => [
            'transcriptEntries' => [
                [
                    'name' => 'entries_fake_0c7bb3783885',
                    'participant' => 'participants/p1',
                    'text' => 'Let\'s start with the roadmap.',
                    'languageCode' => 'en-US',
                    'startTime' => '2026-09-15T14:00:12.000Z',
                    'endTime' => '2026-09-15T14:00:15.000Z',
                ],
                [
                    'name' => 'entries_fake_80ea4613cd20',
                    'participant' => 'participants/p2',
                    'text' => 'Sounds good, I\'ll share my screen.',
                    'languageCode' => 'en-US',
                    'startTime' => '2026-09-15T14:00:16.000Z',
                    'endTime' => '2026-09-15T14:00:19.000Z',
                ],
            ],
        ],
    ],
    [
        'operation' => 'transcript_list',
        'config' => [],
        'expected' => [
            'transcripts' => [
                [
                    'name' => 'transcripts_fake_eea981f20c62',
                    'state' => 'ENDED',
                    'startTime' => '2026-09-15T14:00:10.000Z',
                    'endTime' => '2026-09-15T14:40:05.000Z',
                    'docsDestination' => [
                        'document' => 'doc_fake_297e7e113139',
                        'exportUri' => 'https://docs.google.com/document/d/abcdef123456',
                    ],
                ],
            ],
        ],
    ],
];

foreach ($goldens as $golden) {
    $operation = $golden['operation'];
    $config = $golden['config'];

    $fake = new FakeValues(FakeValues::seedForCall('google_meet', $operation, $config));
    $faked = GoogleMeetFaker::respond($operation, ['config' => $config, 'fake' => $fake]);

    if ($faked !== $golden['expected']) {
        fwrite(STDERR, "the PUBLISHED package produced different bytes for {$operation}\n");
        fwrite(STDERR, '  got:      '.json_encode($faked)."\n");
        fwrite(STDERR, '  expected: '.json_encode($golden['expected'])."\n");
        exit(1);
    }

    echo "  ok   {$operation}\n";
}

echo "\n  ".count($goldens)." operations verified against the published package.\n";
