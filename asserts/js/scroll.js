gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray(".sec2 .content");

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec2 .contentWrap",
//     markers: true,
//     start: "top 50%",
//     marker: true,
//     pin: true,
//     end: () => `+=${document.querySelector(".contentWrap").offsetWidth}`,
//   },
// });

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
      start: "top 40%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sec2 .contentWrap",
    markers: true,
    pin: true,
    end: () => `+=${document.querySelector(".sec2 .contentWrap").offsetWidth}`,
  },
});
