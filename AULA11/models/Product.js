// Variável que recebera conexão do mongodb
const mongoose = require('mongoose') 

// Define a estrutura para salvar o produto no banco de dados
const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    dataValidade: {
        type: String,
        required: true
    }
});

// Exportando o modelo para salvar os produtos
module.exports = mongoose.model('Product', ProductSchema);

