CREATE TABLE usuarios(
    email VARCHAR(100),
    senha VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(100) NOT NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (email)
);

CREATE TABLE comercios(
    email VARCHAR(100),
    telefone VARCHAR(14) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    complemento VARCHAR(100) NOT NULL,
    CONSTRAINT comercio_pk PRIMARY KEY (email),
    CONSTRAINT comercio_fk FOREIGN KEY (email) REFERENCES usuarios(email)
);

CREATE TABLE publicacoes(
    publicacao_id INTEGER,
    texto VARCHAR(255),
    data DATE NOT NULL,
    CONSTRAINT publicacao_pk PRIMARY KEY (publicacao_id)
);

CREATE TABLE produtos(
    comercio VARCHAR(100),
    nome_produto VARCHAR(100) NOT NULL,
    preco FLOAT NOT NULL,
    foto VARCHAR(255) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    CONSTRAINT produto_pk PRIMARY KEY (comercio, nome_produto),
    CONSTRAINT produto_fk FOREIGN KEY (comercio) REFERENCES comercio(email),
    CONSTRAINT preco_positivo CHECK(preco>=0)
);

CREATE TABLE doacoes(
    doacao_id INTEGER,
    descricao VARCHAR(300),
    valor FLOAT,
    CONSTRAINT doacao_pk PRIMARY KEY (doacao_pk)
)
