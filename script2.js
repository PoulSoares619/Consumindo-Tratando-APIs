async function buscaEndereco() {
    var consultaCEP = await fetch('https://viacep.com.br/ws/88110640/json/');
    var consultaCEPConvertido = await consultaCEP.json();
    console.log(consultaCEPConvertido)
}

