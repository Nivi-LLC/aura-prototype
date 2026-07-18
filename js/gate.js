/* Lightweight client-side gate for stakeholder demo. Not real security. */
(function () {
  var KEY = "aura_prototype_unlocked";
  var PASS = "9999";

  function cssPath() {
    return location.pathname.indexOf("/screens/") !== -1
      ? "../css/aura.css"
      : "css/aura.css";
  }

  function unlock() {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {}
  }

  function isUnlocked() {
    try {
      return sessionStorage.getItem(KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function showGate() {
    document.documentElement.style.visibility = "hidden";
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = cssPath();
    document.head.appendChild(css);

    function paint() {
      document.documentElement.style.visibility = "visible";
      document.body.innerHTML =
        '<div class="gate">' +
        '<form class="gate-card" id="aura-gate-form" autocomplete="off">' +
        '<div class="gate-brand">AURA</div>' +
        '<p class="gate-sub">Prototype access</p>' +
        '<label class="gate-label" for="aura-gate-pass">Password</label>' +
        '<input class="gate-input" id="aura-gate-pass" type="password" inputmode="numeric" maxlength="16" placeholder="Enter password" autofocus />' +
        '<p class="gate-error" id="aura-gate-error" hidden>Incorrect password</p>' +
        '<button class="btn btn-primary block" type="submit">Open prototype</button>' +
        '<p class="gate-note">Stakeholder demo · synthetic data only</p>' +
        "</form></div>";

      var form = document.getElementById("aura-gate-form");
      var input = document.getElementById("aura-gate-pass");
      var err = document.getElementById("aura-gate-error");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if ((input.value || "").trim() === PASS) {
          unlock();
          location.reload();
          return;
        }
        err.hidden = false;
        input.value = "";
        input.focus();
      });
    }

    if (document.body) paint();
    else document.addEventListener("DOMContentLoaded", paint);
  }

  if (!isUnlocked()) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showGate);
    } else {
      showGate();
    }
  }
})();
