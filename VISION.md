# AURA prototype — Phase 1 AI automation

Stakeholder story for this HTML prototype.

## One-liner

**AURA runs the full revenue OS end-to-end; humans only show the site and submit visit feedback.**

## Flow

```text
Ad / lead in
→ AURA triage + buyer understanding + unit fit
→ AURA WhatsApp / nurture (auto-send)
→ AURA schedules visit
→ Field agent shows site + submits feedback
→ AURA next action (follow-up, readiness, booking evidence, learn)
```

## Role split

| Actor | Owns |
|---|---|
| **AURA** | Pipeline, Buyer 360, WhatsApp send, campaigns/funnel/nurture, inventory/price apply, knowledge use, booking/outcome register, executive brief, learning |
| **Human (field only)** | Arrive / show units / capture reaction & objections / submit feedback |

## Screens

| Screen | Notes |
|---|---|
| `aura-brain.html` | Live auto action console |
| `pipeline.html` | Priority queue — no approval CTAs |
| `buyer-360.html` | Facts vs observations; next action executing |
| `whatsapp.html` | Sent log · `AURA auto` |
| `marketing-campaigns.html` | Ads under AURA |
| `marketing-funnel.html` | Attribution → AURA |
| `marketing-nurture.html` | Live nurture · no Allow/Escalate gates |
| `field-agent.html` | Human visit queue |
| `visit-feedback.html` | Human feedback → AURA |
| `buyer-journey.html` | End-to-end narrative |
| `executive.html` | Readout only |

## Divergence from product-specs

This prototype **deliberately** frames Phase 1 as full automation for stakeholder demos.

Canonical product-specs still describe a governed release ladder (`DEC-0003` human-approved outbound, agent Decision Cards, authority roles). This repo does **not** rewrite those contracts. Builders should treat this HTML as a vision surface, not Phase 1 implementation scope for `aura-platform`.
