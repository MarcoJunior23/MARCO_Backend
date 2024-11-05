const express = require('express'); 
const Product = require('../models/Product'); 
const router = express.Router(); 

// Rota para cadastrar um novo produto (POST)
router.post('/', async (req, res) => {
    const { nome, quantidade, valor, dataValidade } = req.body; // Extrai os dados da requisição
    // tenta salvar o produto no banco de dados
    try {
        const newProduct = new Product({ nome, quantidade, valor, dataValidade });
        await newProduct.save();
        // 201 - código de status 
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar produto', error });
    }
});

// Rota para buscar todos os produtos (GET)
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // busca todos os produtos com o método find
        res.status(200).json(products); // retorna a lista de produtos
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os produtos', error }); // retorna o erro se houver
    }
});

// Rota para atualizar um produto (PUT)
router.put('/:id', async (req, res) => {
    const { nome, quantidade, valor, dataValidade } = req.body; // extrai o conteúdo da requisição
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { nome, quantidade, valor, dataValidade },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
});

// Rota para deletar um produto pelo id (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o produto', error });
    }
});

module.exports = router;