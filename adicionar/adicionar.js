let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const container = document.querySelector(".carousel-container");
const slideButtons = document.querySelectorAll(".slide-button");
const continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    // Volta para a página inicial quando o último slide for concluído.
    window.location.href = "../estoque.html";
  }
});

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  container.style.transform = `translateX(${offset}px)`;
}

// Atualiza os botões de slide quando o usuário navegar pelos slides.
slides.forEach((slide, index) => {
  slide.addEventListener("input", () => {
    slideButtons[index].classList.add("active");
  });
});

