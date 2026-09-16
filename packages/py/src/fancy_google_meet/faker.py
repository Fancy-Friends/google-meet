# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- google_meet

"""The Google Meet faker.

Bit-for-bit identical to the TypeScript and PHP fakers: the same FNV-1a seed
and the same xorshift32 sequence, so a golden fixture asserts the exact
faked payload and ALL THREE runtimes have to produce it. That turns the
faker into a parity test rather than a convenience — which matters, because
cross-runtime drift does not fail loudly. It completes, down one path, with
no error.
"""

from __future__ import annotations

from typing import Any

from ._fake import FakeValues


def _as_number(value: Any) -> float | None:
    """The coercion an `"as": "integer" | "number"` config binding uses: a value
    that IS a number, never int(float(...))'s uncaught ValueError on one that
    merely looks like text (a text field's auto-generated example, before an
    author has typed a real one).
    """
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _conference_record_list(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "conferenceRecords": [
            {
                "name": fake.id("conferenceRecords"),
                "startTime": "2026-09-15T14:00:00.000Z",
                "endTime": "2026-09-15T14:40:12.000Z",
                "expireTime": "2026-10-15T14:40:12.000Z",
                "space": "spaces/abc123def456",
            },
        ],
    }


def _participant_list(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "participants": [
            {
                "name": fake.id("participants"),
                "earliestStartTime": "2026-09-15T14:00:05.000Z",
                "latestEndTime": "2026-09-15T14:40:00.000Z",
                "signedinUser": {
                    "user": "users/ada",
                    "displayName": "Ada Lovelace",
                },
            },
            {
                "name": fake.id("participants"),
                "earliestStartTime": "2026-09-15T14:01:30.000Z",
                "latestEndTime": "2026-09-15T14:38:00.000Z",
                "anonymousUser": {
                    "displayName": "Guest",
                },
            },
            {
                "name": fake.id("participants"),
                "earliestStartTime": "2026-09-15T14:02:00.000Z",
                "latestEndTime": "2026-09-15T14:15:00.000Z",
                "phoneUser": {
                    "displayName": "+1 555-***-0100",
                },
            },
        ],
    }


def _space_create(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "name": fake.id("spaces"),
        "meetingUri": "https://meet.google.com/abc-defg-hij",
        "meetingCode": "abc-defg-hij",
        "config": {
            "accessType": (
                str(_v)
                if (_v := config.get("accessType")) is not None and _v != ""
                else "OPEN"
            ),
            "entryPointAccess": (
                str(_v)
                if (_v := config.get("entryPointAccess")) is not None and _v != ""
                else "ALL"
            ),
        },
    }


def _space_get(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "name": (
            str(_v)
            if (_v := config.get("spaceId")) is not None and _v != ""
            else fake.id("spaces")
        ),
        "meetingUri": "https://meet.google.com/abc-defg-hij",
        "meetingCode": "abc-defg-hij",
        "config": {
            "accessType": "TRUSTED",
            "entryPointAccess": "ALL",
        },
        "activeConference": {
            "conferenceRecord": fake.id("conferenceRecords"),
        },
    }


def _transcript_entry_list(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "transcriptEntries": [
            {
                "name": fake.id("entries"),
                "participant": "participants/p1",
                "text": "Let's start with the roadmap.",
                "languageCode": "en-US",
                "startTime": "2026-09-15T14:00:12.000Z",
                "endTime": "2026-09-15T14:00:15.000Z",
            },
            {
                "name": fake.id("entries"),
                "participant": "participants/p2",
                "text": "Sounds good, I'll share my screen.",
                "languageCode": "en-US",
                "startTime": "2026-09-15T14:00:16.000Z",
                "endTime": "2026-09-15T14:00:19.000Z",
            },
        ],
    }


def _transcript_list(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "transcripts": [
            {
                "name": fake.id("transcripts"),
                "state": "ENDED",
                "startTime": "2026-09-15T14:00:10.000Z",
                "endTime": "2026-09-15T14:40:05.000Z",
                "docsDestination": {
                    "document": fake.id("doc"),
                    "exportUri": "https://docs.google.com/document/d/abcdef123456",
                },
            },
        ],
    }


def respond(operation: str, request: dict[str, Any]) -> Any:
    """Dispatch to the fixture for one operation."""
    config: dict[str, Any] = request.get("config") or {}
    fake: FakeValues = request["fake"]

    if operation == "conference_record_list":
        return _conference_record_list(config, fake)

    if operation == "participant_list":
        return _participant_list(config, fake)

    if operation == "space_create":
        return _space_create(config, fake)

    if operation == "space_get":
        return _space_get(config, fake)

    if operation == "transcript_entry_list":
        return _transcript_entry_list(config, fake)

    if operation == "transcript_list":
        return _transcript_list(config, fake)

    # A faker asked for an operation it has no shape for must SAY so. Making
    # something up would produce a green run whose output silently has none of
    # the fields the author is about to reference.
    raise ValueError(
        f'google_meet: no fake response is defined for "{operation}". '
        "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker "
        "cannot be developed against, tested, or demonstrated."
    )
