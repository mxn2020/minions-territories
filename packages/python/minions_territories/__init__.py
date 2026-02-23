"""
Minions Territories Python SDK

Country, state, region, city definitions, focus queue, and saturation tracking
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Territories.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
