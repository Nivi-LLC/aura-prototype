/* Lightweight client-side gate for stakeholder demo. Not real security. */
(function () {
  var KEY = "nivi_prototype_unlocked";
  var PASS = "9999";

  function cssPath() {
    return location.pathname.indexOf("/screens/") !== -1
      ? "../css/nivi.css"
      : "css/nivi.css";
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
      var base =
        location.pathname.indexOf("/screens/") !== -1 ? "../assets/" : "assets/";
      document.body.innerHTML =
        '<div class="bg-holo" aria-hidden="true" style="background-image:url(' +
        base +
        'holographic-gradient-11.png)"></div>' +
        '<div class="bg-video-scrim" aria-hidden="true"></div>' +
        '<div class="gate">' +
        '<form class="gate-card" id="nivi-gate-form" autocomplete="off">' +
        '<div class="gate-brand">NIVI</div>' +
        '<p class="gate-sub">Prototype access</p>' +
        '<label class="gate-label" for="nivi-gate-pass">Password</label>' +
        '<input class="gate-input" id="nivi-gate-pass" type="password" inputmode="numeric" maxlength="16" placeholder="Enter password" autofocus />' +
        '<p class="gate-error" id="nivi-gate-error" hidden>Incorrect password</p>' +
        '<button class="btn btn-primary block" type="submit">Open prototype</button>' +
        '<p class="gate-note">Stakeholder demo · synthetic data only</p>' +
        "</form></div>";
      document.body.classList.add("has-bg-video");
      // Hydrate fluid SVG blobs (green / orange / blue / cyan core)
      fetch(base + "holographic-gradient-11-fluid.svg")
        .then(function (r) {
          return r.ok ? r.text() : Promise.reject();
        })
        .then(function (svg) {
          var holo = document.querySelector(".bg-holo");
          if (!holo) return;
          holo.innerHTML = svg;
          holo.classList.add("is-fluid");
          holo.style.backgroundImage = "none";
          var el = holo.querySelector("svg");
          if (el) el.setAttribute("class", "bg-holo-svg");
        })
        .catch(function () {});

      var form = document.getElementById("nivi-gate-form");
      var input = document.getElementById("nivi-gate-pass");
      var err = document.getElementById("nivi-gate-error");
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
