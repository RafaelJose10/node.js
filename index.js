const express = require('express');
const Rotas = require('./rotas.js');
const Porta = process.env.PORT || 1997;

const APP = express();

APP.get('/ola', (req, res) => {
    res.send('<h1> Ola Tudo Bem!! </h1>');
});

APP.use('/', Rotas);

APP.listen(Porta, () => {
    console.log(`Servidor Rodando na Porta ${Porta}`);
});


/*

Reiniciar
Shutdown.exe -r -t 00
Hibernar
rundll32.exe PowrProf.dll,SetSuspendState
Suspender
rundll32.exe powrprof.dll,SetSuspendState 0,1,0
Bloquear
Rundll32.exe User32.dll,LockWorkStation


*/