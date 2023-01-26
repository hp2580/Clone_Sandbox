let prevY;
let contWidth = 0;

window.onload = () => {
  prevY = window.scrollY;
  document.querySelector(".sec1").classList.add("active");
};

window.onscroll = () => {
  let top = window.scrollY;
  let direction = prevY - top;
  prevY = top;
  /**
   * Scroll event for goTop
   */
  if (top >= 100) btnTop.classList.add("active");
  else btnTop.classList.remove("active");
  /**
   * Scroll event for header
   */
  if (direction < 0) {
    if (top >= 200) {
      nav.classList.add("hide");
      if (top > 200) nav.classList.add("black");
    }
  } else {
    nav.classList.remove("hide");
    if (top <= 200) nav.classList.remove("black");
  }

  /**
   * Scroll event for sec2 title, descriptions
   */
  if (contentTitle.getBoundingClientRect().top < window.innerHeight * 0.7) {
    if (!contentTitle.classList.contains("active"))
      contentTitle.classList.add("active");
  } else {
    if (contentTitle.classList.contains("active"))
      contentTitle.classList.remove("active");
  }
  descriptions.forEach((desc) => {
    let top = desc.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      if (!desc.classList.contains("active")) desc.classList.add("active");
    }
    if (top > window.innerHeight * 0.7) {
      if (desc.classList.contains("active")) desc.classList.remove("active");
    }
  });
};
