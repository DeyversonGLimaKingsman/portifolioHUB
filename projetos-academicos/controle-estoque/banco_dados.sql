-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS controle_estoque;

-- Selecionando o banco de dados
USE controle_estoque;

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Inserindo dados iniciais (opcional)
INSERT INTO produtos (nome, quantidade, preco) VALUES ('Produto A', 100, 10.00);
INSERT INTO produtos (nome, quantidade, preco) VALUES ('Produto B', 200, 15.50);