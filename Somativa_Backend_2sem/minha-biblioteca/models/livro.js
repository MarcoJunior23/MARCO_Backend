// models/livro.js
const mongoose = require('mongoose');

// Definição do esquema do livro
const livroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    anoPublicacao: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    }
});

// Criação do modelo a partir do esquema
const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;