# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- google_meet

"""Google Meet for Python.

The service descriptor, its faker, its delivery contract, and one function
per operation — plain HTTP on the stdlib, no vendor SDK and no runtime
dependency.
"""

from __future__ import annotations

from ._fake import FakeValues
from .actions.conference_record_list import conference_record_list
from .actions.participant_list import participant_list
from .actions.space_create import space_create
from .actions.space_get import space_get
from .actions.transcript_entry_list import transcript_entry_list
from .actions.transcript_list import transcript_list
from .faker import respond
from .service import BASE_URLS, CONNECTOR_API_VERSION, REQUIRES, SANDBOX, SERVICE, TITLE, descriptor

__version__ = "0.1.0"

__all__ = [
    "BASE_URLS",
    "CONNECTOR_API_VERSION",
    "REQUIRES",
    "SANDBOX",
    "SERVICE",
    "TITLE",
    "FakeValues",
    "conference_record_list",
    "descriptor",
    "participant_list",
    "respond",
    "space_create",
    "space_get",
    "transcript_entry_list",
    "transcript_list",
]
