// querySelector() busca/seleciona um elemento pela classe ou id no HTML.
const botaoMostrarMais = document.querySelector('.btn_mostrar_projeto');

// querySelectorAll() busca/seleciona mais de um elemento pela classe ou id no HTML.
// Pega os elementos, no caso as Div, que tem apenas a classe .projeto
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Na função '() => {}' pode se ignorar o ()parenteses caso tenha apenas uma variavel ou argumento
botaoMostrarMais.addEventListener('click', () => {

    // Criando um laço com o método forEach() para cada projeto inativo
    // Precisa criar uma váriavel para usar dentro do laço forEach(), essa variavel vai sem ''aspas
    // Variavel criada é projetoInativo no singular, a cada interação o laço pega um projeto e faz algo
    projetosInativos.forEach(projetoInativo => {

        // classList se refere a lista de classes que o objeto tem
        // O método add() serve para adicionar uma nova classe na lista de classes do objeto
        // No método add() não precisa por '.'ponto para adicionar a classe, já que no HTML a classe não leva ponto
        projetoInativo.classList.add('ativo');
    }); // Como se tem 4 Div's conectadas a classe .projeto, o forEach vai ser executado 4 vezes

    botaoMostrarMais.classList.add('remover');
});