import "./style.scss";

// var slideDelay = 1.5;
// var slideDuration = 1.2;
// var snapX;

// var slides = document.querySelectorAll(".slide");
// var autoPlayLimit = slides.length * 2;
// var autoPlayCount = 0;
// var prevButton = document.querySelector(".prev");
// var nextButton = document.querySelector(".next");
// var progressWrap = gsap.utils.wrap(0, 1);

// var numSlides = slides.length;

// gsap.set(slides, {
//   xPercent: (i) => i * 100,
// });

// var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
// var timer = gsap.delayedCall(slideDelay, autoPlay);

// var animation = gsap.to(slides, {
//   xPercent: "+=" + numSlides * 100,
//   duration: 1,
//   ease: "none",
//   paused: true,
//   repeat: -1,
//   modifiers: {
//     xPercent: wrap,
//   },
// });

// var proxy = document.createElement("div");
// var slideAnimation = gsap.to({}, {});
// var slideWidth = 0;
// var wrapWidth = 0;
// resize();

// window.addEventListener("resize", resize);

// prevButton.addEventListener("click", function () {
//   animateSlides(1);
// });

// nextButton.addEventListener("click", function () {
//   animateSlides(-1);
// });

// function updateDraggable() {
//   timer.restart(true);
//   slideAnimation.kill();
//   this.update();
// }

// function animateSlides(direction) {
//   timer.restart(true);
//   slideAnimation.kill();

//   var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

//   slideAnimation = gsap.to(proxy, {
//     x: x,
//     duration: slideDuration,
//     onUpdate: updateProgress,
//     opacity: 1,
//     ease: "power4.inOut",
//     rotation: "+=" + direction * 25,
//   });
// }

// function autoPlay() {
//   //   autoPlayCount++;
//   //   if (autoPlayCount < autoPlayLimit) {
//   //     animateSlides(-1);
//   //   }
// }

// function updateProgress() {
//   animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
// }

// function resize() {
//   var norm = gsap.getProperty(proxy, "x") / wrapWidth || 0;

//   slideWidth = slides[0].offsetWidth;
//   wrapWidth = slideWidth * numSlides;
//   snapX = gsap.utils.snap(slideWidth);

//   gsap.set(proxy, {
//     x: norm * wrapWidth,
//   });

//   animateSlides(0);
//   slideAnimation.progress(1);
// }

var slideDelay = 1.5;
var slideDuration = 1.2;
var snapX;

var slides = document.querySelectorAll(".slide");
var autoPlayLimit = slides.length * 2;
var autoPlayCount = 0;
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

// Initial opacity set to 0 for all h2 elements within slider-content
gsap.set(slides, { xPercent: (i) => i * 100 });
gsap.set(".slider-content h2", { opacity: 0 }); // New line

var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
var timer = gsap.delayedCall(slideDelay, autoPlay);

var animation = gsap.to(slides, {
  xPercent: "+=" + numSlides * 100,
  duration: 1,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap,
  },
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;
resize();

window.addEventListener("resize", resize);

prevButton.addEventListener("click", function () {
  animateSlides(1);
});

nextButton.addEventListener("click", function () {
  animateSlides(-1);
});

function updateDraggable() {
  timer.restart(true);
  slideAnimation.kill();
  this.update();
}

function animateSlides(direction) {
  timer.restart(true);
  slideAnimation.kill();

  var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    onUpdate: updateProgress,
    opacity: 1, // Animate opacity to 1 during slide transition
    ease: "power4.inOut",
    rotation: "+=" + direction * 25,
  });

  // Animate h2 opacity to 1 within the current slide (new lines)
  gsap.to(".slider-content h2", {
    duration: slideDuration / 2, // Adjust duration as needed
    ease: "power2.inOut",
    opacity: 1,
  });
}

function autoPlay() {
  // ... (unchanged)
}

function updateProgress() {
  animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function resize() {
  var norm = gsap.getProperty(proxy, "x") / wrapWidth || 0;

  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  snapX = gsap.utils.snap(slideWidth);

  gsap.set(proxy, {
    x: norm * wrapWidth,
  });

  animateSlides(0);
  slideAnimation.progress(1);
}
