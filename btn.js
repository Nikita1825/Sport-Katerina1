const loadmorebtn = document.querySelector(".btn-train");
const list = document.querySelector(".train-video");
const train = document.querySelector(".training");
const link = document.querySelector(".link-navl ");
const linkl = document.querySelector(".link-navi ");
const linki = document.querySelector(".link-navn ");
const linkn = document.querySelector(".link-navk ");
const linkk = document.querySelector(".link-navn ");
const linka = document.querySelector(".link-nava ");
const nav = document.querySelector(".nav");
const burger =document.querySelector(".burger")
let currentItems = 3;

loadmorebtn.addEventListener("click", (e) => {
  e.preventDefault();
  train.style.height = "2843px";
  const Elements = [...document.querySelectorAll(".train-video li")];
  for (let i = currentItems; i < currentItems + 7; i++) {
    if (Elements[i]) {
      Elements[i].style.display = "block";
    }

    if (Elements.lastIndexOf) {
      loadmorebtn.style.display = "none";
    }
  }
  currentItems += 7;
});


link.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open")
});
linkl.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open");
});
linki.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open");
});
linkn.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open");
});
linkk.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open");
});
linka.addEventListener("click", (e) => {
    burger.classList.toggle("active");
  nav.classList.remove("open");
});
