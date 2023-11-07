const loadmorebtn = document.querySelector(".btn-train");
const list = document.querySelector(".train-video");
const train = document.querySelector(".training");
const link = document.querySelector(".link-nav");
const nav = document.querySelector(".nav");
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
  nav.style.display = "none";
});
