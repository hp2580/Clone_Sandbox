const mids = gsap.utils.toArray(".sec3 .mid");
const sides = gsap.utils
  .toArray(".sec3 .content")
  .filter((ele) => !ele.classList.contains("mid"));
const tlArray_sides = new Array(sides.length);
const tlArray_mids = new Array(mids.length);

for (let i = 0; i < tlArray_sides.length; i++) {
  tlArray_sides[i] = gsap.timeline();
}

for (let i = 0; i < tlArray_mids.length; i++) {
  tlArray_mids[i] = gsap.timeline();
}

sides.map((side, idx) => {
  tlArray_sides[idx].fromTo(
    side,
    {
      opacity: 0,
      y: 300,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: side,
        start: "top 70%",
        markers: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});

mids.map((mid, idx) => {
  tlArray_mids[idx].fromTo(
    mid,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: mid,
        start: "top 60%",
        markers: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});
