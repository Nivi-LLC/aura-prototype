/* Lightweight prototype interactions — liquid glass + fluid holographic bg */

function showToast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-toast]");
  if (!btn) return;
  e.preventDefault();
  showToast(btn.getAttribute("data-toast") || "Action recorded (prototype)");
});

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function assetPath(file) {
  return location.pathname.indexOf("/screens/") !== -1
    ? `../assets/${file}`
    : `assets/${file}`;
}

async function setupHoloBackground() {
  if (document.querySelector(".bg-holo")) return;

  const root = document.createElement("div");
  root.className = "bg-holo";
  root.setAttribute("aria-hidden", "true");

  const scrim = document.createElement("div");
  scrim.className = "bg-video-scrim";
  scrim.setAttribute("aria-hidden", "true");

  document.body.prepend(scrim);
  document.body.prepend(root);
  document.body.classList.add("has-bg-video");

  // Static poster while SVG loads / for reduced motion
  root.style.backgroundImage = `url("${assetPath("holographic-gradient-11.png")}")`;
  root.style.backgroundSize = "cover";
  root.style.backgroundPosition = "center";

  if (prefersReducedMotion()) return;

  try {
    const res = await fetch(assetPath("holographic-gradient-11-fluid.svg"), {
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("svg fetch failed");
    const svg = await res.text();
    root.innerHTML = svg;
    root.classList.add("is-fluid");
    const svgEl = root.querySelector("svg");
    if (svgEl) {
      svgEl.setAttribute("class", "bg-holo-svg");
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
    }
  } catch (err) {
    // Keep PNG + slow CSS drift if SVG cannot load
    root.classList.add("is-fallback");
  }
}

function setupReveals() {
  if (prefersReducedMotion()) return;

  document.body.classList.add("page-enter");

  const targets = document.querySelectorAll(
    ".card, .decision-card, .screen-tile, .journey span, .note, .grid > .stack"
  );
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${Math.min(i * 45, 360)}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => io.observe(el));
}

function setupIntelChips() {
  document.querySelectorAll(".pill.pill-ok, .pill.pill-accent").forEach((pill) => {
    const t = (pill.textContent || "").trim().toLowerCase();
    if (t === "live" || t === "nivi auto" || t === "ai owned" || t === "ai operated") {
      pill.classList.add("intel-chip");
      pill.classList.remove("pill-ok", "pill-accent");
    }
  });
}

function setupMobileNav() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  if (!sidebar || !main || document.body.classList.contains("hub")) return;

  let backdrop = document.querySelector(".nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("button");
    backdrop.type = "button";
    backdrop.className = "nav-backdrop";
    backdrop.setAttribute("aria-label", "Close menu");
    document.body.appendChild(backdrop);
  }

  if (!document.querySelector(".mobile-top")) {
    const pageTitle =
      document.querySelector(".topbar h1")?.textContent?.trim() || "NIVI";
    const pageSub =
      document.querySelector(".sidebar-brand .tag")?.textContent?.trim() ||
      "Phase 1 · AI Revenue OS";
    const top = document.createElement("div");
    top.className = "mobile-top";
    top.innerHTML =
      '<button type="button" class="menu-btn" data-open-nav aria-label="Open menu">☰</button>' +
      '<div class="title"><strong></strong><span></span></div>';
    top.querySelector("strong").textContent = pageTitle;
    top.querySelector("span").textContent = pageSub;
    main.insertBefore(top, main.firstChild);
  }

  function openNav() {
    sidebar.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-open-nav]")) {
      e.preventDefault();
      openNav();
      return;
    }
    if (e.target === backdrop) {
      e.preventDefault();
      closeNav();
    }
  });

  sidebar.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => closeNav());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  document.querySelectorAll(".mobile-nav a").forEach((a) => {
    if (!(a.textContent || "").includes("More")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-open-nav", "");
    btn.setAttribute("aria-label", "Open more menu");
    if (a.classList.contains("active")) btn.classList.add("active");
    btn.innerHTML = a.innerHTML;
    a.replaceWith(btn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
  setupHoloBackground();
  setupMobileNav();
  setupIntelChips();
  setupReveals();
});
