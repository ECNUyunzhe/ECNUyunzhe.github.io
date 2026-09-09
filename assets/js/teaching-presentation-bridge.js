/* DAWN teaching / classroom presentation bridge.
 * Standalone visits are untouched. Only public element geometry is shared,
 * over a MessagePort explicitly transferred by the embedding presentation.
 */
(() => {
  "use strict";
  if (window.parent === window) return;

  const protocol = "dawn-teaching-presentation";
  const version = 1;
  const allowedOrigins = new Set([location.origin, "https://dawn-ecnu.github.io"]);
  let port = null;
  let session = "";
  let active = false;
  let scheduled = 0;
  let lastGeometry = "";
  let started = false;
  let previousOverflow = null;
  const watched = new WeakSet();
  const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(schedule) : null;

  function allowedParent(origin) {
    if (origin === "null" || allowedOrigins.has(origin)) return true;
    try {
      const url = new URL(origin);
      return ["http:", "https:"].includes(url.protocol) &&
        ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    } catch (_) {
      return false;
    }
  }

  function elements() {
    const pg = document.querySelector('[data-dawn-course-id="202621742"]');
    const ug = document.querySelector('[data-dawn-course-id="SOCI235.01"]');
    return {
      settings: document.getElementById("light-toggle"),
      pg,
      ug,
      select: pg ? pg.querySelector(".card-title a") : null
    };
  }

  function box(element) {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    return {
      x: Math.round(rect.x * 100) / 100,
      y: Math.round(rect.y * 100) / 100,
      width: Math.round(rect.width * 100) / 100,
      height: Math.round(rect.height * 100) / 100
    };
  }

  function send(type, payload = {}) {
    if (!port) return;
    port.postMessage({ protocol, version, session, type, ...payload });
  }

  function observe(element) {
    if (!resizeObserver || !element || watched.has(element)) return;
    watched.add(element);
    resizeObserver.observe(element);
  }

  function report() {
    scheduled = 0;
    if (!active || !port) return;
    const targets = elements();
    const courses = document.querySelector(".courses");
    const footer = document.querySelector("footer");
    [document.documentElement, document.body, courses, footer, ...Object.values(targets)].forEach(observe);
    const anchors = Object.fromEntries(Object.entries(targets).map(([key, element]) => [key, box(element)]));
    if (Object.values(anchors).some(rect => !rect) || !courses) return;
    const footerHeight = footer ? footer.getBoundingClientRect().height : 0;
    // Measure the content, not scrollHeight: a viewport-sized body would cause
    // a feedback loop when the parent adjusts the iframe height.
    const contentHeight = Math.ceil(courses.getBoundingClientRect().bottom + window.scrollY + footerHeight + 40);
    const background = getComputedStyle(document.body).backgroundColor;
    const geometry = {
      page: "teaching",
      viewport: { width: window.innerWidth, height: window.innerHeight },
      contentHeight,
      background,
      anchors
    };
    const signature = JSON.stringify(geometry);
    if (signature === lastGeometry) return;
    lastGeometry = signature;
    send("geometry", geometry);
  }

  function schedule() {
    if (active && !scheduled) scheduled = requestAnimationFrame(report);
  }

  function leaving() {
    if (!active) return;
    send("navigate");
    active = false;
    if (scheduled) cancelAnimationFrame(scheduled);
    scheduled = 0;
  }

  function start() {
    if (started) return;
    started = true;
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    document.addEventListener("load", schedule, true);
    document.addEventListener("DOMContentLoaded", schedule, { once: true });
    document.addEventListener("transitionend", schedule, true);
    document.addEventListener("click", event => {
      if (!active || event.defaultPrevented || event.button !== 0 ||
          event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      try {
        const target = new URL(link.href, location.href);
        if (!["https:", "http:"].includes(target.protocol)) return;
        if (target.origin === location.origin && target.pathname === location.pathname &&
            target.search === location.search) return;
        leaving();
      } catch (_) {
        // Invalid or non-navigation links do not affect the presentation.
      }
    });
    const themeObserver = new MutationObserver(schedule);
    themeObserver.observe(document.documentElement, {
      attributes: true, attributeFilter: ["data-theme", "class", "style"]
    });
    if (document.body) themeObserver.observe(document.body, {
      attributes: true, attributeFilter: ["class", "style"]
    });
    if (document.fonts) {
      document.fonts.ready.then(schedule);
      document.fonts.addEventListener("loadingdone", schedule);
      document.fonts.addEventListener("loadingerror", schedule);
    }
  }

  window.addEventListener("message", event => {
    const data = event.data;
    if (event.source !== window.parent || !allowedParent(event.origin) ||
        !data || data.protocol !== protocol || data.version !== version ||
        data.type !== "connect" || typeof data.session !== "string" ||
        !/^[a-zA-Z0-9_-]{16,96}$/.test(data.session) || !event.ports[0]) return;
    if (port) port.close();
    port = event.ports[0];
    session = data.session;
    active = true;
    lastGeometry = "";
    port.onmessage = message => {
      const request = message.data;
      if (!request || request.protocol !== protocol || request.version !== version ||
          request.session !== session || request.type !== "measure") return;
      lastGeometry = "";
      schedule();
    };
    port.start();
    if (!previousOverflow) {
      previousOverflow = [document.documentElement.style.overflow, document.body.style.overflow];
    }
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    start();
    schedule();
  });

  window.addEventListener("pagehide", () => {
    leaving();
    if (port) port.close();
    port = null;
    if (previousOverflow) {
      document.documentElement.style.overflow = previousOverflow[0];
      document.body.style.overflow = previousOverflow[1];
      previousOverflow = null;
    }
  });
  window.addEventListener("pageshow", ready);

  function ready() {
    // A public readiness signal contains no geometry, content, or identifiers.
    // The local-file parent has an opaque origin, so geometry uses a private
    // MessagePort rather than wildcard window messages.
    window.parent.postMessage({ protocol, version, type: "ready" }, "*");
  }
  ready();
})();
