async function buscaEndereco() {
    try{
        var consultaCEP = await fetch('https://viacep.com.br/ws/88110640/json/');
        var consultaCEPConvertido = await consultaCEP.json();
        if(consultaCEPConvertido.erro){
            throw Error('CEP não existente.');
        }
        console.log(consultaCEPConvertido)
    } catch(erro) {
        console.log(erro);
    }
}

