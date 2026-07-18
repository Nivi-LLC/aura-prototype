# AURA Product Prototype (static HTML)

Stakeholder / builder click-through demo for **AURA Phase 1 — Revenue Conversion OS**.

- **Location:** outside the five AURA product repos (not platform code).
- **Stack:** plain HTML + CSS + a tiny JS toast helper. No build step.
- **Visual system:** adapted from [Finance Dashboard UI Kit by Paperpillar (Community)](https://www.figma.com/design/fAkiDplcKJx9ZqhODbH1DZ/Finance-Dashboard-UI-Kit-by-Paperpillar--Community-)  
  Tokens: Custom `#DAA291`, Black `#121212`, Grey `#737B8B`, Brown `#2F292B`, Light brown `#ADA1A1`, canvas `#ECF1F4`, Inter, soft sidebar pills and cards.
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

## Screens

| File | Role / intent |
|---|---|
| `index.html` | Hub + journey map |
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

## Important disclaimers

1. **Synthetic data only** — fictional buyers/projects (e.g. Meera Shah, Greenfield Tower). No customer PII.
2. **Not implementation scope** — platform M05 is Decision Card–narrow for Agent/Manager. This prototype is a vision demo for the fuller Phase 1 surface area.
3. **Not a CRM replacement** — decision + execution layer per blueprint non-goals.

## Figma

File key: `fAkiDplcKJx9ZqhODbH1DZ`
