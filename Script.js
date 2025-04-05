document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("#theme-btn");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
  }

  // Toggle theme on click
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const newTheme = body.classList.contains("light-mode") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
    });
  }

  // Smooth scroll for scroll-link anchors
  const scrollLinks = document.querySelectorAll("a.scroll-link");
  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for fixed header
          behavior: "smooth"
        });
      }
    });
  });
});
