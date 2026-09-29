let imagemAtual = 0;

const slides = document.querySelectorAll(".slide");

function mudarImagem(direcao) {

    slides[imagemAtual].classList.remove("ativo");

    imagemAtual += direcao;

    if (imagemAtual >= slides.length) {
        imagemAtual = 0;
    }

    if (imagemAtual < 0) {
        imagemAtual = slides.length - 1;
    }

    slides[imagemAtual].classList.add("ativo");
}