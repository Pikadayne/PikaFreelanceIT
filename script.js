const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const contactForm = document.querySelector("#contact-form");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".service-card, .project-card, .why-grid div").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name");
  const service = data.get("service");
  const message = data.get("message");
  const text = `Chào Tuấn Anh, mình là ${name}. Mình cần hỗ trợ: ${service}. Mô tả: ${message}`;
  window.open(`https://zalo.me/0385725510?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
