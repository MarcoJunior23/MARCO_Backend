require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');

app.use(express.json());
app.use(cors());

const productRoutes = require('./Routes/produtos'); 

// Conexão do MongoDB
mongoose.connect('mongodb+srv://marcos97795:MAZA123456@library.s7nxo.mongodb.net/?retryWrites=true&w=majority&appName=library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongodb conectado')).catch(err => console.error('Erro ao conectar no mongo', err));

// Import das rotas
app.use('/api/produtos', productRoutes); 
app.use('/api/auth', authRoutes);

// Define a porta do servidor
app.listen(5000, () => {
    console.log('Servidor executando na porta 5000');
});
