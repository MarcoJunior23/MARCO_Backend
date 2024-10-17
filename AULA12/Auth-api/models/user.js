const mongoose = require('mongoose')

// Define o esquema de usuario

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, //nome de usuario
    password: { type: String, required: true }, // senha obrigatória
});

// Exporta o modelo de usuário
module.exports = mongoose.model('User', userSchema);