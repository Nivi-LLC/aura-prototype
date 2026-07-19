# AURA Product Prototype (static HTML)

Stakeholder / builder click-through demo for **AURA Phase 1 — Revenue Conversion OS**, plus gated vision lanes.

- **Location:** outside the five AURA product repos (not platform code).
- **Stack:** plain HTML + CSS + a tiny JS toast helper. No build step.
- **Visual system:** adapted from [Finance Dashboard UI Kit by Paperpillar (Community)](https://www.figma.com/design/fAkiDplcKJx9ZqhODbH1DZ/Finance-Dashboard-UI-Kit-by-Paperpillar--Community-)  
  Tokens: Custom `#9CB2A5`, Black `#121212`, Grey `#737B8B`, Brown `#2F292B`, Light brown `#ADA1A1`, canvas `#ECF1F4`, Inter, soft sidebar pills and cards.
- **Product content:** AURA company master blueprint / real plan (Decision Products, Decision Cards, role workspaces, release ladder).

## Open locally

```bash
cd /Users/sampath1/Documents/NIVI-LLC/aura-prototype
python3 -m http.server 8765
# then http://localhost:8765
```

**Password:** `9999` (client-side gate for stakeholder sharing — not real security).

## GitHub Pages

Live site: https://nivi-llc.github.io/aura-prototype/

Publishes from the `main` branch root. Password: `9999`.

## Three lanes

| Lane | Intent |
|---|---|
| **A — Phase 1 Governed** | Human-approved outbound, Decision Cards, full role workspaces |
| **B — Autopilot Vision** | AURA as revenue brain; agents only show site + feedback — **gated, not Phase 1** |
| **C — Marketing Campaigns** | WhatsApp / Meta / FB / IG / calls / Way2News + funnel + AURA nurture — **not in blueprint** |

See [VISION-AUTOPILOT.md](VISION-AUTOPILOT.md).

## Screens

### Lane A — Phase 1 Governed

| File | Role / intent |
|---|---|
| `index.html` | Hub + journey map + all lanes |
| `screens/agent-today.html` | Sales Agent · primary Decision Card |
| `screens/buyer-360.html` | Buyer understanding · fact vs observation |
| `screens/whatsapp.html` | Agent-approved WhatsApp drafts |
| `screens/pipeline.html` | Lead priority queue |
| `screens/visits.html` | Site visit workflow + evidence |
| `screens/manager.html` | Manager review / intervene |
| `screens/inventory.html` | Inventory / price authority |
| `screens/knowledge.html` | Knowledge approve / withdraw |
| `screens/booking.html` | Terminal outcomes + readiness |
| `screens/executive.html` | Executive Revenue Brief |

### Lane B — Autopilot Vision (gated)

| File | Intent |
|---|---|
| `screens/aura-brain.html` | Overnight AURA actions + kill switch |
| `screens/field-agent.html` | Field-only visit queue + brief |
| `screens/visit-feedback.html` | Post-visit feedback → AURA next action |
| `screens/exception-inbox.html` | Blocks AURA cannot clear alone |
| `screens/autopilot-timeline.html` | Buyer journey with epistemic badges |

### Lane C — Marketing Campaigns (not in blueprint)

| File | Intent |
|---|---|
| `screens/marketing-campaigns.html` | WhatsApp / Meta / FB / IG / calls / Way2News campaigns |
| `screens/marketing-funnel.html` | Open → click → form → AURA handoff |
| `screens/marketing-nurture.html` | AURA follow-up, visit schedule, advisory value/rental forecasts |

## Important disclaimers

1. **Synthetic data only** — fictional buyers/projects (e.g. Meera Shah, Greenfield Tower). No customer PII.
2. **Not implementation scope** — platform M05 is Decision Card–narrow for Agent/Manager. Vision lanes are not a constitutional rewrite.
3. **Not a CRM replacement** — decision + execution layer per blueprint non-goals.
4. **Not an autonomous salesperson** — blueprint non-goal; vision keeps human authority and kill switches.

## Figma

File key: `fAkiDplcKJx9ZqhODbH1DZ`
