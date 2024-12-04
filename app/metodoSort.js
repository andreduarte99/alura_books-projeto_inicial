let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    livrosOrdenados = livrosComDesconto.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}