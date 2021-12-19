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

let cards = document.querySelectorAll(".card");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// work on setting the left arrow.
let left = 0;
next.onclick = () => {
  left++;
  // if (left > 0 && left === 2) {
  //   next.onclick = "null";
  //   next.style.backgroundImage = "url(./assets/backSwitch.png)";
  //   next.style.transform = "rotate(-180deg)";
  // }
  cards.forEach((card) => {
    if (left === 0) {
      card.style.left = "-0px";
    }
    if (left === 1) {
      card.style.left = "-300px";
    }
    if (left === 2) {
      card.style.left = "-620px";
    }
    if (left === 3) {
      card.style.left = "-0px";
    }
    if (left > 2) {
      left = 0;
    }
  });
};

// work to do here.
prev.onclick = () => {
  left--;
  // if (left > 0) {
  //   //  prev.onclick = "null";
  //   prev.style.backgroundImage = "url(./assets/forwardSwitch.png)";
  //   prev.style.transform = "rotate(-180deg)";
  // }
  cards.forEach((card) => {
    if (left === 0) {
      card.style.left = "-0px";
    }
    if (left === 1) {
      card.style.left = "-300px";
    }
    if (left === 2) {
      card.style.left = "-620px";
    }
    if (left === 3) {
      card.style.left = "0px";
    }
    if (left < 0) {
      left = 0;
    }
  });
};

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

// setting date dynmically for footer
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
    let id = parseInt(e.currentTarget.getAttribute("data-user"))

      mainComment.textContent = comments[id]
    
  });
});

// send

const send = document.getElementById("send")
send.addEventListener("click", ()=> {
  window.location.href = "../contact-us/index.html";
})


// animate logos
const logos = document.querySelector(".supporters-logo");
let nums = 0

// setInterval(()=> {
// nums++
// console.log(nums)
// // if(nums % 5){
// //  logos.style.left = "300px"
// // }
// // else{
// //   logos.style.left = "0"
// // }

// }, 1000)
