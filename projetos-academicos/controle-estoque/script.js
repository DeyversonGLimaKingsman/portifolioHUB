document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-adicionar');
    const tabelaEstoque = document.getElementById('tabela-estoque').getElementsByTagName('tbody')[0];

    // Função para adicionar um produto à tabela
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomeProduto = document.getElementById('nome-produto').value;
        const quantidadeProduto = document.getElementById('quantidade-produto').value;
        const precoProduto = document.getElementById('preco-produto').value;

        if (nomeProduto && quantidadeProduto && precoProduto) {
            const novaLinha = tabelaEstoque.insertRow();
            novaLinha.innerHTML = `
                <td>${nomeProduto}</td>
                <td>${quantidadeProduto}</td>
                <td>R$ ${precoProduto}</td>
                <td><button class="adicionar">Adicionar</button></td>
                <td><button class="remover">Remover</button></td>
            `;

            // Limpar os campos após adicionar
            form.reset();

            // Função para adicionar estoque
            novaLinha.querySelector('.adicionar').addEventListener('click', () => {
                novaLinha.cells[1].textContent = parseInt(novaLinha.cells[1].textContent) + 1;
            });

            // Função para remover estoque
            novaLinha.querySelector('.remover').addEventListener('click', () => {
                if (parseInt(novaLinha.cells[1].textContent) > 0) {
                    novaLinha.cells[1].textContent = parseInt(novaLinha.cells[1].textContent) - 1;
                }
            });
        }
    });
});