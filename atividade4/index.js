const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

app.get('/somar/:a/:b', (req, res) => {
  const resultado = calculadora.somar(parseInt(req.params.a), parseInt(req.params.b));
  res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
  const resultado = calculadora.subtrair(parseInt(req.params.a), parseInt(req.params.b));
  res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const resultado = calculadora.multiplicar(parseInt(req.params.a), parseInt(req.params.b));
  res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
  const resultado = calculadora.dividir(parseInt(req.params.a), parseInt(req.params.b));
  res.send(resultado.toString());
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 8080');
});