const express = require('express');
const InformaçãoPessoal = require('./informacoes.js');
const Rotas = express.Router();

Rotas.get('/', (req, res) => {
    res.send(
        '<h1> Rafael Jose </h1> \
        <p> Ola Seja Bem Vindo ao Meu Site <br> é um Prazer Telo Aqui Porque Ninguem Vem Aqui </p> \
        <p> Fica a Vontade </p> '
    );
});


Rotas.get('/:procura', (req, res) => {
    const Digitado = req.params.procura;
    const Dados = InformaçãoPessoal.find(i => i.nome == Digitado);

    if (Dados != undefined) res.send(
        '\
        <h1> Pessoas </h1>  \
        <p> Nome:' + Dados.nome + ' </p> \
        <p> CPF:  ' + Dados.cpf + ' </p> \
        <p> Nascimento:  ' + Dados.nasc + ' </p> \
        <p> Alturas: ' + Dados.altura + ' </p> \
        '
    ), console.log(Dados);
    else res.send('Não Encontrado');

});

module.exports = Rotas;