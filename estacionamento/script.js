import {Estacionamento} from "./estacionamento.js";
import * as fs from 'fs';
var users;

const teste= fs.readFileSync('./estacionamento.json', 'utf-8')
const vagasE= JSON.parse(teste);

fetch('http://localhost:5000/usuarios')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    users = data;


  
  })
  .catch(error => console.error('Erro ao fazer a requisição:', error));


function buscarVagaporID(id){

  return vagasE.findIndex(vaga=> vaga.idVaga == id)
}

function buscaIndexUser(id){
  const idInt = parseInt(id);

  const findIndex = users.findIndex(user => user.id == idInt)
  
  return users.findIndex( user => user.id == idInt)
}




export {users,vagasE,buscaIndexUser,buscarVagaporID};