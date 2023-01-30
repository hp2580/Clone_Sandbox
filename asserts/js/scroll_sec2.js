gsap.registerPlugin(ScrollTrigger);
const media = gsap.matchMedia();

const contents = gsap.utils.toArray(".sec2 .content");
let scrollTween;
let sTrigger, sTrigger3, sTrigger4, sTrigger5, sTrigger6;

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cont1",
    start: "top 50%",
    toggleActions: "play none none reverse",
  },
});
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cont1",
    start: "top 50%",
    toggleActions: "play none none reverse",
  },
});
let tl3, tl4, tl5, tl6;

media.add("(min-width: 767px", () => {
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

  scrollTween = gsap.to(contents, {
    x: -974 * (contents.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".sec2 .contentWrap",
      scrub: 1,
      pin: true,
      end: () => `+=${(contents.length + 1) * 974}px`,
    },
  });

  sTrigger = {
    trigger: "",
    start: "left 70%",
    end: "left 90%",
    containerAnimation: scrollTween,
    toggleActions: "play none none reverse",
  };

  sTrigger3 = { ...sTrigger };
  sTrigger4 = { ...sTrigger };
  sTrigger5 = { ...sTrigger };
  sTrigger6 = { ...sTrigger };

  sTrigger3.trigger = ".cont3";
  sTrigger4.trigger = ".cont4";
  sTrigger5.trigger = ".cont5";
  sTrigger6.trigger = ".cont6";

  tl3 = gsap.timeline({
    scrollTrigger: sTrigger3,
  });

  tl4 = gsap.timeline({
    scrollTrigger: sTrigger4,
  });

  tl5 = gsap.timeline({
    scrollTrigger: sTrigger5,
  });

  tl6 = gsap.timeline({
    scrollTrigger: sTrigger6,
  });

  tl1
    .fromTo(
      ".cont1 .imgWrap",
      { y: 300 },
      {
        y: 0,
        duration: 0.6,
      }
    )
    .to(".cont1 .bg", {
      y: "-110%",
      duration: 0.5,
    })
    .fromTo(
      ".cont1 img",
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 1,
      },
      "-=.6"
    );

  tl2
    .fromTo(
      ".cont2 .imgWrap",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
      }
    )
    .to(".cont2 .bg", {
      y: "110%",
      duration: 0.5,
    })
    .fromTo(
      ".cont2 img",
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 1,
      },
      "-=.6"
    );

  tl3
    .fromTo(
      ".cont3 .bg",
      {
        left: "-100%",
      },
      {
        left: "100%",
        duration: 1.5,
      }
    )
    .fromTo(
      ".cont3 img",
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=1.3"
    );

  tl4
    .fromTo(
      ".cont4 .bg",
      {
        top: "100%",
      },
      {
        top: "-100%",
        duration: 1.5,
      }
    )
    .fromTo(
      ".cont4 img",
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=1"
    );

  tl5
    .fromTo(
      ".cont5 .bg",
      {
        top: "100%",
      },
      {
        top: "-100%",
        duration: 1.5,
      }
    )
    .fromTo(
      ".cont5 img",
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=1"
    );

  tl6
    .fromTo(
      ".cont6 .bg",
      {
        left: "-100%",
      },
      {
        left: "100%",
        duration: 1.5,
      }
    )
    .fromTo(
      ".cont6 img",
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=1"
    );
});
