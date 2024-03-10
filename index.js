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
    "coding without fashion since '98",
    "i'm not superstitious i'm a little stitious",
    "fear is the mind-killer",
    "we are all in the gutter, but some of us are looking at the stars",
    "石の上にも三年",
    "c'est véritablement utile puisque c'est joli",
    "오늘 밤이 지나면 우리들은 어제와 다를 것이다",
  ],
  typeSpeed: 55,
  backSpeed: 35,
  loop: true,
  showCursor: true,
  shuffle: true,
});
