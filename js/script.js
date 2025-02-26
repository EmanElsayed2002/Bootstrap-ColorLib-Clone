window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  if (scrollValue > 500) {
    this.document.querySelector("nav.navbar").classList.add("show");
  } else {
    this.document.querySelector("nav.navbar").classList.remove("show");
  }
});
