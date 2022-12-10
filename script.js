var consultaCEP = fetch('https://viacep.com.br/ws/88110640/json/')
.then(resposta => resposta.json())
.then(r => {
    if(r.erro){
        throw Error('Ta errado o CEP bixo!');
    }else{
        console.log(r);
    }
    })
.catch(erro => console.log(erro))
.finally(concluido => console.log('Processo concluido.'));

console.log(consultaCEP);
