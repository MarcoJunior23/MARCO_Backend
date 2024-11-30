// tests/livros.test.js
const request = require('supertest');
const app = require('../api'); // Importa seu aplicativo Express
const Livro = require('../models/livro');

describe('POST /livros', () => {
    beforeEach(async () => {
        await Livro.deleteMany({}); // Limpa a coleção antes de cada teste
    });

    it('deve adicionar um novo livro', async () => {
        const livroData = {
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            anoPublicacao: 1954,
            isbn: '978-3-16-148410-0'
        };

        const res = await request(app).post('/api/livros').send(livroData);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('titulo', livroData.titulo);
    });
});