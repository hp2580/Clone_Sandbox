const subMenu = document.querySelector(".subMenu"),
  btnFamily = document.querySelector(".subMenu .btnFamily"),
  btnTop = document.querySelector(".goTop"),
  nav = document.querySelector("header"),
  btnLanguages = document.querySelectorAll(".lang a"),
  btnSub = document.querySelector(".btnSub"),
  titles = document.querySelectorAll(".title"),
  contentWrap = document.querySelector(".sec2 .contentWrap"),
  descriptions = document.querySelectorAll(".sec2 .desc"),
  creators = document.querySelectorAll(".sec3 .content"),
  descCreators = document.querySelector(".sec3 .descWrap"),
  hiddenCreators = document.querySelectorAll(".sec3 .content.more"),
  btnMore = document.querySelector(".sec3 .btnMore"),
  trailers = document.querySelectorAll(".sec4 .descWrap"),
  btnFamily_f = document.querySelector("footer .btnFamily");

btnFamily.addEventListener("click", () => {
  let optFamily = document.querySelector(".optFamily");
  btnFamily.classList.toggle("active");
  if (btnFamily.classList.contains("active")) optFamily.classList.add("active");
  else optFamily.classList.remove("active");
});

btnTop.addEventListener("click", (e) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 300);
});

btnLanguages.forEach((btnLanguage) => {
  btnLanguage.addEventListener("click", (e) => {
    e.preventDefault();
    for (let lang of btnLanguages) {
      lang.classList.toggle("active");
    }
  });
});

btnSub.addEventListener("click", () => {
  btnSub.classList.toggle("active");
  if (btnSub.classList.contains("active")) {
    document.body.classList.add("hidden");
    subMenu.classList.add("active");
  } else {
    document.body.classList.remove("hidden");
    subMenu.classList.remove("active");
  }
});

creators.forEach((creator) => {
  let desc = creator.firstElementChild;
  creator.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 767) {
      let cTop = e.pageY - creator.offsetTop - desc.offsetHeight / 2,
        cLeft = e.pageX - creator.offsetLeft - desc.offsetWidth / 2,
        minTop = -desc.offsetHeight / 2,
        maxTop = creator.offsetHeight - desc.offsetHeight / 2,
        minLeft = -desc.offsetWidth / 2,
        maxLeft = creator.offsetWidth - desc.offsetWidth / 2;
      cTop = cTop < minTop ? minTop : cTop;
      cTop = cTop > maxTop ? maxTop : cTop;
      cLeft = cLeft < minLeft ? minLeft : cLeft;
      cLeft = cLeft > maxLeft ? maxLeft : cLeft;
      desc.style.transform = `translate3d(${cLeft}px,${cTop}px,0)`;
    }
  });
});

btnMore.addEventListener("click", () => {
  btnMore.parentElement.style.display = "none";
  hiddenCreators.forEach((creator) => {
    creator.style.display = "flex";
  });
  media.add("(min-width: 768px)", () => {
    actHidden();
  });
  media.add("(max-width: 767px)", () => {
    actHidden2();
  });
});

trailers.forEach((trailer) => {
  trailer.addEventListener("mouseenter", () => {
    if (window.innerWidth > 767) {
      clearActive(document.querySelectorAll(".sec4 .content"));
      trailer.parentElement.classList.add("active");
    }
  });
  trailer.addEventListener("click", (e) => {
    let cont = trailer.parentElement;
    e.preventDefault();
    if (!cont.classList.contains("active")) {
      clearActive(document.querySelectorAll(".sec4 .content"));
      cont.classList.add("active");
    } else {
      clearActive(document.querySelectorAll(".sec4 .content"));
    }
  });
});

btnFamily_f.addEventListener("click", () => {
  btnFamily_f.classList.toggle("active");
});

function clearActive(objs) {
  objs.forEach((obj) => {
    obj.classList.remove("active");
  });
}
