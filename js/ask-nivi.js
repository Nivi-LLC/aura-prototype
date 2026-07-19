/* Ask NIVI — demo chatbot (offline scripted replies + voice + viz) */

(function () {
  const WELCOME =
    "Hi — I’m NIVI. I can walk you through today’s revenue OS using the synthetic demo: Greenfield Tower, Lakeview, Meera Shah, and the executive brief. Ask by text or voice, or tap a suggestion.";

  const STARTER_SUGGESTIONS = [
    "What’s today’s revenue opportunity?",
    "Brief me on Meera Shah",
    "Who needs a site visit next?",
    "How is the pipeline looking?",
  ];

  const REPLIES = [
    {
      id: "revenue",
      match: /revenue|opportunity|brief|executive|₹|cr\b|booking readiness|graph|chart|visual/i,
      text:
        "Executive snapshot (synthetic):\n\n• Revenue opportunity: ₹48–62 Cr this week across Greenfield + Lakeview (DPT-0008, medium confidence).\n• Booking readiness: Band A 8 · Band B 14 · Band C 11 · In nurture 6.\n• Coverage: 96% of qualified buyers have a live NIVI action.\n• Auto-send rate: 98% on WhatsApp + nurture — no approval queue.\n\nHere’s the weekly opportunity trend and readiness mix.",
      viz: {
        type: "combo-revenue",
        title: "Opportunity · this week vs prior",
        bars: [
          { label: "Mon", a: 40, b: 55 },
          { label: "Tue", a: 60, b: 50 },
          { label: "Wed", a: 75, b: 62 },
          { label: "Thu", a: 50, b: 70 },
          { label: "Fri", a: 85, b: 68 },
          { label: "Sat", a: 70, b: 72 },
          { label: "Sun", a: 90, b: 80 },
        ],
        bands: [
          { label: "Band A", value: 8, pct: 40 },
          { label: "Band B", value: 14, pct: 70 },
          { label: "Band C", value: 11, pct: 55 },
          { label: "Nurture", value: 6, pct: 30 },
        ],
        kpis: [
          { label: "Opportunity", value: "₹48–62 Cr" },
          { label: "Coverage", value: "96%" },
          { label: "Auto-send", value: "98%" },
        ],
      },
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
        "NIVI interventions already live (readout only):\n\n1. Inventory conflict on unit 7C reconciled — fit unblocked for 3 buyers.\n2. Low-engagement nurture boosted — 2 cohorts on WhatsApp + call.\n3. Field capacity balanced — 12 briefs split across Alex + Priya.\n\nHumans only enter at site show + visit feedback.",
      viz: {
        type: "status-list",
        title: "Interventions · live status",
        items: [
          { title: "7C inventory reconciled", meta: "3 buyers unblocked", status: "Done" },
          { title: "Nurture boost", meta: "2 cohorts · WA + call", status: "Live" },
          { title: "Field capacity", meta: "12 briefs · Alex + Priya", status: "Done" },
        ],
      },
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
        "Meera Shah · Household H-2041 · Greenfield (synthetic):\n\n• Intent: 3BHK, east-facing, budget band matched.\n• Unit fit: 4B selected · confidence 0.86 (AI observation, not a fact).\n• Channel: WhatsApp consent OK · parking objection likely.\n• Next: site visit tomorrow 14:00 — field agent shows the unit; NIVI resumes after feedback.",
      viz: {
        type: "fit-meter",
        title: "Unit fit · 4B",
        score: 86,
        rows: [
          { label: "Budget match", pct: 92 },
          { label: "East-facing", pct: 88 },
          { label: "3BHK layout", pct: 84 },
          { label: "Parking risk", pct: 42, warn: true },
        ],
      },
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
        "WhatsApp with Meera (auto-sent):\n\nMeera: “Saw your Greenfield ad — interested in 3BHK. Is parking included?”\nNIVI: “Hi Meera — Unit 4B matches your budget band and east-facing preference. Visitor parking is available as per project FAQ. Want a site visit tomorrow 2 PM?”\n\nNo Approve & send gate — NIVI sends, logs, and continues nurture.",
      viz: {
        type: "funnel",
        title: "Meera · conversation → visit",
        steps: [
          { label: "Ad click", pct: 100 },
          { label: "Form", pct: 100 },
          { label: "WhatsApp", pct: 100 },
          { label: "Visit booked", pct: 78 },
        ],
      },
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
        "Site-visit forecast · next 14 days: 27 total (12 confirmed · 15 proposed by NIVI).\n\nNext human touch — Meera Shah tomorrow 14:00 at Greenfield · unit 4B. Spouse may join · parking objection likely.",
      viz: {
        type: "visit-bars",
        title: "Visits · next 14 days",
        bars: [
          { label: "Confirmed", value: 12, pct: 44 },
          { label: "Proposed", value: 15, pct: 56 },
          { label: "Greenfield", value: 18, pct: 67 },
          { label: "Lakeview", value: 9, pct: 33 },
        ],
        note: "Meera · tomorrow 14:00 · Greenfield 4B",
      },
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
        "Pipeline (NIVI-operated):\n\n• 96% of qualified buyers have a live auto action — not waiting on approval.\n• Priority work: fit refresh, WhatsApp follow-ups, visit proposals, inventory sync.\n• Top story buyer: Meera Shah (fit 4B · visit booked).\n• Blockers cleared today: unit 7C inventory conflict.",
      viz: {
        type: "coverage",
        title: "Pipeline coverage",
        value: 96,
        slices: [
          { label: "Live action", pct: 96, tone: "a" },
          { label: "Gap", pct: 4, tone: "b" },
        ],
        rows: [
          { label: "Fit refresh", pct: 88 },
          { label: "WhatsApp follow-up", pct: 94 },
          { label: "Visit proposals", pct: 72 },
          { label: "Inventory sync", pct: 100 },
        ],
      },
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
        "Campaigns live under NIVI:\n\n• Greenfield Launch · Spring — Meta / IG / WhatsApp · 12.4k reach · 1,102 clicks · 286 forms.\n• Lakeview · Soft launch — IG / Calls · 890 reach · 102 clicks · 41 forms.\n\nFunnel: open → click → form → NIVI handoff with attribution.",
      viz: {
        type: "funnel",
        title: "Greenfield Launch · funnel",
        steps: [
          { label: "Reach 12.4k", pct: 100 },
          { label: "Clicks 1,102", pct: 72 },
          { label: "Forms 286", pct: 48 },
          { label: "NIVI handoff", pct: 40 },
        ],
      },
      suggestions: [
        "What’s today’s revenue opportunity?",
        "Brief me on Meera Shah",
        "Compare Greenfield vs Lakeview",
      ],
    },
    {
      id: "projects",
      match: /greenfield|lakeview|compare|project|inventory|unit/i,
      text:
        "Projects in this demo:\n\nGreenfield Tower — primary storyline (Meera · 4B), strongest launch (286 forms), visit load tomorrow.\nLakeview — soft launch (41 forms), contributes to the ₹48–62 Cr opportunity band.\n\nInventory: 7C conflict auto-reconciled.",
      viz: {
        type: "compare",
        title: "Greenfield vs Lakeview",
        left: { name: "Greenfield", forms: 286, visits: 18, reach: "12.4k" },
        right: { name: "Lakeview", forms: 41, visits: 9, reach: "890" },
      },
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
        "Meera’s journey (auto vs field):\n\nLead → Buyer → Intent → Unit Fit → Conversation → Site Visit (human) → Booking Readiness → Outcome → Learn.\n\nNIVI owns every step except site show and visit feedback.",
      viz: {
        type: "timeline",
        title: "Buyer journey · Meera",
        steps: [
          { label: "Lead", tone: "auto" },
          { label: "Intent", tone: "auto" },
          { label: "Fit 4B", tone: "auto" },
          { label: "WhatsApp", tone: "auto" },
          { label: "Visit", tone: "human" },
          { label: "Ready", tone: "auto" },
        ],
      },
      suggestions: [
        "Brief me on Meera Shah",
        "What did NIVI say on WhatsApp?",
        "What’s today’s revenue opportunity?",
      ],
    },
  ];

  const FALLBACK = {
    text:
      "I can answer from the demo model: revenue opportunity, Meera Shah / Buyer 360, pipeline coverage, campaigns & funnel, site visits, WhatsApp nurture, and Greenfield vs Lakeview.\n\nTry a suggestion — or ask by voice.",
    suggestions: STARTER_SUGGESTIONS.slice(),
    viz: {
      type: "coverage",
      title: "What I can show",
      value: 100,
      slices: [
        { label: "Demo topics", pct: 100, tone: "a" },
        { label: "", pct: 0, tone: "b" },
      ],
      rows: [
        { label: "Revenue & readiness", pct: 100 },
        { label: "Buyer / Meera", pct: 100 },
        { label: "Campaigns & visits", pct: 100 },
        { label: "Voice ask", pct: 100 },
      ],
    },
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

  function renderViz(viz) {
    if (!viz) return "";
    const title = escapeHtml(viz.title || "Insight");
    let body = "";

    if (viz.type === "combo-revenue") {
      const bars = (viz.bars || [])
        .map(
          (b) =>
            `<div class="ask-bar-group"><div class="ask-bar-pair"><div class="ask-bar a" style="height:${b.a}%"></div><div class="ask-bar b" style="height:${b.b}%"></div></div><span>${escapeHtml(b.label)}</span></div>`
        )
        .join("");
      const bands = (viz.bands || [])
        .map(
          (b) =>
            `<div class="ask-band"><div class="ask-band-label"><span>${escapeHtml(b.label)}</span><strong>${b.value}</strong></div><div class="ask-band-track"><i style="width:${b.pct}%"></i></div></div>`
        )
        .join("");
      const kpis = (viz.kpis || [])
        .map(
          (k) =>
            `<div class="ask-kpi"><div class="ask-kpi-val">${escapeHtml(k.value)}</div><div class="ask-kpi-label">${escapeHtml(k.label)}</div></div>`
        )
        .join("");
      body =
        `<div class="ask-kpi-row">${kpis}</div>` +
        `<div class="ask-bars" aria-hidden="true">${bars}</div>` +
        `<div class="ask-legend"><span class="a">This week</span><span class="b">Prior week</span></div>` +
        `<div class="ask-bands">${bands}</div>`;
    } else if (viz.type === "funnel") {
      body = `<div class="ask-funnel">${(viz.steps || [])
        .map(
          (s) =>
            `<div class="ask-funnel-step"><div class="ask-funnel-bar" style="width:${s.pct}%"></div><span>${escapeHtml(s.label)}</span></div>`
        )
        .join("")}</div>`;
    } else if (viz.type === "coverage") {
      body =
        `<div class="ask-coverage"><div class="ask-ring" style="--p:${viz.value}"><span>${viz.value}%</span></div><div class="ask-bands">${(viz.rows || [])
          .map(
            (r) =>
              `<div class="ask-band"><div class="ask-band-label"><span>${escapeHtml(r.label)}</span><strong>${r.pct}%</strong></div><div class="ask-band-track"><i style="width:${r.pct}%"></i></div></div>`
          )
          .join("")}</div></div>`;
    } else if (viz.type === "fit-meter") {
      body =
        `<div class="ask-coverage"><div class="ask-ring accent" style="--p:${viz.score}"><span>${viz.score}%</span></div><div class="ask-bands">${(viz.rows || [])
          .map(
            (r) =>
              `<div class="ask-band${r.warn ? " warn" : ""}"><div class="ask-band-label"><span>${escapeHtml(r.label)}</span><strong>${r.pct}%</strong></div><div class="ask-band-track"><i style="width:${r.pct}%"></i></div></div>`
          )
          .join("")}</div></div>`;
    } else if (viz.type === "visit-bars") {
      body =
        `<div class="ask-hbars">${(viz.bars || [])
          .map(
            (b) =>
              `<div class="ask-hbar"><span class="ask-hbar-label">${escapeHtml(b.label)}</span><div class="ask-hbar-track"><i style="width:${b.pct}%"></i></div><strong>${b.value}</strong></div>`
          )
          .join("")}</div>` +
        (viz.note ? `<p class="ask-viz-note">${escapeHtml(viz.note)}</p>` : "");
    } else if (viz.type === "compare") {
      const L = viz.left || {};
      const R = viz.right || {};
      body = `<div class="ask-compare">
        <div class="ask-compare-card"><h4>${escapeHtml(L.name || "")}</h4><div class="ask-kpi-val">${L.forms}</div><div class="ask-kpi-label">Forms</div><p>Reach ${escapeHtml(String(L.reach || "—"))} · Visits ${L.visits ?? "—"}</p></div>
        <div class="ask-compare-card"><h4>${escapeHtml(R.name || "")}</h4><div class="ask-kpi-val">${R.forms}</div><div class="ask-kpi-label">Forms</div><p>Reach ${escapeHtml(String(R.reach || "—"))} · Visits ${R.visits ?? "—"}</p></div>
      </div>`;
    } else if (viz.type === "timeline") {
      body = `<div class="ask-timeline">${(viz.steps || [])
        .map(
          (s) =>
            `<span class="ask-tl-step ${s.tone === "human" ? "human" : "auto"}">${escapeHtml(s.label)}</span>`
        )
        .join("")}</div>`;
    } else if (viz.type === "status-list") {
      body = `<div class="ask-status-list">${(viz.items || [])
        .map(
          (it) =>
            `<div class="ask-status-row"><div><div class="ask-status-title">${escapeHtml(it.title)}</div><div class="ask-status-meta">${escapeHtml(it.meta)}</div></div><span class="ask-status-pill">${escapeHtml(it.status)}</span></div>`
        )
        .join("")}</div>`;
    }

    return `<div class="ask-viz reveal-viz"><div class="ask-viz-title">${title}</div>${body}</div>`;
  }

  function setupAskNivi() {
    const thread = document.getElementById("ask-thread");
    const form = document.getElementById("ask-form");
    const input = document.getElementById("ask-input");
    const sendBtn = document.getElementById("ask-send");
    const voiceBtn = document.getElementById("ask-voice");
    const voiceStatus = document.getElementById("ask-voice-status");
    const suggestionsEl = document.getElementById("ask-suggestions");
    if (!thread || !form || !input || !suggestionsEl) return;

    let busy = false;
    let recognition = null;
    let listening = false;

    function scrollBottom() {
      thread.scrollTop = thread.scrollHeight;
    }

    function setVoiceStatus(msg, show) {
      if (!voiceStatus) return;
      if (!show) {
        voiceStatus.hidden = true;
        voiceStatus.textContent = "";
        return;
      }
      voiceStatus.hidden = false;
      voiceStatus.textContent = msg;
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
        '<div class="ask-avatar bot">N</div><div class="ask-bubble ask-bubble-rich"><span class="ask-typing-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ask-stream"></span><div class="ask-viz-slot"></div></div>';
      thread.appendChild(row);
      scrollBottom();
      return {
        stream: row.querySelector(".ask-stream"),
        vizSlot: row.querySelector(".ask-viz-slot"),
        bubble: row.querySelector(".ask-bubble"),
      };
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

    async function revealViz(slot, viz) {
      if (!slot || !viz) return;
      slot.innerHTML = renderViz(viz);
      const card = slot.querySelector(".ask-viz");
      if (!card) return;
      if (prefersReducedMotion()) {
        card.classList.add("is-in");
      } else {
        requestAnimationFrame(() => card.classList.add("is-in"));
      }
      scrollBottom();
    }

    function sendText(text) {
      const cleaned = (text || "").replace(/\s+/g, " ").trim();
      if (!cleaned || busy) return;
      input.value = "";
      input.style.height = "auto";
      appendUser(cleaned);
      replyTo(cleaned);
    }

    async function replyTo(userText) {
      busy = true;
      sendBtn.disabled = true;
      if (voiceBtn) voiceBtn.disabled = true;
      suggestionsEl.classList.add("is-dim");

      await sleep(prefersReducedMotion() ? 0 : 380);
      const shell = appendAssistantShell();
      const answer = pickReply(userText);
      await revealText(shell.stream, answer.text);
      await sleep(prefersReducedMotion() ? 0 : 180);
      await revealViz(shell.vizSlot, answer.viz);
      renderSuggestions(answer.suggestions || STARTER_SUGGESTIONS);

      busy = false;
      sendBtn.disabled = false;
      if (voiceBtn) voiceBtn.disabled = false;
      suggestionsEl.classList.remove("is-dim");
      input.focus();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendText(input.value);
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

    function stopListening() {
      listening = false;
      if (voiceBtn) voiceBtn.classList.remove("is-listening");
      try {
        if (recognition) recognition.stop();
      } catch (e) {}
    }

    function setupVoice() {
      if (!voiceBtn) return;
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        voiceBtn.title = "Voice not supported in this browser";
        voiceBtn.addEventListener("click", () => {
          setVoiceStatus("Voice not supported here — try Chrome/Safari, or type instead.", true);
          setTimeout(() => setVoiceStatus("", false), 3200);
        });
        return;
      }

      recognition = new SR();
      recognition.lang = "en-IN";
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = false;

      recognition.onstart = () => {
        listening = true;
        voiceBtn.classList.add("is-listening");
        setVoiceStatus("Listening… speak your question", true);
      };

      recognition.onerror = (ev) => {
        stopListening();
        const msg =
          ev.error === "not-allowed"
            ? "Microphone permission blocked — allow mic, then try again."
            : "Couldn’t catch that — try again or type.";
        setVoiceStatus(msg, true);
        setTimeout(() => setVoiceStatus("", false), 3200);
      };

      recognition.onend = () => {
        listening = false;
        voiceBtn.classList.remove("is-listening");
      };

      recognition.onresult = (event) => {
        let finalText = "";
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const piece = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalText += piece;
          else interim += piece;
        }
        const live = (finalText || interim).trim();
        if (live) {
          input.value = live;
          input.dispatchEvent(new Event("input"));
          setVoiceStatus(finalText ? "Sending…" : "Listening… " + interim, true);
        }
        if (finalText.trim()) {
          stopListening();
          setVoiceStatus("", false);
          sendText(finalText);
        }
      };

      voiceBtn.addEventListener("click", () => {
        if (busy) return;
        if (listening) {
          stopListening();
          setVoiceStatus("", false);
          return;
        }
        try {
          recognition.start();
        } catch (e) {
          setVoiceStatus("Mic busy — tap again in a moment.", true);
          setTimeout(() => setVoiceStatus("", false), 2400);
        }
      });
    }

    setupVoice();

    (async () => {
      const empty = document.createElement("div");
      empty.className = "ask-empty";
      empty.innerHTML =
        '<div class="ask-empty-mark">✦</div><h2>Ask NIVI</h2><p>Revenue OS copilot for this stakeholder demo.</p>';
      thread.appendChild(empty);

      await sleep(prefersReducedMotion() ? 0 : 200);
      empty.remove();

      const shell = appendAssistantShell();
      await revealText(shell.stream, WELCOME);
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
