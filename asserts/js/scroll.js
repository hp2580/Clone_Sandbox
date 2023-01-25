gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".sec2 .title",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.3,
    scrollTrigger: {
      trigger: ".sec2",
      markers: true,
      start: "top 40%",
      toggleActions: "play none none reverse",
    },
  }
);
