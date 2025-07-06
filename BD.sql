CREATE DATABASE inventario;

\c inventario;

CREATE TABLE IF NOT EXISTS computador (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    processador VARCHAR(100),
    sistema_operacional VARCHAR(100),
    ram INTEGER,
    data_cadastro DATE
);
