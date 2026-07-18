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

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
});
