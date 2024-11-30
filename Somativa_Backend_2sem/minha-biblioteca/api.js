const express = require ('express');
const mongoose = require('mongoose');
const livrosRouter = require('./routes/livros'); // Importando as rotas de livros

const app = express();
const PORT = 4000;

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://marcos97795:MAZA123456@library.s7nxo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

app.use(express.json()); // Middleware para parsear JSON
app.use('/api', livrosRouter); // Usando as rotas de livros

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}/`);
});