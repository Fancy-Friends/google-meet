# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/conference-record-list.json by weaver's
# generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/conference-record-list.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- google_meet

"""List past conferences, optionally filtered to one space.

GET /conferenceRecords —
https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords/list

This describes the request. `call` resolves the connection, picks the
estate, and either calls Google Meet or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "conference_record_list"
METHOD = "GET"
PATH = "/conferenceRecords"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    pagesize = config.get("pageSize")
    if pagesize is not None and pagesize != "":
        try:
            _n = float(pagesize)
        except (TypeError, ValueError):
            _n = None
        if _n is None or _n != int(_n) or _n < 1 or _n > 100:
            raise ConnectorConfigError(
                "conference_record_list: \"pageSize\" must be a integer, got "
                f"{pagesize!r}."
            )

    out: dict[str, Any] = {}
    _value = config.get("filter")
    if _value is not None and _value != "":
        out["filter"] = str(_value)
    _value = config.get("pageSize")
    if _value is not None and _value != "":
        out["pageSize"] = int(float(_value))
    _value = config.get("pageToken")
    if _value is not None and _value != "":
        out["pageToken"] = str(_value)

    return out


def conference_record_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """List past conferences, optionally filtered to one space."""
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
