import { users,vagasE,buscaIndexUser,buscarVagaporID } from './script.js';

class Estacionamento {
    vagas = vagasE
    status;
    idVaga;
    idHospede;
    nome;      
    
    setStatus(status){
        this.status= status;
    }
    setVaga(id){
        this.idVaga = id;
    }
    setIdHospede(id){
        this.idHospede= id;
    }
    setNome(nome){
        this.nome= nome;
    }
    getNome(){
        return this.nome;
    }
    getStatus(){
        return this.status;
    }
    getIdVaga(){
        return this.idVaga;
    }
    getIdHospede(){
        return this.idHospede;
    }
    getVagas(){
        return this.vagas;
    }
    liberarVaga(hospede){
        
        let resposta;
        if(hospede['plano'] == 'gold'){
            this.setStatus(true)
            this.setVaga(Math.floor(Math.random() * 50) + 1);
            this.setIdHospede(hospede.id);
            this.setNome(hospede.nome)

            const vaga = this.renderVaga();            
            
            this.vagas.push(vaga);
            resposta = `vaga ${this.idHospede} locada`;
        }else{
           this.setStatus(false);
           resposta = `Estacionamento indisponivel. Verifique seu plano.`;          
        }
        return resposta;
    }
    
    renderVaga(){
        const obj = {
            idHospede:this.getIdHospede(),
            nome: this.getNome(),
            idVaga: this.getIdVaga()          
           
        }        
        return obj;
    } 
}

export {Estacionamento};