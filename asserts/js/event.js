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
};
