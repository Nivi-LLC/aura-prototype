/* Ask NIVI — demo chatbot (offline scripted replies) */

(function () {
  const WELCOME =
    "Hi — I’m NIVI. I can walk you through today’s revenue OS using the synthetic demo: Greenfield Tower, Lakeview, Meera Shah, and the executive brief. Ask anything, or tap a suggestion.";

  const STARTER_SUGGESTIONS = [
    "What’s today’s revenue opportunity?",
    "Brief me on Meera Shah",
    "Who needs a site visit next?",
    "How is the pipeline looking?",
  ];

  const REPLIES = [
    {
      id: "revenue",
      match: /revenue|opportunity|brief|executive|₹|cr\b|booking readiness/i,
      text:
        "Executive snapshot (synthetic):\n\n• Revenue opportunity: ₹48–62 Cr this week across Greenfield + Lakeview (DPT-0008, medium confidence).\n• Booking readiness: Band A 8 · Band B 14 · Band C 11 · In nurture 6.\n• Coverage: 96% of qualified buyers have a live NIVI action.\n• Auto-send rate: 98% on WhatsApp + nurture — no approval queue.\n\nWant the interventions NIVI already ran, or a deep-dive on Greenfield vs Lakeview?",
      suggestions: [
        "What interventions did NIVI run?",
        "Compare Greenfield vs Lakeview",
        "Brief me on Meera Shah",
      ],
    },
    {
      id: "interventions",
      match: /intervention|already ran|auto action|reconcile|capacity/i,
      text:
        "NIVI interventions already live (readout only):\n\n1. Inventory conflict on unit 7C reconciled — fit unblocked for 3 buyers.\n2. Low-engagement nurture boosted — 2 cohorts on WhatsApp + call.\n3. Field capacity balanced — 12 briefs split across Alex + Priya.\n\nHumans only enter at site show + visit feedback. Everything else stays automated.",
      suggestions: [
        "Who needs a site visit next?",
        "How is the pipeline looking?",
        "What’s today’s revenue opportunity?",
      ],
    },
    {
      id: "meera",
      match: /meera|shah|buyer 360|h-2041|4b/i,
      text:
        "Meera Shah · Household H-2041 · Greenfield (synthetic):\n\n• Intent: 3BHK, east-facing, budget band matched.\n• Unit fit: 4B selected · confidence 0.86 (AI observation, not a fact).\n• Channel: WhatsApp consent OK · parking objection likely.\n• Next: site visit tomorrow 14:00 — field agent shows the unit; NIVI resumes after feedback.\n\nI can open the journey story, WhatsApp thread, or the field brief.",
      suggestions: [
        "What did NIVI say on WhatsApp?",
        "Show the field brief for Meera",
        "Walk her buyer journey",
      ],
    },
    {
      id: "whatsapp",
      match: /whatsapp|message|said on|nurture thread|auto-?send/i,
      text:
        "WhatsApp with Meera (auto-sent):\n\nMeera: “Saw your Greenfield ad — interested in 3BHK. Is parking included?”\nNIVI: “Hi Meera — Unit 4B matches your budget band and east-facing preference. Visitor parking is available as per project FAQ. Want a site visit tomorrow 2 PM?”\n\nNo Approve & send gate in this Phase 1 story — NIVI sends, logs, and continues nurture.",
      suggestions: [
        "Brief me on Meera Shah",
        "Who needs a site visit next?",
        "How are campaigns performing?",
      ],
    },
    {
      id: "visit",
      match: /visit|field|site show|alex|priya|feedback/i,
      text:
        "Site-visit forecast · next 14 days: 27 total (12 confirmed · 15 proposed by NIVI).\n\nNext human touch — Meera Shah:\n• When: tomorrow 14:00\n• Where: Greenfield Tower · unit 4B\n• Brief: spouse may join · parking objection likely\n• Agent: field queue (Alex / Priya balanced)\n\nAfter the visit, feedback (units shown, reaction, objections) is the only other human step — then NIVI resumes booking readiness.",
      suggestions: [
        "Brief me on Meera Shah",
        "What interventions did NIVI run?",
        "How is the pipeline looking?",
      ],
    },
    {
      id: "pipeline",
      match: /pipeline|priority|queue|triage|next action/i,
      text:
        "Pipeline (NIVI-operated):\n\n• 96% of qualified buyers have a live auto action — not waiting on approval.\n• Priority work: fit refresh, WhatsApp follow-ups, visit proposals, inventory sync.\n• Top story buyer: Meera Shah (fit 4B · visit booked).\n• Blockers cleared today: unit 7C inventory conflict.\n\nAsk for a buyer deep-dive or the revenue band split if you want numbers.",
      suggestions: [
        "Brief me on Meera Shah",
        "What’s today’s revenue opportunity?",
        "Compare Greenfield vs Lakeview",
      ],
    },
    {
      id: "campaigns",
      match: /campaign|funnel|ads?|meta|way2|marketing|attribution/i,
      text:
        "Campaigns live under NIVI:\n\n• Greenfield Launch · Spring — Meta / IG / WhatsApp · 12.4k reach · 1,102 clicks · 286 forms.\n• Lakeview · Soft launch — IG / Calls · 890 reach · 102 clicks · 41 forms.\n\nFunnel: open → click → form → NIVI handoff with attribution. Nurture (value/rental bands + visit scheduling) runs fully live after form.",
      suggestions: [
        "What’s today’s revenue opportunity?",
        "Brief me on Meera Shah",
        "How is the pipeline looking?",
      ],
    },
    {
      id: "projects",
      match: /greenfield|lakeview|compare|project|inventory|unit/i,
      text:
        "Projects in this demo:\n\nGreenfield Tower\n• Primary storyline (Meera Shah · unit 4B)\n• Launch campaign performing strongest (286 forms)\n• Visit load concentrated here tomorrow\n\nLakeview\n• Soft launch · smaller funnel (41 forms)\n• Contributes to the ₹48–62 Cr opportunity band with Greenfield\n\nInventory note: 7C conflict was auto-reconciled so fit recommendations stay unblocked.",
      suggestions: [
        "Who needs a site visit next?",
        "How are campaigns performing?",
        "What’s today’s revenue opportunity?",
      ],
    },
    {
      id: "journey",
      match: /journey|end-?to-?end|story|timeline/i,
      text:
        "Meera’s journey (auto vs field):\n\nLead → Buyer → Intent → Unit Fit → Conversation → Site Visit (human) → Booking Readiness → Outcome → Learn.\n\nNIVI owns every step except the site show and visit feedback. That’s the Phase 1 stakeholder story in this prototype.",
      suggestions: [
        "Brief me on Meera Shah",
        "What did NIVI say on WhatsApp?",
        "What’s today’s revenue opportunity?",
      ],
    },
  ];

  const FALLBACK = {
    text:
      "I can answer from the demo model: revenue opportunity, Meera Shah / Buyer 360, pipeline coverage, campaigns & funnel, site visits, WhatsApp nurture, and Greenfield vs Lakeview.\n\nTry a suggestion below — or ask in your own words.",
    suggestions: STARTER_SUGGESTIONS.slice(),
  };

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatBody(text) {
    return escapeHtml(text).replace(/\n/g, "<br />");
  }

  function pickReply(userText) {
    for (const row of REPLIES) {
      if (row.match.test(userText)) return row;
    }
    return FALLBACK;
  }

  function setupAskNivi() {
    const thread = document.getElementById("ask-thread");
    const form = document.getElementById("ask-form");
    const input = document.getElementById("ask-input");
    const sendBtn = document.getElementById("ask-send");
    const suggestionsEl = document.getElementById("ask-suggestions");
    if (!thread || !form || !input || !suggestionsEl) return;

    let busy = false;

    function scrollBottom() {
      thread.scrollTop = thread.scrollHeight;
    }

    function renderSuggestions(list) {
      suggestionsEl.innerHTML = "";
      (list || []).forEach((label) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ask-chip";
        btn.textContent = label;
        btn.addEventListener("click", () => {
          if (busy) return;
          input.value = label;
          form.requestSubmit();
        });
        suggestionsEl.appendChild(btn);
      });
    }

    function appendUser(text) {
      const row = document.createElement("div");
      row.className = "ask-msg ask-msg-user";
      row.innerHTML =
        '<div class="ask-avatar user">You</div><div class="ask-bubble">' +
        formatBody(text) +
        "</div>";
      thread.appendChild(row);
      scrollBottom();
    }

    function appendAssistantShell() {
      const row = document.createElement("div");
      row.className = "ask-msg ask-msg-bot";
      row.innerHTML =
        '<div class="ask-avatar bot">N</div><div class="ask-bubble"><span class="ask-typing-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ask-stream"></span></div>';
      thread.appendChild(row);
      scrollBottom();
      return row.querySelector(".ask-stream");
    }

    async function revealText(el, text) {
      const dots = el.parentElement && el.parentElement.querySelector(".ask-typing-dots");
      if (dots) dots.remove();

      if (prefersReducedMotion()) {
        el.innerHTML = formatBody(text);
        scrollBottom();
        return;
      }

      el.classList.add("is-streaming");
      let buf = "";
      const chars = [...text];
      for (let i = 0; i < chars.length; i++) {
        buf += chars[i];
        el.innerHTML = formatBody(buf) + '<span class="ask-caret" aria-hidden="true"></span>';
        if (i % 3 === 0) scrollBottom();
        await sleep(chars[i] === "\n" ? 40 : 12);
      }
      el.innerHTML = formatBody(text);
      el.classList.remove("is-streaming");
      scrollBottom();
    }

    async function replyTo(userText) {
      busy = true;
      sendBtn.disabled = true;
      suggestionsEl.classList.add("is-dim");

      await sleep(prefersReducedMotion() ? 0 : 380);
      const stream = appendAssistantShell();
      const answer = pickReply(userText);
      await revealText(stream, answer.text);
      renderSuggestions(answer.suggestions || STARTER_SUGGESTIONS);

      busy = false;
      sendBtn.disabled = false;
      suggestionsEl.classList.remove("is-dim");
      input.focus();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (busy) return;
      const text = (input.value || "").replace(/\s+/g, " ").trim();
      if (!text) return;
      input.value = "";
      input.style.height = "auto";
      appendUser(text);
      replyTo(text);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });

    input.addEventListener("input", () => {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 140) + "px";
    });

    // Opening: empty state → welcome reveal → starter suggestions
    (async () => {
      const empty = document.createElement("div");
      empty.className = "ask-empty";
      empty.innerHTML =
        '<div class="ask-empty-mark">✦</div><h2>Ask NIVI</h2><p>Revenue OS copilot for this stakeholder demo.</p>';
      thread.appendChild(empty);

      await sleep(prefersReducedMotion() ? 0 : 200);
      empty.remove();

      const stream = appendAssistantShell();
      await revealText(stream, WELCOME);
      renderSuggestions(STARTER_SUGGESTIONS);
      input.focus();
    })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAskNivi);
  } else {
    setupAskNivi();
  }
})();
