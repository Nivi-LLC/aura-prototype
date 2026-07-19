# AURA Product Prototype (static HTML)

Stakeholder click-through demo for **AURA Phase 1 — fully AI-automated Revenue OS**.

- **Location:** outside the five AURA product repos (not platform code).
- **Stack:** plain HTML + CSS + a tiny JS toast helper. No build step.
- **Visual system:** executive palette + liquid glass.  
  Tokens: Primary `#1E293B`, Accent `#C08A69`, Background `#F8F8F6`, Card `#FFFFFF`, Border `#E7E5E4`, Success `#16A34A`, Warning `#D97706`, Error `#DC2626`, text `#111827` / `#6B7280`.
- **Background:** [Figma 12 Free Holographic Light Gradients — Light Gradient 06](https://www.figma.com/design/WG9pV4FbOFd8QTwfT6LxsA/12-Free-Holographic-Light-Gradients-1.0--Community-?node-id=8-89) as `assets/holographic-gradient-06.png`, plus a slow Ken Burns loop in `assets/bg-loop.mp4`. Motion off when `prefers-reduced-motion` is on.
- **Product content:** Stakeholder vision of full automation; see [VISION.md](VISION.md) for divergence from product-specs.

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

## Product story

**AURA runs the full revenue OS; humans only show the site and submit visit feedback.**

No Approve & send, no manager review queue, no knowledge/inventory/booking human authority screens.

## Screens

| File | Intent |
|---|---|
| `index.html` | Hub + journey map |
| `screens/aura-brain.html` | Primary console · overnight/live auto actions |
| `screens/pipeline.html` | AI priority queue |
| `screens/buyer-360.html` | Buyer understanding · fact vs observation |
| `screens/whatsapp.html` | Auto-sent WhatsApp log |
| `screens/marketing-campaigns.html` | Multi-channel campaigns under AURA |
| `screens/marketing-funnel.html` | Open → click → form → AURA |
| `screens/marketing-nurture.html` | Auto nurture + advisory forecasts |
| `screens/field-agent.html` | **Human** · visit queue + brief |
| `screens/visit-feedback.html` | **Human** · feedback → AURA |
| `screens/buyer-journey.html` | Meera journey · auto vs field badges |
| `screens/executive.html` | Executive revenue brief (readout) |

## Important disclaimers

1. **Synthetic data only** — fictional buyers/projects (e.g. Meera Shah, Greenfield Tower). No customer PII.
2. **Stakeholder demo, not product-specs truth** — this prototype shows full Phase 1 automation; it diverges from DEC-0003 / the governed release ladder in `aura-product-specs`.
3. **Not a CRM replacement** — decision + execution layer.
4. **Not platform M05 scope** — static HTML only.

## Figma

Source kit: [Finance Dashboard UI Kit by Paperpillar](https://www.figma.com/design/fAkiDplcKJx9ZqhODbH1DZ/Finance-Dashboard-UI-Kit-by-Paperpillar--Community-).
