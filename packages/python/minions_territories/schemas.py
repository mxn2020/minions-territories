"""
Minions Territories SDK — Type Schemas
Custom MinionType schemas for Minions Territories.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

territory_type = MinionType(
    id="territories-territory",
    name="Territory",
    slug="territory",
    description="A geographic area for prospecting.",
    icon="🗺️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="level", type="select", label="level"),
        FieldDefinition(name="parentTerritoryId", type="string", label="parentTerritoryId"),
        FieldDefinition(name="country", type="string", label="country"),
        FieldDefinition(name="state", type="string", label="state"),
        FieldDefinition(name="region", type="string", label="region"),
        FieldDefinition(name="city", type="string", label="city"),
        FieldDefinition(name="estimatedBusinesses", type="number", label="estimatedBusinesses"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

territory_saturation_type = MinionType(
    id="territories-territory-saturation",
    name="Territory saturation",
    slug="territory-saturation",
    description="Saturation metrics for a territory.",
    icon="📊",
    schema=[
        FieldDefinition(name="territoryId", type="string", label="territoryId"),
        FieldDefinition(name="totalProspects", type="number", label="totalProspects"),
        FieldDefinition(name="totalContacted", type="number", label="totalContacted"),
        FieldDefinition(name="replyRate", type="number", label="replyRate"),
        FieldDefinition(name="conversionRate", type="number", label="conversionRate"),
        FieldDefinition(name="saturationPercent", type="number", label="saturationPercent"),
        FieldDefinition(name="lastUpdatedAt", type="string", label="lastUpdatedAt"),
    ],
)

focus_queue_type = MinionType(
    id="territories-focus-queue",
    name="Focus queue",
    slug="focus-queue",
    description="The ordered list of territories to work through.",
    icon="📋",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="territoryIds", type="string", label="territoryIds"),
        FieldDefinition(name="currentIndex", type="number", label="currentIndex"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    territory_type,
    territory_saturation_type,
    focus_queue_type,
]

