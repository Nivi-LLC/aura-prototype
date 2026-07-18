# AURA Autopilot Vision (prototype lane)

Stakeholder story for **Lane B** of this HTML prototype. **Not Phase 1 product truth** and **not platform M05 scope**.

## One-liner

**AURA runs the revenue brain; agents run the site visit; authority roles and exceptions stay human; full hands-off messaging is a gated later release, not launch.**

## Blueprint constraints (do not ignore)

| Rule | Implication |
|---|---|
| Constitutional non-goal: *not* an autonomous salesperson | Vision must keep kill switches, exceptions, and authority humans |
| `DEC-0003` Human-approved outbound | Launch = shadow → agent-approved WhatsApp; Release 7 = low-risk routine automation only |
| Orchestrator hard stops | Stale inventory, uncertain consent, low confidence, conflicts, overrides block auto-exec |
| Named authority roles | Inventory Steward, Knowledge Approver, Booking/Finance, Manager exceptions remain |

Realizing routine auto-send beyond Release 7 reminders would need a **future Decision Record** superseding `DEC-0003` with pilot evidence — this prototype does not rewrite the blueprint.

## Role split in the vision

| Actor | Owns |
|---|---|
| **AURA Brain** | Lead priority, buyer understanding, unit fit, conversation drafting / later low-risk send, visit propose + remind, readiness/opportunity advisory, learning *candidates* |
| **Marketing Autopilot** *(vision only — not in Phase 1 blueprint)* | Campaigns on WhatsApp, Meta/FB/IG, calls/SMS, Way2News; track open/click/form; AURA nurture, visit schedule, advisory value/rental forecasts |
| **Field agent** | Show the site; submit post-visit feedback |
| **Still human** | Price/availability authority, knowledge approve/withdraw, booking/loss/cancel evidence, exception handling, kill switch, campaign budget/compliance |

## Screen → Decision Product map

| Screen | Decision Products / contracts | Notes |
|---|---|---|
| `aura-brain.html` | DPT-0001…0008 overview | Overnight auto log + kill switch |
| `marketing-campaigns.html` | *Not in blueprint* | Multi-channel campaign console |
| `marketing-funnel.html` | *Not in blueprint* | Open → click → form → AURA |
| `marketing-nurture.html` | Vision nurture + advisory forecasts | Value/rental bands labeled observation |
| `field-agent.html` | DPT-0005 brief only | No pipeline / draft chrome |
| `visit-feedback.html` | Site Visit Workflow | Agent input → AURA next action |
| `exception-inbox.html` | Orchestrator blocks | Steward / manager, not every agent |
| `autopilot-timeline.html` | Epistemic status | Fact vs observation vs auto vs field |

## Marketing vision flow (extra lane)

```text
Ad (Meta / IG / WA / Way2News / Call)
→ Link open
→ CTA click
→ Form details
→ AURA consent check
→ Nurture (WA / gated call)
→ Explain fit + advisory appreciation / rental
→ Schedule visit
→ Field agent shows site
→ Feedback → AURA next action
```

Forecasts of future property value and rental are **advisory observations** with limitations — never guarantees or invented inventory/legal claims.

## Release ladder (where Autopilot sits)

```text
R0–R2  Foundation + advisory decisions
R3     Conversation shadow
R4     Agent-approved WhatsApp          ← Phase 1 governed default
R5–R6  Visits, outcomes, executive brief
R7     Approved routine automation      ← low-risk reminders; closest to “Autopilot”
R8     Voice escalation (gated)
```

Lane A of the prototype ≈ R4-style governed experience.  
Lane B ≈ **aspirational R7+ operating model** with field-only agents — labeled gated.

## What would need to change for “real” Autopilot

1. Safe pilot evidence under agent-approved WhatsApp.
2. Policy + legal approval for auto-send classes.
3. Kill-switch and rollback tests.
4. A Decision Record superseding or narrowing `DEC-0003` for those classes.
5. Exception SLAs for stewards/managers so agents stay field-only.

Until then: use Lane B for stakeholder alignment only.
