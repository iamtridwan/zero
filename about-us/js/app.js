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

// manual image slide

let next = document.getElementById("next");

next.addEventListener("click", () => {
  window.location.href = "../gallery/gallery.html";
});



let date = new Date();
year.textContent = date.getFullYear();

//animations
let elements = document.querySelectorAll(".hidden");
let windowHeight = window.innerHeight;

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    element = elements[i];
    let topPos = element.getBoundingClientRect().top;
    if (topPos - windowHeight <= 0) {
      element.classList.add("animate");
      element.classList.remove("hidden");
    } else {
      element.classList.remove("animate");
      element.classList.add("hidden");
    }
  }
}
window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", checkPosition);

//topbar scroll
// const navBar = document.getElementsByTagName("nav");
// navBar[0].style.maxWidth = "1440px";
// window.addEventListener("scroll", () => {
//   if (window.scrollY === 0) {
//     navBar[0].style.backgroundColor = "";
//   } else {
//     navBar[0].style.backgroundColor = "#fff";
//     navBar[0].style.width = "unset";
//   }
// });

// switching to flow1 page
const buttons = document.querySelectorAll("header button");
const footerBtn = document.querySelector(".connect button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "../chatFlow1/index.html";
  });
});

footerBtn.addEventListener("click", () => {
  window.location.href = "../chatFlow1/index.html";
});
// switching users

// const user = document.querySelector('.users')
const avatars = document.querySelectorAll(".avatar");
let mainComment = document.querySelector(".main-comment h2");
const comments = [
  "I came to the platform with a heavy heart, but the councellors are \
    caring and loving, i dismissed my suicide though at once, Thank you \
    ZeroDepression Team",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
  Voluptates sequi eius reprehenderit similique \
  exercitationem error dolor fugit voluptatum deleniti ex.",

  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse facilis quidem similique alias molestias aperiam.",
];

avatars.forEach((avatar) => {
  avatar.addEventListener("click", (e) => {
    avatars.forEach((avatar) => {
      avatar.classList.remove("active-user");
    });
    e.currentTarget.classList.add("active-user");
    let id = parseInt(e.currentTarget.getAttribute("data-user"));

    mainComment.textContent = comments[id];
  });
});

// auto switch comments

function switchComments() {
  let count = 0;
  setInterval(() => {
    if (count > 2) {
      count = 0;
    }
    avatars.forEach((avatar, index) => {
      avatar.classList.remove("active-user");
      if (count === index) {
        avatar.classList.add("active-user");
        mainComment.textContent = comments[index];
      }
    }),
      count++;
  }, 2500);
}

window.addEventListener("DOMContentLoaded", () => {
  switchComments();
});
