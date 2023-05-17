"use strict";

const downloadButton = document.querySelector(".cv_btn");
const githubButton = document.querySelector(".github_logo_div");
const linkidenButton = document.querySelector(".linkiden_logo_div");
const twitterButton = document.querySelector(".twitter_logo_div");
const tiktokButton = document.querySelector(".tiktok_logo_div");
const logoHomeButton = document.querySelector(".logo_text");

const aboutLink = document.querySelector('a[href="#About"]');
const aboutSection = document.getElementById("About");

downloadButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1AVGuZo7hbVzwBhdrDxKqlz_IFyFgN0TY/view?usp=share_link";
  link.download = "your-cv.pdf";
  link.click();
});

//

githubButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://github.com/techbywes";
  link.click();
});

linkidenButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://www.linkedin.com/in/ebukawisdomsamuel/";
  link.click();
});

twitterButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://twitter.com/techbywes";
  link.click();
});
tiktokButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://www.tiktok.com/@techbywes";
  link.click();
});
logoHomeButton.addEventListener("click", function () {
  location.reload();
});

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// SCROLL UP HELPER FOR USERS UP NAV SPEED STARTS HERE
window.onscroll = function () {
  toggleScrollUpButton();
};

function toggleScrollUpButton() {
  const scrollUpButton = document.getElementById("scrollUpButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// SCROLL UP HELPER FOR USERS UP NAV SPEED ENDS HERE
