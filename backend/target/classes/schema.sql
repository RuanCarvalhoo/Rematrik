CREATE TABLE cursos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_curso VARCHAR(255) NOT NULL,
    codigo_curso VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE componentes_curriculares (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    periodo INT NOT NULL,
    codigo_componente VARCHAR(20),
    nome_componente VARCHAR(255) NOT NULL,
    curso_id BIGINT,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE alunos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    ano_semestre VARCHAR(20),
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE
);