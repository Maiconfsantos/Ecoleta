import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');
    
    response.json(['diego','cleinton','robson']);
});

app.listen(3333);
