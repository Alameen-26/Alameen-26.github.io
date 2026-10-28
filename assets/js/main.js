// Added in v0.1.0: small progressive enhancements. The page works fully without JavaScript.
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  // ---- Light/dark toggle (Added in v0.1.0) ----
  var THEME_KEY = "niyisoft-theme";
  var toggle = document.querySelector(".theme-toggle");
  var icon = toggle ? toggle.querySelector(".theme-icon") : null;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    var dark = theme === "dark";
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    if (icon) icon.textContent = dark ? "\u2600" : "\u263E"; // sun / moon
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode: not saved */ }
    });
  }

  // Follow the system setting until the visitor picks a theme themselves.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem(THEME_KEY); } catch (err) { /* ignore */ }
      if (!saved) applyTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }

  // ---- Phone menu (Added in v0.1.0) ----
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");

  function setMenu(open) {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navLinks.classList.toggle("is-open", open);
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
    // Close after choosing a section, or with Escape (focus returns to the button).
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        navToggle.focus();
      }
    });
  }

  // ---- Footer year (Added in v0.1.0) ----
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
