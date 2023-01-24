const subMenu = document.querySelector(".subMenu");
const btnFamily = document.querySelector(".btnFamily");
const btnLanguages = document.querySelectorAll(".lang a");
const btnSub = document.querySelector(".btnSub");

btnFamily.addEventListener("click", () => {
  let optFamily = document.querySelector(".optFamily");
  btnFamily.classList.toggle("active");
  if (btnFamily.classList.contains("active")) optFamily.classList.add("active");
  else optFamily.classList.remove("active");
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
