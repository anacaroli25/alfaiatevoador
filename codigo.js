

/*testando o carrossel JS*/ 

// SELEÇÃO DOS ELEMENTOS
const container = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// FUNÇÃO PARA ATUALIZAR O CARROSSEL
function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

// BOTÃO PRÓXIMO
nextBtn.addEventListener("click", () => {
    index++;

    if (index >= slides.length) {
        index = 0; // volta pro início
    }

    updateCarousel();
});

// BOTÃO ANTERIOR
prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = slides.length - 1; // vai pro último
    }

    updateCarousel();
});

/*testando radio-play*/
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

let tocando = false;

playBtn.addEventListener("click", function () {

    if (!tocando) {
        audio.play();
        playBtn.textContent = "⏸️ Pausa";
        tocando = true;
    } else {
        audio.pause();
        playBtn.textContent = "▶️ Play";
        tocando = false;
    }
})


