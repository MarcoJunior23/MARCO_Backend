// routes/livros.js
const express = require('express');
const Livro = require('../models/livro'); // Importando o modelo de livro
const router = express.Router();

// Rota para adicionar um novo livro
router.post('/livros', async (req, res) => {
    const { titulo, autor, anoPublicacao, isbn } = req.body;

    const novoLivro = new Livro({
        titulo,
        autor,
        anoPublicacao,
        isbn
    });

    try {
        await novoLivro.save();
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para listar todos os livros
router.get('/livros', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para buscar livros pelo título
router.get('/livros/busca', async (req, res) => {
    const { titulo } = req.query; // O título será passado como query string

    try {
        const livros = await Livro.find({ titulo: { $regex: titulo, $options: 'i' } }); // Busca case-insensitive
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;