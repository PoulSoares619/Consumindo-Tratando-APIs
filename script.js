// não é a melhor maneira de fazer, callbackhell kkk mas salvei por motivo de exemplo



var consultaCEP = fetch('https://viacep.com.br/ws/88110640/json/')
.then(resposta => resposta.json())// converte a resposta do fetch para JSON
.then(r => {
    if(r.erro){
        // throw insere a mensagem de erro, quase igual a um return
        throw Error('Ta errado o CEP bixo!');
    }else{
        // se não houver erro só segue o baile 
        console.log(r);
    }
    })
.catch(erro => console.log(erro))
.finally(concluido => console.log('Processo concluido.'));


