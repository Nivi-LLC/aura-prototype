/* NIVI Intelligence — persona lens filtering + reveal polish */

(function () {
  function setupIntelligence() {
    if (!document.body.classList.contains("intel-page")) return;

    const lenses = document.querySelectorAll(".intel-lens");
    const tagged = document.querySelectorAll("[data-tags]");

    function applyLens(lens) {
      lenses.forEach((btn) => {
        btn.classList.toggle("is-on", btn.getAttribute("data-lens") === lens);
      });

      tagged.forEach((el) => {
        if (lens === "all") {
          el.classList.remove("is-dim");
          return;
        }
        const tags = (el.getAttribute("data-tags") || "").split(/\s+/);
        const match = tags.includes(lens);
        el.classList.toggle("is-dim", !match);
      });
    }

    lenses.forEach((btn) => {
      btn.addEventListener("click", () => applyLens(btn.getAttribute("data-lens") || "all"));
    });

    // Stagger heat bars on load
    document.querySelectorAll(".intel-heat-row i").forEach((bar, i) => {
      bar.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
      requestAnimationFrame(() => bar.classList.add("is-on"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupIntelligence);
  } else {
    setupIntelligence();
  }
})();
