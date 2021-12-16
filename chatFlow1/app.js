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

// route to chat page

let callBtn = document.getElementById("call");
const chat = document.getElementById("chat");

callBtn.addEventListener("click", () => {
window.location.href = "../../chatFlow3/index.html"
})

