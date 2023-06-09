"use strict";

const downloadButton = document.querySelector(".cv_btn");
const githubButton = document.querySelector(".github_logo_div");
const linkidenButton = document.querySelector(".linkiden_logo_div");
const twitterButton = document.querySelector(".twitter_logo_div");
const tiktokButton = document.querySelector(".tiktok_logo_div");
const logoHomeButton = document.querySelector(".logo_text");

const aboutLink = document.querySelector('a[href="#About"]');
const OpenMenu = document.getElementById("menu_open");
const CloseMenu = document.getElementById("menu_close");
const Mobile_Menu = document.querySelector(".menu_ul");

const aboutSection = document.querySelector(".section_container");
const ServicesSection = document.querySelector(".ourServices_wrapper");
const PortfolioSection = document.querySelector(".latestproject_div");
const ContactSection = document.querySelector(".form_section_div");
const menu_items1 = document.getElementById("close_up1");
const menu_items2 = document.getElementById("close_up2");
const menu_items3 = document.getElementById("close_up3");
const menu_items4 = document.getElementById("close_up4");
const menu_items5 = document.getElementById("close_up5");
// const animate = document.querySelector(".animatemenu");

Mobile_Menu.classList.add("hidden");
CloseMenu.classList.add("hidden");

let isOpen = false;

menu_items1.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    Mobile_Menu.classList.add("hidden");
  }
});
menu_items2.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    Mobile_Menu.classList.add("hidden");
  }
});

menu_items3.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    Mobile_Menu.classList.add("hidden");
  }
});

menu_items4.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    Mobile_Menu.classList.add("hidden");
  }
});

menu_items5.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    Mobile_Menu.classList.add("hidden");
  }
});

OpenMenu.addEventListener("click", () => {
  if (!isOpen) {
    CloseMenu.classList.remove("hidden");
    Mobile_Menu.classList.remove("hidden");
    OpenMenu.classList.add("hidden");
  }
});

CloseMenu.addEventListener("click", () => {
  Mobile_Menu.classList.add("hidden");
  CloseMenu.classList.add("hidden");
  OpenMenu.classList.remove("hidden");
});

// closes menu when users click outside the meu starts here
document.addEventListener("mousedown", event => {
  const target = event.target;
  const isMenuClicked = target.closest(".menu_ul");

  if (!isMenuClicked) {
    Mobile_Menu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    CloseMenu.classList.add("hidden");
  }
});
// closes menu when users click outside the meu ends here

// MENU ANIMATE STARTS HERE
function toggleMenu() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("open");
}
// MENU ANIMATE ENDS HERE

// CV BTN DOWN STARTS FROM HERE
// downloadButton.addEventListener("click", function () {
//   const link = document.createElement("a");
//   link.href =
//     "https://drive.google.com/file/d/1-0_65jtJc4cjoxEu1BNcz0_G1s89bDtY/view?usp=drivesdk";
//   link.download = "your-cv.pdf";
//   link.click();
// });
// CV BTN DOWN ENDS FROM HERE

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

// TEXT ANIMATION STARTS HERE
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  "I'm a frontend developer",
  "With a passion for",
  "Creating seamless UX",
  "Committed to delivering",
  "High-quality code",
  "Got an idea?",
  "Lets make it happen!",
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();
// TEXT ANIMATION ENDS HERE

// INTERSECTION OBSERVER STARTS FROM  HERE

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showanimation");
    } else {
      entry.target.classList.remove("showanimation");
    }
  });
});

const hideAnimation = document.querySelectorAll(".hideanimation");
hideAnimation.forEach(el => observer.observe(el));
// INTERSECTION OBSERVER ENDS FROM  HERE
