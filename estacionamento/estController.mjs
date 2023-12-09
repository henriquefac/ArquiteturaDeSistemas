import express from 'express';
import { Estacionamento } from './estacionamento.js';
import { users,vagasE,buscaIndexUser,buscarVagaporID} from './script.js';

const app = express();
app.use(express.json()) ;//indica para o express ler body c/ json

app.post('/est/locar/:id', (req, res) => {
    const id = req.params.id;
    const index = users[buscaIndexUser(id)]

    try{
        if (index != -1) {
            const vaga = new Estacionamento();    
            vaga.liberarVaga(index);
            res.status(201).send('vaga locada com sucesso');
        } 
    }catch{
        res.status(500).send('Operação não permitida.');
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

app.get('/est/:id', (req,res) => {

    let id = req.params.id;
    try {  
        const vaga = vagasE[buscarVagaporID(id)];   
        if(vaga){
            res.status(200).json(vagasE[buscarVagaporID(id)]);    
        } else {
            res.status(404).send(`Não existe vaga locada com o id de n.º ${id}`);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
})


app.delete('/est/:id', (req, res) => {
    const id = req.params.id;
    const index = buscarVagaporID(id);
  try{  
        if (index != -1) {
        vagasE.splice(index, 1);
        res.send(`Vaga ${id} excluída com sucesso`);
        } else {
        res.status(404).send(`Vaga ${id} não encontrada`);
        } 
    }catch(err){
        res.status(500).send(err);
    }    
})

app.listen(121);