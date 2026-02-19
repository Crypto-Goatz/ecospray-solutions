/**
 * 0n-layers — Top-level barrel export.
 * Re-exports all layer modules for convenient access.
 */

// Core (Layer 0)
export * as core from './core'

// Google Backend (Layer 1)
export * as googleBackend from './google-backend'

// Page AI (Layer 2)
export * as pageAi from './page-ai'

// Blog AI (Layer 3)
export * as blogAi from './blog-ai'

// CRM (Layer 4)
export * as crm from './crm'

// Compliance (Layer 5)
export * as compliance from './compliance'

// Orchestrator (Layer 6)
export * as orchestrator from './orchestrator'

// Shared Agent Infrastructure
export * as agents from './agents'
