// JavaScript to add fade-in effect on scroll
const contentSections = document.querySelectorAll(".content");
window.addEventListener("scroll", () => {
  contentSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});
