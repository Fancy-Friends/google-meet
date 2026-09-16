# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/space-get.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/space-get.json (or weaver's template/) and regenerate:
#
# npm run provider -- google_meet

"""Read a Meet space's current state, including whether a conference is active
right now.

GET /spaces/{spaceId} —
https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/get

This describes the request. `call` resolves the connection, picks the
estate, and either calls Google Meet or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "space_get"
METHOD = "GET"
PATH = "/spaces/{spaceId}"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("spaceId") is None or config.get("spaceId") == "":
        raise ConnectorConfigError(
            "space_get: \"spaceId\" is required (Space ID)."
        )

    out: dict[str, Any] = {}

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/spaces/"
        + quote(str(config.get("spaceId") or ""), safe="")
    )

def space_get(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Read a Meet space's current state, including whether a conference is active right now."""
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
