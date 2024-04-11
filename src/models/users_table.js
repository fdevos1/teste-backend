// chave unicas
// ** id
// ** cpf
//
// chave obrigatorias
// * nome
// * data de nascimento
// * endereço rua
// * número
// - complemento
// * bairro
// * cidade
// * estado
// * cep
//
// chave não funcionais
// status de registro, data e hora de criação, usuário utilizado na criação do registro
// data e hora de atualização do registro, usuario utilizado na atualização do registro
// data e hora de remoção do registro, usuário utilizado na remoção do registro

export const create_user_table = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    complemento VARCHAR(255),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    status ENUM('Ativo', 'Removido') DEFAULT 'Ativo',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_criacao VARCHAR(255),
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    usuario_atualizacao VARCHAR(255),
    data_remocao TIMESTAMP,
    usuario_remocao VARCHAR(255))
    `;

export const create_admin = `INSERT INTO users (cpf, nome, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES ('123.456.789-10', 'admin', '2000-03-03', 'Rua', '123', 'Bairro', 'Cidade', 'RS', '12345-678')`;
