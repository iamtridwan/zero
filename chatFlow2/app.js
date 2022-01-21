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

// switching to flow1 page
const buttons = document.querySelectorAll("header button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "../chatFlow1/index.html";
  });
});

// routing
const back = document.getElementById("back");
back.addEventListener("click", () => {
  window.location.href = "../chatFlow1/index.html";
});

// end chat

const endChat = document.getElementById("end-chat");
const popUp = document.querySelector(".chatpopup");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

endChat.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  popUp.style.display = "flex";
  //   console.log(window.innerHeight);
  //   popUp.style.height = `${window.innerHeight}px`;
});

popUp.addEventListener("click", (e) => {
  let current = e.target;
  let attr = current.getAttribute("id");
  if (attr === "yes") {
    // implement feedback feature
    popUp.style.display = "none";
  } else {
    popUp.style.display = "none";
  }
});
