function swapToAboutPage() {}
let btn = document.getElementById("about-me-btn");
btn.addEventListener("click", () => {
  document.getElementById("home").classList.remove("fade-in");
  document.getElementById("home").classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("home").classList.add("d-none");

    document.getElementById("about-me").classList.remove("d-none");
    document.getElementById("about-me").classList.remove("fade-out");
    document.getElementById("about-me").classList.add("fade-in");
  }, 1000);
});

btn = document.querySelector("nav>a");
btn.addEventListener("click", () => {
  document.getElementById("about-me").classList.remove("fade-in");
  document.getElementById("about-me").classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("about-me").classList.add("d-none");
    document.getElementById("home").classList.remove("fade-out");
    document.getElementById("home").classList.remove("d-none");
    document.getElementById("home").classList.add("fade-in");
  }, 1000);
});

hobbiesClicked = {
  hobby0: false,
  hobby1: false,
  hobby2: false,
  hobby3: false,
};

let hobbyCards = document.getElementsByClassName("hobby-card");

let bobaCard = hobbyCards[0];

bobaCard.addEventListener("mouseenter", () => {
  if (!hobbiesClicked["hobby0"]) {
    bobaCard.style.cursor = "pointer";
    bobaCard.style.backgroundColor = "#151719";
  }
});
bobaCard.addEventListener("mouseleave", () => {
  if (!hobbiesClicked["hobby0"]) {
    bobaCard.style.cursor = "default";
    bobaCard.style.backgroundColor = "#343a3f";
  }
});

bobaCard.addEventListener("click", () => {
  if (!hobbiesClicked[`hobby0`]) {
    hobbiesClicked[`hobby0`] = true;
    bobaCard.style.cursor = "default";

    let bobaImgs = document.getElementsByClassName("boba-img");
    let time = 0;
    for (let i = 0; i < bobaImgs.length; i++) {
      time += 2;
      bobaImgs[i].style.animationName = "fade-in";
      bobaImgs[i].style.animationFillMode = "forwards";
      bobaImgs[i].style.animationDuration = `${time}s`;
      bobaImgs[i].style.animationDelay = `${time - 2}s`;
    }

    let cont = document.getElementById("boba-img-container");
    cont.style.animationName = "darken";
    cont.style.animationFillMode = "forwards";
    cont.style.animationDuration = "2s";
    cont.style.animationDelay = "8s";

    let clickMe = document.getElementById("boba-click-me");
    clickMe.classList.add("fade-out");
    setTimeout(() => {
      clickMe.classList.add("d-none");
      document.querySelector("#boba-click-me>div").classList.add("d-none");
      document.querySelector("#boba-click-me>img").classList.add("d-none");
    }, 1000);
    setTimeout(() => {
      let title = document.getElementById("boba-title");
      let text = document.getElementById("boba-text");
      text.classList.remove("d-none");
      title.classList.remove("d-none");
      text.style.animationName = "fade-in";
      text.style.animationFillMode = "forwards";
      text.style.animationDuration = "2s";
      title.style.animationName = "fade-in";
      title.style.animationFillMode = "forwards";
      title.style.animationDuration = "2s";
    }, 10000);
  }
});
