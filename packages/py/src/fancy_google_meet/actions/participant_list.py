# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/participant-list.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/participant-list.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- google_meet

"""List who attended a conference.

GET /conferenceRecords/{conferenceRecordId}/participants —
https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list

This describes the request. `call` resolves the connection, picks the
estate, and either calls Google Meet or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "participant_list"
METHOD = "GET"
PATH = "/conferenceRecords/{conferenceRecordId}/participants"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("conferenceRecordId") is None or config.get("conferenceRecordId") == "":
        raise ConnectorConfigError(
            "participant_list: \"conferenceRecordId\" is required (Conference record ID)."
        )

    out: dict[str, Any] = {}
    _value = config.get("pageToken")
    if _value is not None and _value != "":
        out["pageToken"] = str(_value)

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/conferenceRecords/"
        + quote(str(config.get("conferenceRecordId") or ""), safe="")
        + "/participants"
    )

def participant_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """List who attended a conference."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        json_body=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
