const CloseBtn = document.getElementById("closeBtn");
const sideNav = document.getElementById("sideMenu");
const hamburger = document.querySelector(".hamburger");
const year = document.getElementById("year");
// toggling  mobile nav.
hamburger.addEventListener("click", () => {
  sideNav.style.width = "100%";
});

CloseBtn.addEventListener("click", () => {
  sideNav.style.width = "0px";
});

// route to flow1

// let buttons = document.querySelectorAll("button");

// buttons.forEach((btn) =>
//   btn.addEventListener("click", () => {
//     window.location.href = "../chatFlow1/index.html";
//   })
// );

// clicking love img

const loveImg = document.querySelector(".like-img");
const countOfLove = document.querySelector(".like p span");
let loveCount = 0;
loveImg.addEventListener("click", () => {
  loveCount += 1;
  countOfLove.textContent = loveCount;
});

// clicking comment

const commentImg = document.querySelector(".comment_img");
const commentCount = document.querySelector(".comment p span");
const form = document.querySelector("form");
const submit = document.querySelector("input");
const textArea = document.querySelector("textarea");

commentImg.addEventListener("click", () => {
  form.style.display = "block";
});
let comment_count = 0;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  if (textArea.value.trim() !== "") {
    comment_count += 1;
    textArea.value = "";
  }

  commentCount.textContent = comment_count;
});
