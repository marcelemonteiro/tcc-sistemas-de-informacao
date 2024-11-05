CREATE TABLE tb_alunos (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    serie_ano VARCHAR(2) NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    endereco VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15)
);