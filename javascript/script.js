let currentSlide = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  currentSlide = (currentSlide + direction + items.length) % items.length;

  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}