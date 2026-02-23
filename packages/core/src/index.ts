/**
 * Minions Territories SDK
 *
 * Country, state, region, city definitions, focus queue, and saturation tracking
 *
 * @module @minions-territories/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Territories.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
