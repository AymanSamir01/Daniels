//change background of header
let header = document.querySelector("nav");
window.onscroll = function () {
  if (window.scrollY >= header.offsetTop + 80) {
    header.classList.add("scroll");
  } else if (window.scrollY == header.offsetTop) {
    header.classList.remove("scroll");
  }
  //   show botton
  if (window.scrollY >= 300) {
    bt.style.display = "block";
  } else {
    bt.style.display = "none";
  }
};

//button scroll to top
let bt = document.querySelector(".scroll-to-top");
bt.onclick = function () {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};
