gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const video = document.querySelector("#video");
const videoDuration = 4;

gsap.to(video, {
  currentTime: 4,
  ease: "none",

  scrollTrigger: {
    trigger: ".video-section",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    markers: true
  }
});