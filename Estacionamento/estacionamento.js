class Estacionamento {
    vagas = []
    status;
    idVaga;
    idHospede;


    setStatus(status){
        this.status= status
    }
    setVaga(id){
        this.idVaga = id
    }
    setIdHospede(id){
        this.idHospede= id
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
            this.idVaga= Math.floor(Math.random() * 30) + 1;
            this.setIdHospede(hospede.id);

            const vaga = this.renderVaga(this.getIdVaga(),this.getIdHospede);
            this.vagas.push(vaga)

            resposta = `vaga ${this.idHospede} locada`
        }else{
           this.setStatus(false)
           resposta = `Estacionamento indisponivel. Verifique seu plano`
          
        }
        console.log(resposta)
        return resposta
    }
    
    renderVaga(idV,idUser){
        const obj = {
            status: "true",
            idVaga: idV,
            idHospede:idUser
        }
        
        return obj;
    }
    exibirInformacoes() {
        console.log(`ID do hospede: ${this.idHospede}`);
        console.log(`ID da vaga: ${this.idVaga}`);
        console.log(`Status da vaga: ${this.status}`);
    }
    



}

export {Estacionamento};