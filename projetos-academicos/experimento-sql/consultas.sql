-- consultas.sql
USE SistemaUsuarios;

-- 1. Consultar todos os usuários
SELECT * FROM Usuarios;

-- 2. Consultar um usuário específico pelo email
SELECT * FROM Usuarios WHERE email = 'maria.oliveira@email.com';

-- 3. Consultar todos os produtos em estoque (quantidade maior que 0)
SELECT * FROM Produtos WHERE quantidade_estoque > 0;

-- 4. Consultar os produtos com preço acima de 25.00
SELECT * FROM Produtos WHERE preco > 25.00;

-- 5. Atualizar a quantidade em estoque de um produto
UPDATE Produtos SET quantidade_estoque = quantidade_estoque - 1 WHERE id = 1;

-- 6. Deletar um produto pelo id
DELETE FROM Produtos WHERE id = 3;