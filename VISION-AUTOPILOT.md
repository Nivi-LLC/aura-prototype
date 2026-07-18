# AURA prototype vision lanes

Stakeholder stories for this HTML prototype. **Not Phase 1 product truth** and **not platform M05 scope**.

## Lanes

| Lane | Name | Intent |
|---|---|---|
| **A** | Phase 1 Governed | Human-approved outbound, Decision Cards, role workspaces |
| **B** | Autopilot Vision | AURA revenue brain; field agents only show site + feedback |
| **C** | Marketing Campaigns | Multi-channel ads + funnel + AURA nurture (**not in blueprint**) |

## One-liner

**AURA runs the revenue brain; agents run the site visit; authority roles and exceptions stay human; full hands-off messaging is a gated later release, not launch.**

## Blueprint constraints (do not ignore)

| Rule | Implication |
|---|---|
| Constitutional non-goal: *not* an autonomous salesperson | Vision must keep kill switches, exceptions, and authority humans |
| `DEC-0003` Human-approved outbound | Launch = shadow → agent-approved WhatsApp; Release 7 = low-risk routine automation only |
| Orchestrator hard stops | Stale inventory, uncertain consent, low confidence, conflicts, overrides block auto-exec |
| Named authority roles | Inventory Steward, Knowledge Approver, Booking/Finance, Manager exceptions remain |
| Phase 1 is WhatsApp-first for sales journeys (`DEC-0005`) | Full ads OS (Meta/Way2News/etc.) is Lane C vision only |

Realizing routine auto-send beyond Release 7 reminders would need a **future Decision Record** superseding `DEC-0003` with pilot evidence — this prototype does not rewrite the blueprint.

## Lane B — Autopilot role split

| Actor | Owns |
|---|---|
| **AURA Brain** | Lead priority, buyer understanding, unit fit, conversation drafting / later low-risk send, visit propose + remind, readiness/opportunity advisory, learning *candidates* |
| **Field agent** | Show the site; submit post-visit feedback |
| **Still human** | Price/availability authority, knowledge approve/withdraw, booking/loss/cancel evidence, exception handling, kill switch |

### Lane B screens

| Screen | Decision Products / contracts | Notes |
|---|---|---|
| `aura-brain.html` | DPT-0001…0008 overview | Overnight auto log + kill switch |
| `field-agent.html` | DPT-0005 brief only | No pipeline / draft chrome |
| `visit-feedback.html` | Site Visit Workflow | Agent input → AURA next action |
| `exception-inbox.html` | Orchestrator blocks | Steward / manager, not every agent |
| `autopilot-timeline.html` | Epistemic status | Fact vs observation vs auto vs field |

## Lane C — Marketing Campaigns (extracted from Lane B)

**Not in the Phase 1 blueprint.** Dedicated hub section and sidebar (Campaigns · Funnel · Nurture only).

| Actor | Owns |
|---|---|
| **Marketing Ops** | Campaigns on WhatsApp, Meta/FB/IG, calls/SMS, Way2News; budgets; creatives |
| **AURA Nurture** | Track open/click/form; follow-up; visit schedule; advisory value/rental forecasts |
| **Field agent** | Site show after visit booked (handoff to Lane B field flow) |
| **Still human** | Campaign budget/compliance, consent, kill switch |

### Lane C screens

| Screen | Notes |
|---|---|
| `marketing-campaigns.html` | Multi-channel campaign console |
| `marketing-funnel.html` | Open → click → form → AURA |
| `marketing-nurture.html` | Nurture + advisory appreciation/rental forecasts |

### Marketing flow

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
R4     Agent-approved WhatsApp          ← Phase 1 governed default (Lane A)
R5–R6  Visits, outcomes, executive brief
R7     Approved routine automation      ← closest to Lane B Autopilot
R8     Voice escalation (gated)
```

Lane C (full ads OS) has **no Phase 1 release slot** in the blueprint today.

## What would need to change for “real” Autopilot / Marketing

1. Safe pilot evidence under agent-approved WhatsApp.
2. Policy + legal approval for auto-send and paid-media classes.
3. Kill-switch and rollback tests.
4. A Decision Record superseding or narrowing `DEC-0003` for those classes.
5. Exception SLAs for stewards/managers so agents stay field-only.
6. For Lane C: activation evidence for Meta/Way2News/call channels beyond WhatsApp-first.

Until then: use Lanes B and C for stakeholder alignment only.
