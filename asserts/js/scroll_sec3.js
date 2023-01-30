const shows = gsap.utils
  .toArray(".sec3 .content")
  .filter((content) => !content.classList.contains("more"));
const hiddens = gsap.utils
  .toArray(".sec3 .content")
  .filter((content) => content.classList.contains("more"));
const showMids = shows.filter((ele) => ele.classList.contains("mid"));
const showSides = shows.filter((ele) => !ele.classList.contains("mid"));
const hiddenMids = hiddens.filter((ele) => ele.classList.contains("mid"));
const hiddenSides = hiddens.filter((ele) => !ele.classList.contains("mid"));

let commonTrigger = {
  trigger: "",
  start: "top 90%",
  toggleActions: "play none none reverse",
};

pc.add("(min-width: 767px", () => {
  showSides.map((side) => {
    gsap.fromTo(
      side,
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { ...commonTrigger, trigger: side },
      }
    );
    gsap.to(side.children[1].firstElementChild, {
      y: "-100%",
      duration: 1,
      scrollTrigger: { ...commonTrigger, trigger: side },
    });
  });

  showMids.map((mid) => {
    gsap.fromTo(
      mid,
      {
        opacity: 0,
        y: 350,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { ...commonTrigger, trigger: mid },
      }
    );
    gsap.to(mid.children[1].firstElementChild, {
      y: "-100%",
      duration: 1,
      scrollTrigger: { ...commonTrigger, trigger: mid },
    });
  });

  btnMore.addEventListener("click", () => {
    btnMore.parentElement.style.display = "none";
    hiddenCreators.forEach((creator) => {
      creator.classList.remove("more");
    });
    hiddenSides.map((side) => {
      gsap.fromTo(
        side,
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { ...commonTrigger, trigger: side },
        }
      );
      gsap.to(side.children[1].firstElementChild, {
        y: "-100%",
        duration: 1,
        scrollTrigger: { ...commonTrigger, trigger: side },
      });
    });

    hiddenMids.map((mid) => {
      gsap.fromTo(
        mid,
        {
          opacity: 0,
          y: 350,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { ...commonTrigger, trigger: mid },
        }
      );
      gsap.to(mid.children[1].firstElementChild, {
        y: "-100%",
        duration: 1,
        scrollTrigger: { ...commonTrigger, trigger: mid },
      });
    });
  });
});

pc.add("(max-width: 767px", () => {
  shows.map((show) => {
    let showTL = gsap.timeline({
      scrollTrigger: {
        ...commonTrigger,
        trigger: show,
        start: "top 60%",
        markers: true,
      },
    });
    showTL
      .fromTo(
        show.children[1],
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 0.7,
        }
      )
      .to(show.children[1].firstElementChild, {
        y: "-100%",
        duration: 0.5,
      })
      .fromTo(
        show.children[1].children[1],
        {
          scale: 1.3,
        },
        { scale: 1, duration: 1 },
        "-=.5"
      )
      .fromTo(
        show.children[1].children[2],
        {
          scale: 1.3,
        },
        { scale: 1, duration: 1 },
        "-=1.5"
      );
  });
  btnMore.addEventListener("click", () => {
    btnMore.parentElement.style.display = "none";
    hiddenCreators.forEach((creator) => {
      creator.classList.remove("more");
    });
    hiddens.map((hidden) => {
      let hiddenTL = gsap.timeline({
        scrollTrigger: {
          ...commonTrigger,
          trigger: hidden,
          start: "top 60%",
          markers: true,
        },
      });
      hiddenTL
        .fromTo(
          hidden.children[1],
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            duration: 0.7,
          }
        )
        .to(hidden.children[1].firstElementChild, {
          y: "-100%",
          duration: 0.5,
        })
        .fromTo(
          hidden.children[1].children[1],
          {
            scale: 1.3,
          },
          { scale: 1, duration: 1 },
          "-=.5"
        )
        .fromTo(
          hidden.children[1].children[2],
          {
            scale: 1.3,
          },
          { scale: 1, duration: 1 },
          "-=1.5"
        );
    });
  });
});
