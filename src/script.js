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
