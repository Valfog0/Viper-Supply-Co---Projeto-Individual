// Exemplo de código de conexão (que deve estar em seu config.js)
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // <--- VERIFIQUE SE ESTA LINHA EXISTE!
    database: process.env.DB_DATABASE
});