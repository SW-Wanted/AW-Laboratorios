var corpo = document.getElementById('root');
var campo = document.getElementById('campo');
var janela = document.getElementById('janela')

function mudarCor(cor)
{
    corpo.classList.value = "root";
    corpo.classList.toggle(cor);
}

function mudaTamanho() {
    corpo.classList.toggle('small');
}

function mostrar() {
    janela.classList.value = "white show";
}

function ocultar() {
    janela.classList.value = "white hide";
}