const mysql = require('mysql2');
require('dotenv').config();

console.log('Tentando conectar ao banco de dados...');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Verifique se está correto no seu .env
    database: process.env.DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise(); // Adiciona suporte a Promises

// Testando a conexão
pool.getConnection()
    .then(connection => {
        console.log('Conexão ao banco de dados estabelecida com sucesso!');
        connection.release(); // Libera a conexão
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

module.exports = pool;
