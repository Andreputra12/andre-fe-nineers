// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  // Select all accordion buttons
  const accordionButtons = document.querySelectorAll("[data-accordion-target]");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = document.querySelector(
        button.getAttribute("data-accordion-target")
      );
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Toggle accordion body
      if (isExpanded) {
        button.setAttribute("aria-expanded", "false");
        target.classList.add("hidden");
      } else {
        button.setAttribute("aria-expanded", "true");
        target.classList.remove("hidden");
      }

      // Rotate the accordion icon
      const icon = button.querySelector("[data-accordion-icon]");
      if (icon) {
        icon.classList.toggle("rotate-180", !isExpanded);
      }
    });
  });
});

// ==============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu toggle
  const userMenuButton = document.getElementById("user-menu-button");
  const userDropdown = document.getElementById("user-dropdown");

  // Event listener untuk membuka/menutup dropdown saat tombol diklik
  userMenuButton.addEventListener("click", () => {
    userDropdown.classList.toggle("hidden"); // Tampilkan/Sembunyikan dropdown
  });

  // Event listener untuk menutup dropdown jika klik di luar elemen dropdown
  document.addEventListener("click", (event) => {
    if (
      !userMenuButton.contains(event.target) &&
      !userDropdown.contains(event.target)
    ) {
      userDropdown.classList.add("hidden");
    }
  });
});
