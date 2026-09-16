<?php

declare(strict_types=1);

use ParticleAcademy\GoogleMeet\GoogleMeetFaker;
use ParticleAcademy\Connectors\FakeValues;

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
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('conference_record_list fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'conference_record_list', $config));

    $faked = GoogleMeetFaker::respond('conference_record_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'conferenceRecords' => [
            [
                'name' => 'conferenceRecords_fake_45a444b26b7e',
                'startTime' => '2026-09-15T14:00:00.000Z',
                'endTime' => '2026-09-15T14:40:12.000Z',
                'expireTime' => '2026-10-15T14:40:12.000Z',
                'space' => 'spaces/abc123def456',
            ],
        ],
    ]);
});

it('participant_list fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'participant_list', $config));

    $faked = GoogleMeetFaker::respond('participant_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
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
    ]);
});

it('space_create fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'space_create', $config));

    $faked = GoogleMeetFaker::respond('space_create', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'name' => 'spaces_fake_a5eb17d8251e',
        'meetingUri' => 'https://meet.google.com/abc-defg-hij',
        'meetingCode' => 'abc-defg-hij',
        'config' => [
            'accessType' => 'OPEN',
            'entryPointAccess' => 'ALL',
        ],
    ]);
});

it('space_get fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'space_get', $config));

    $faked = GoogleMeetFaker::respond('space_get', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
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
    ]);
});

it('transcript_entry_list fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'transcript_entry_list', $config));

    $faked = GoogleMeetFaker::respond('transcript_entry_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
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
    ]);
});

it('transcript_list fakes the shape Google Meet publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'transcript_list', $config));

    $faked = GoogleMeetFaker::respond('transcript_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
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
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('google_meet', 'no_such_operation', []));

    expect(fn () => GoogleMeetFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
