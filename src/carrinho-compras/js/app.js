let totalCarrinho = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    let preco = valorProduto * quantidade;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                            <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
                        </section>`
    document.getElementById('quantidade').value = 0;
    totalCarrinho = totalCarrinho + preco;

    valorTotal.textContent = totalCarrinho;
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}