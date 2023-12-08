import express, { response } from 'express';
import { Estacionamento } from './estacionamento.js';
import * as fs from 'fs';
import axios from 'axios';
import { users,vagasE} from './script.js';

const app = express();
app.use(express.json()) ;//indica para o express ler body c/ json



app.post('/est/locar/:id', (req, res) => {

    let id = req.params.id
    const vaga = new Estacionamento()
    
    vaga.liberarVaga(users[buscaIndexUser(id)])

    if(vaga.getStatus()){

    
        res.status(201).send('vaga locada com sucesso')
    } else{
        res.status(500).send('Operação não permitida');
    }
})

app.get('/est', (req, res) => {

    try {       
        res.status(200).send(vagasE);        
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao ler o arquivo');
    }
  });

  

app.get('/est/:id', function(req,res){
    let id = req.params.id
    res.json(vagasE[buscarVagaporID(id)])
})


app.delete('/est/:id', (req, res) => {
    const id = req.params.id
    const index = buscarVagaporID(id);
    
    if (index != -1) {
      vagasE.splice(index, 1)
      res.send(`Vaga ${id} excluída com sucesso`);
    } else {
      res.status(404).send(`Vaga ${id} não encontrada`);
    }
})



function buscarVagaporID(id){

    return vagasE.findIndex(vaga=> vaga.idVaga == id)
}

function buscaIndexUser(id){

    const idInt = parseInt(id);
    const findIndex = users.findIndex(user => user.id == idInt)

    
    return users.findIndex( user => user.id == idInt)
}


app.listen(121);