// Generate random stars
for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.width = `${Math.random() * 2}px`;
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  document.getElementById("stars").appendChild(star);
}

// Animate stars using GSAP
gsap.to(".star", {
  opacity: 0.5,
  duration: 1,
  repeat: -1,
  yoyo: true,
  stagger: {
    amount: 1,
    from: "random",
  },
  ease: "power1.inOut",
});

var typed = new Typed("#typed-phrases", {
  strings: [
    "i'm not superstitious i'm a little stitious",
    "fear is the mind-killer",
    "we are all in the gutter, but some of us are looking at the stars",
    "石の上にも三年",
    "c'est véritablement utile puisque c'est joli",
    "오늘 밤이 지나면 우리들은 어제와 다를 것이다",
    "한국을 떠나지 않았다면? \n 않고 우리가 같히 자랐더라도 나 널 찾았을까 ? ",
  ],
  typeSpeed: 55,
  backSpeed: 35,
  loop: true,
  showCursor: true,
  shuffle: true,
});

function scrollUp() {
  (function scroll() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -10);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset < 0) {
      window.scrollTo(0, 0);
    }
  })();
}

function scrollDown() {
  const windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 3, // Number of thumbnails visible at once
    focusAt: "center",
    gap: 40,
  }).mount();

  // Init current page state
  let currentPage = 1;
  function toggleStarButton() {
    if (currentPage === 1) {
      starButtonTop.classList.add("hidden");
      starButtonBottom.classList.remove("hidden");
      scrollDown();
      currentPage = 2;
    } else {
      starButtonTop.classList.remove("hidden");
      starButtonBottom.classList.add("hidden");
      scrollUp();
      currentPage = 1;
    }
  }

  // Toggle actions of the star button
  // When clicked, the star button will toggle between either scrolling the viewport
  // to the top or the bottom and follow the position depending on the current page state
  const starButtonTop = document.querySelector("#first-star");
  const starButtonBottom = document.querySelector("#second-star");
  starButtonTop.addEventListener("click", toggleStarButton);
  starButtonBottom.addEventListener("click", toggleStarButton);
});
