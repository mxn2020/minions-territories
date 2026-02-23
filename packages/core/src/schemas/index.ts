/**
 * @module @minions-territories/sdk/schemas
 * Custom MinionType schemas for Minions Territories.
 */

import type { MinionType } from 'minions-sdk';

export const territoryType: MinionType = {
  id: 'territories-territory',
  name: 'Territory',
  slug: 'territory',
  description: 'A geographic area for prospecting.',
  icon: '🗺️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'level', type: 'select', label: 'level' },
    { name: 'parentTerritoryId', type: 'string', label: 'parentTerritoryId' },
    { name: 'country', type: 'string', label: 'country' },
    { name: 'state', type: 'string', label: 'state' },
    { name: 'region', type: 'string', label: 'region' },
    { name: 'city', type: 'string', label: 'city' },
    { name: 'estimatedBusinesses', type: 'number', label: 'estimatedBusinesses' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const territorysaturationType: MinionType = {
  id: 'territories-territory-saturation',
  name: 'Territory saturation',
  slug: 'territory-saturation',
  description: 'Saturation metrics for a territory.',
  icon: '📊',
  schema: [
    { name: 'territoryId', type: 'string', label: 'territoryId' },
    { name: 'totalProspects', type: 'number', label: 'totalProspects' },
    { name: 'totalContacted', type: 'number', label: 'totalContacted' },
    { name: 'replyRate', type: 'number', label: 'replyRate' },
    { name: 'conversionRate', type: 'number', label: 'conversionRate' },
    { name: 'saturationPercent', type: 'number', label: 'saturationPercent' },
    { name: 'lastUpdatedAt', type: 'string', label: 'lastUpdatedAt' },
  ],
};

export const focusqueueType: MinionType = {
  id: 'territories-focus-queue',
  name: 'Focus queue',
  slug: 'focus-queue',
  description: 'The ordered list of territories to work through.',
  icon: '📋',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'territoryIds', type: 'string', label: 'territoryIds' },
    { name: 'currentIndex', type: 'number', label: 'currentIndex' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  territoryType,
  territorysaturationType,
  focusqueueType,
];

