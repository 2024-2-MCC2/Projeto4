// controllers/AutenticarController.js
const bcrypt = require('bcryptjs');
const db = require('../config/db');

// Função para registrar um novo usuário
exports.register = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);

        await db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashedPassword]);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
    }
};

// Função de login sem geração de token
exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        const user = rows[0];
        
        if (!user) {
            return res.status(401).json({ auth: false, message: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ auth: false, message: 'Senha incorreta' });
        }

        // Se o login for bem-sucedido
        req.session.userId = user.id; // Armazena o ID do usuário na sessão
        res.json({ auth: true, message: 'Login realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ auth: false, message: 'Erro ao autenticar o usuário' });
    }
};

// Função de recuperação de senha
exports.forgotPassword = async (req, res) => {
    const { email, novaSenha } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(novaSenha, salt);

        const [result] = await db.query('UPDATE usuarios SET senha = ? WHERE email = ?', [hashedPassword, email]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a senha' });
    }
};
