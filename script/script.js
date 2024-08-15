document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slider-image");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  setInterval(nextSlide, 5000);
});
