const botaoMostrarMais = document.querySelector('.btn_mostrar_projeto');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarMais.addEventListener('click', () => {

    // Objetivo 3 - adicionar a classe CSS 'ativo' nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - adicionar a classe CSS 'remover' para esconder o botao Mostrar mais
    // passo 1 - pegar o botao e esconder ele apos clicar
    botaoEsconder();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function botaoEsconder() {
    botaoMostrarMais.classList.add('remover');
}