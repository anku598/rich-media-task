document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentSlide = 0;

  const goToSlide = (index) => {
    // Hide current slide
    gsap.to(slides[currentSlide], {
      duration: 1,
      xPercent: -100,
      zIndex: 1, // Lower z-index to move behind the next slide
      ease: "power2.inOut",
    });

    // Show next slide
    gsap.set(slides[index], { xPercent: 100, zIndex: 2 }); // Higher z-index to move on top of the current slide
    gsap.to(slides[index], {
      duration: 1,
      xPercent: 0,
      ease: "power2.inOut",
    });

    currentSlide = index;
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Initially show the first slide
  goToSlide(0);
});
