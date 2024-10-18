const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const user = require('../AULA12/Auth-api/models/user');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let users = []; // armazena na memória(use em banco de dados)

//rota para registro de usuarios
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // verifica se o usuario ja existe
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'Username já existe' });
}

// hash da senha
const hashedPassword = await bcrypt.hash(password, 10);
user.push({ username, password: hashedPassword });

res.status(201).json({ message: 'Usuario registrado com sucesso' });
});

// rota para login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user =>  user.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas'  });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h'});
    res.json({ token });
    });

    // Middleware para verificar o token
    const authenticateToken = (req, res, next) => {
        const token = req.headers['authorization']?.split(' ') [1];
        if (!token) return res.sendStatus(401);
        
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
     });
     };