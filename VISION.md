# NIVI prototype — Phase 1 AI automation

Stakeholder story for this HTML prototype.

## One-liner

**NIVI runs the full revenue OS end-to-end; humans only show the site and submit visit feedback.**

## Flow

```text
Ad / lead in
→ NIVI triage + buyer understanding + unit fit
→ NIVI WhatsApp / nurture (auto-send)
→ NIVI schedules visit
→ Field agent shows site + submits feedback
→ NIVI next action (follow-up, readiness, booking evidence, learn)
```

## Role split

| Actor | Owns |
|---|---|
| **NIVI** | Pipeline, Buyer 360, WhatsApp send, campaigns/funnel/nurture, inventory/price apply, knowledge use, booking/outcome register, executive brief, learning |
| **Human (field only)** | Arrive / show units / capture reaction & objections / submit feedback |

## Screens

| Screen | Notes |
|---|---|
| `aura-brain.html` | Live auto action console |
| `pipeline.html` | Priority queue — no approval CTAs |
| `buyer-360.html` | Facts vs observations; next action executing |
| `whatsapp.html` | Sent log · `NIVI auto` |
| `marketing-campaigns.html` | Ads under NIVI |
| `marketing-funnel.html` | Attribution → NIVI |
| `marketing-nurture.html` | Live nurture · no Allow/Escalate gates |
| `field-agent.html` | Human visit queue |
| `visit-feedback.html` | Human feedback → NIVI |
| `buyer-journey.html` | End-to-end narrative |
| `executive.html` | Readout only |

## Divergence from product-specs

This prototype **deliberately** frames Phase 1 as full automation for stakeholder demos.

Canonical product-specs still describe a governed release ladder (`DEC-0003` human-approved outbound, agent Decision Cards, authority roles). This repo does **not** rewrite those contracts. Builders should treat this HTML as a vision surface, not Phase 1 implementation scope for `aura-platform`.
