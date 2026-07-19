/* Lightweight prototype interactions — no backend */

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
      document.querySelector(".topbar h1")?.textContent?.trim() || "AURA";
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
  setupMobileNav();
});
