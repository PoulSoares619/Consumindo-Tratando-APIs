async function buscaEndereco(CEP) {
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        var consultaCEPConvertido = await consultaCEP.json();
        if(consultaCEPConvertido.erro){
            throw Error('CEP não existente.');
        }
        console.log(consultaCEPConvertido); 
    } catch(erro) {
        console.log(erro);
    }
}


var ceps = ['93420090','91790010'];
var conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));
