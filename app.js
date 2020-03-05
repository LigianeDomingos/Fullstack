const express = require('express');
const app = express();

// inicianto metodo GET antes de rodar o servidor
app.get('/', (req, res)=> res.send('Iniciado metodo GET enviando res.send'));
app.get('/', (req, res)=> res.send([Contato1],[Contato2]));
app.get('/', (req, res)=> res.send({nome: "Maria", idade: 20}));

// criando servidor com o express
app.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));

// ---------------------------------------------------------
// ESCOPO ROTAS
/*var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(requisicao, resposta) {
  res.send('About birds');
});

module.exports = router; */

// ---------------------------------------------------------
// SINTAXE PARA ROTAS:
// 
// app.get('/', function(req, res){
// res.send("SELEÇÃO DE RESPOSTA");
// })

// ---------------------------------------------------------

