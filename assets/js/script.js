"use strict";

const preloader = document.querySelector(".preload");

const charData = {
  ichigo: {
    name: "Ichigo Kurosaki",
    desc: "A high school student who can see ghosts. Lost his mother as a child to an attack by Hollows. Acquires Soul Reaper powers through an encounter with Rukia Kuchiki and becomes a Substitute Soul Reaper. Through the turmoil that embroiled the World of the Living, the Soul Society, and Hueco Mundo, he gains the trust of the other Soul Reapers and lives up to his position.",
    color: "#e07116",
  },
  orihime: {
    name: "Orihime Inoue",
    desc: "Ichigo's classmate. Possesses a cheerful personality and carefree smile. Often makes zany off-topic remarks, but is always thinking of Ichigo and her friends. Awakens to her spiritual powers after Ichigo rescues her after the Hollowfication of her older brother.",
    color: "#d83853",
  },
  uryu: {
    name: "Uryu Ishida",
    desc: "Ichigo's classmate. One of the last remaining descendants of the Quincies. Looks up to his late grandfather, Soken as his master. Does not get along with his father, Ryuken, who is adverse to the Quincies. Once despised Ichigo and fought him as an enemy, but later became comrades-in-arms after fighting a battle together.",
    color: "#3654da",
  },
  chad: {
    name: "Yasutora Sado",
    desc: "Ichigo’s good friend since middle school. He is one-quarter Mexican. His friends call him “Chad.” As a child, he often resorted to violence until his grandfather set him straight. Since then, he has refrained from using his strength for selfish reasons. Accompanies Ichigo with the promise he made to him.",
    color: "#1fd647",
  },
};

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList("loaded");
  setTimeout(() => {
    preloader.remove();
  }, 1800);
});

const charImages = document.querySelectorAll(".char");
const closeBtn = document.querySelector(".closeBtn");
const CharDetails = document.querySelector(".char-details");
const CharName = document.querySelector(".char-name span");
const CharDesc = document.getElementsByClassName("char-desc")[0];
const CharImage = document.getElementsByClassName("char-image")[0];
const BarEffect = document.querySelector(".char-details > .bar-effect");

closeBtn.addEventListener("click", () => {
  CharDetails.classList.add("close");
  const newUrl = window.location.href.split("?")[0];
  window.history.pushState({ path: newUrl }, "", newUrl);
  setTimeout(() => {
    CharDetails.style.display = "none";
  }, 500);
});

charImages.forEach((img) => {
  img.addEventListener("click", imageClickHandler);
});

function imageClickHandler(e) {
  const oldUrl = window.location.href.split("?")[0];
  const newUrl = `${oldUrl}?char=${e.target.dataset.char}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
  showDetails(e.target.dataset.char);
}

function showDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const char = urlParams.get("char");
  CharName.innerText = charData[char].name;
  CharDesc.innerText = charData[char].desc;
  console.log(`${char}.png`);
  CharImage.innerHTML = `<img src="/assets/images/${char}-1.png" alt="char image">`;
  BarEffect.style.background = charData[char].color;
  CharDetails.style.display = "flex";
  setTimeout(() => {
    CharDetails.classList.remove("close");
  }, 500);
}
