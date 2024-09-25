// Criando a variavel express
const express = require('express')

// cria uma instancia do express
const app = express ();
// define a porta que a api irá rodar
const porta = 3000
// Lista dados  para armazenar todos os dados cadastrados
const dados =[];


// Midleware para processar a resposta com formato json
app.use(express.json())

// Criação da rota get na raiz da api
// req - requisição
// res - resposta
app.get('/',(req,res)=>{
    res.send('Api funcionando');
});
app.post('/data',(req,res)=>{
    // parse para envio dos dados
    const {nome,idade} = req.body;
    res.send(`Nome ${nome} idade ${idade} cadastrados com sucesso`); 
    dados.push({nome,idade}) // adiciona na lista

    
});
// método data para o end point data
app.get('/data',(req,res)=>{
    // parse para leitura dos dados
    const {nome,idade} = req.body;
    //res.send(`Nome ${nome}, idade ${idade}`);
    res.json(dados) // armazena a resposta
});

 // Inicia o servidor e a porta 
 app.listen(porta,()=>{
   console.log(`Api executando na porta ${porta} `);
 });
