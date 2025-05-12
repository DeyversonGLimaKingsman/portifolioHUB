-- inserir_dados.sql
USE SistemaUsuarios;

-- Inserindo dados na tabela de usuários
INSERT INTO Usuarios (nome, email, senha) 
VALUES
    ('João Silva', 'joao.silva@email.com', 'senha123'),
    ('Maria Oliveira', 'maria.oliveira@email.com', 'senha456'),
    ('Carlos Souza', 'carlos.souza@email.com', 'senha789');

-- Inserindo dados na tabela de produtos
INSERT INTO Produtos (nome, descricao, preco, quantidade_estoque) 
VALUES
    ('Produto A', 'Descrição do Produto A', 29.99, 100),
    ('Produto B', 'Descrição do Produto B', 19.99, 150),
    ('Produto C', 'Descrição do Produto C', 39.99, 200);