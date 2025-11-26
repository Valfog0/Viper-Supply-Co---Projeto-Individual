

CREATE DATABASE viper_db;
USE viper_db;

CREATE TABLE regioes (
    id_regiao INT AUTO_INCREMENT PRIMARY KEY,
    nome_regiao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO regioes (nome_regiao) VALUES
('Norte'),
('Nordeste'),
('Sul'),
('Sudeste'),
('Centro Oeste');


CREATE TABLE cargos (
    id_cargo INT AUTO_INCREMENT PRIMARY KEY,
    nome_cargo VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO cargos (nome_cargo) VALUES
('Polícia Militar'),
('Policial Civil'),
('GCM'),
('Agente Prisional'),
('Agente Federal'),
('Militar EB'),
('Militar MB'),
('Militar FA'),
('N/A');

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    id_cargo INT NOT NULL,
    id_regiao INT NOT NULL,
    FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo) ON DELETE RESTRICT,
    FOREIGN KEY (id_regiao) REFERENCES regioes(id_regiao) ON DELETE RESTRICT
);

CREATE TABLE topicos_interesse (
    id_topico INT AUTO_INCREMENT PRIMARY KEY,
    nome_topico VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO topicos_interesse (nome_topico) VALUES
('Equipamentos Operacionais'),
('CyberSec'),
('Instrução de Armamento e Tiro'),
('Balística');

-- N:N
CREATE TABLE usuario_topicos (
    id_usuario INT NOT NULL,
    id_topico INT NOT NULL,
    PRIMARY KEY (id_usuario, id_topico),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_topico) REFERENCES topicos_interesse(id_topico) ON DELETE RESTRICT
);

 INSERT INTO usuarios (nome, email, senha, id_cargo, id_regiao) VALUES
('Carlos Silva', 'carlos.silva@email.com', 'carlosSenha!*', 1, 2), -- PM, Nordeste
('Maria Souza', 'maria.souza@email.com', 'mariaSenha!*', 2, 4),   -- PC, Sudeste
('João Lima', 'joao.lima@email.com', 'joaoSenha!*', 5, 1);       -- AgFed, Norte

INSERT INTO usuarios_topicos (id_usuario, id_topico) VALUES
(1, 1); -- Equip 

INSERT INTO usuarios_topicos (id_usuario, id_topico) VALUES
(2, 2), -- Cyber
(2, 4); -- Bal

INSERT INTO usuarios_topicos (id_usuario, id_topico) VALUES
(3, 1), 
(3, 2), 
(3, 3); -- IAT

SELECT u.id_usuarios, u.nome, u.email, c.nome_cargo, r.nome_regiao
FROM usuarios u
JOIN cargos c ON u.id_cargo = c.id_cargo
JOIN regioes r ON u.id_regiao = r.id_regiao;

