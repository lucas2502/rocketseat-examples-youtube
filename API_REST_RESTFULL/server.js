const express = require('express');
const app = express();

const data = require('./data.json');//Fake api

app.use(express.json());//informar que vai ser usado tipo json no express

app.get('/clients', (req, res) => {
    res.json(data);
});

app.get('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id = id); //procura client de id que for igual a id

    if(!client) return res.status(204).json();//retorna error 204, não tem client 

    res.json(client);
});

app.post('/clients', (req, res) => {

    const { name, email } = req.body;


    // Logia para SALVAR

    res.json({ name, email });

});

app.put('/clients/:id', (req, res) => {
    const { id } = req.params;//pega id do parameto
    const client = data.find(cli => cli.id == id);// pega cliente da api

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;
    
    res.json(client);

});

app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    const clientsFiltered  =  data.filter(client => client.id != id);//pega todos os clientes diferentes do id por parametro

    res.json(clientsFiltered);//retona nova lista

});



app.linsten(3000, () => {
    console.log('Server is runing!');
});



/**
 * ##VERBOS HTTP
 * GET - Recebe dados do resource
 * POST - Eviar dados ou informaçoes a serem processadas pelo resource 
 * PUT - Arualizar dados de um resource
 * DELETE - Deletar um resource
 * 
 * 
 * URL: https:localhost:3000/clientes
 * Endpoint - "/clientes"
 * API - 
 * 
 * ##BOAS PRATICAS
 * - utilizar verbos http para as requisições
 * - Não deixar barra no final do endpoint
 * - Nunca deixar o cliente sem reposta, sempre informar (404,402,500 etc...)
 * 
 * 
 * ##STATUS DE RESPOSTAS
 * - 1xx: Informação
 * - 2xx: Sucesso
 *  - 200: OK
 *  - 201: CREATED
 *  - 204: Não tem conteudo PUT, POST ou DELETE
 * - 3xx: Redirection
 * - 4xx: Client Error
 *  - 400: Bad request
 *  - 404: Not Found!
 * - 5xx:  Server Error
 *  - 500: internal serve error
 */