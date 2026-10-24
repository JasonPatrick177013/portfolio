// Minimap: highlight the room you're in
const rooms = [...document.querySelectorAll("[data-room-section]")];
const dots = Object.fromEntries(
  [...document.querySelectorAll(".map a")].map((a) => [a.dataset.room, a])
);

const roomObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      Object.values(dots).forEach((d) => d.classList.remove("on"));
      dots[entry.target.id]?.classList.add("on");
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
rooms.forEach((r) => roomObserver.observe(r));

// Spotlight that follows the cursor on skill panels
document.querySelectorAll(".panel").forEach((panel) => {
  panel.addEventListener("pointermove", (e) => {
    const box = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", e.clientX - box.left + "px");
    panel.style.setProperty("--my", e.clientY - box.top + "px");
  });
});

// Count up the contest stats once they're on screen
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      countObserver.unobserve(el);
      if (reduceMotion) return;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 900, 1);
        el.textContent = Math.round(end * p) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

// Copy email with a toast
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("copy").addEventListener("click", async () => {
  const email = "jasonpatrick3011@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email address copied");
  } catch {
    showToast(email);
  }
});
