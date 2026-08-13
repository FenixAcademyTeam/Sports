// Fénix Academy — interacciones mínimas
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú al elegir un link (mobile)
    header.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Badges de logro: mostrar/ocultar la etiqueta al presionar (funciona en mobile y desktop)
  const badges = document.querySelectorAll(".badge-trophy");
  badges.forEach((badge) => {
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = badge.classList.contains("is-open");
      badges.forEach((b) => b.classList.remove("is-open"));
      if (!wasOpen) badge.classList.add("is-open");
    });
  });
  document.addEventListener("click", () => {
    badges.forEach((b) => b.classList.remove("is-open"));
  });
});
