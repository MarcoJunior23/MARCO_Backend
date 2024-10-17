
require('dotenv').config() // Carrega as variaveis do arquivo venv

const express = require('express')

const mongoose = require('mongoose')

const app = express();

const authRoutes = require('./Routes/authRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);

// Conexão com o mongo db

mongoose.connect(process.env.MONGO.URI, 
   {
    useNewUrlParser: true, // usa o novo parser de url do mongodb
    useUnifiedTopology: true, // usa o novo mecanismo de gerenciamento de conexoes
    
})

.then(() => console.log('Mongodb conectado'))

.catch((error) => console.error('Erro ao conectar no MongoDB', error)); // se falhar, exibe mensagem

const PORT = process.env.PORT || 5000; // define a porta do server, usando variavel de ambiente

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)); // incia o servidor