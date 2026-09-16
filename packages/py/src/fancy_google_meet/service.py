# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- google_meet

"""Google Meet, as one service descriptor shared by every Google Meet
operation.

The Python twin of the js and php packages' service modules.

## The sandbox trap, written down where it is used

Google Meet has no test estate distinct from a real account, as far as this
review found (2026-09-16) -- but it is UNVERIFIED, not confirmed.
space_create makes a real, joinable meeting space. Use fake mode while
building.
"""

from __future__ import annotations

from ._runtime import PreparedRequest, ServiceDescriptor
from .faker import respond

# The connector API version this package was GENERATED against. A literal,
# never imported: an imported constant lets an upgrade rewrite the very claim
# it exists to detect, after which the copy agrees with itself forever.
CONNECTOR_API_VERSION = 1

SERVICE = "google_meet"
TITLE = "Google Meet"
SANDBOX = "unverified"
BASE_URLS = {
    "live": "https://meet.googleapis.com/v2",
}

"""Credential keys a remote call cannot proceed without."""
REQUIRES = [
    "accessToken",
]


def authorize(
    credentials: dict[str, str | None],
    request: PreparedRequest,
    mode: str,
) -> None:
    """Apply Google Meet's auth scheme to an outgoing request.
    
    Every Meet API v2 call is a Bearer token on the Authorization header.
    """
    request.headers["Authorization"] = f"Bearer {credentials.get('accessToken') or ''}"


def descriptor() -> ServiceDescriptor:
    """The Google Meet service, for the Python runtime."""
    return ServiceDescriptor(
        service=SERVICE,
        title=TITLE,
        sandbox=SANDBOX,
        base_urls=BASE_URLS,
        requires=REQUIRES,
        authorize=authorize,
        faker=respond,
        idempotency_header=None,
    )
