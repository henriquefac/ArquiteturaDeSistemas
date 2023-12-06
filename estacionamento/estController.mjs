import express, { response } from 'express';
import { url } from 'inspector';
import { Estacionamento } from './estacionamento.js';
import * as fs from 'fs';

const app = express();
app.use(express.json()) ;//indica para o express ler body c/ json

/* 
let users;
const url=''
fetch('url')
.then(response => response.json())
.then(data=> dado = data)
*/

const users = [
    { "nome": "Henrique","email": "email","id": "123456789","plano": "gold"},
    { "nome": "Henrique","email": "email", "id": "12","plano": "prata"}
]
const teste= fs.readFileSync('./estacionamento.json', 'utf-8')
const vagas= JSON.parse(teste);

let dadoU = users
let dadoE = vagas;


app.get('/est', (req, res) => {
    try {       
        res.status(200).send(dadoE);        
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao ler o arquivo');
    }
  });


app.get('/est/:id', function(req,res){
    res.json(buscarVagaporID(req.params.id))
})

app.post('/est/locar/:id', (req, res) => {
    let id = req.params.id
    const vaga = new Estacionamento()
    vaga.liberarVaga(users[buscaIndexUser(id)])

    if(vaga.getStatus()){
    dadoE.push(req.body)
   
    res.status(201).send('vaga locada com sucesso')
    } else{
        res.status(500).send('Operação não permitida');
    }
})

app.delete('/est/:id', (req, res) => {
    const id = req.params.id
    const index = buscarVagaporID(id);
    
    if (index != -1) {
      dadoE.splice(index, 1)
      res.send(`Vaga ${id} excluída com sucesso`);
    } else {
      res.status(404).send(`Vaga ${id} não encontrada`);
    }


})



function buscarVagaporID(id){
    return dadoE.findIndex(vaga=> vaga.idVaga == id)
}

function buscaIndexUser(id){
    return dadoU.findIndex( user => user.id == id)
}


app.listen(120);