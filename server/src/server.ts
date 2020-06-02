import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');
    
    response.json([
        'diego',
        'cleinton',
        'robson',
        'Maicon'
    ]);
});

app.listen(3333);
