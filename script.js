 function calc(){
    var result = document.querySelector("#result");
    let media = parseFloat(document.querySelector("#media").value);
    let preco = parseFloat(document.querySelector("#preco").value);
    let distancia = parseFloat(document.querySelector("#distancia").value);
    let pedagio = parseFloat(document.querySelector("#pedagio").value);
    if(!pedagio){
        pedagio = 0;
    }
    if(!result || !media || !preco || !distancia){
        cont = 0;
        result.innerHTML = cont.toLocaleString('pt-br',{style: `currency`, currency: 'BRL'});
    }
    else{
        let cont = ((distancia/media) * preco) + pedagio;
        result.innerHTML = cont.toLocaleString('pt-br',{style: `currency`, currency: 'BRL'});
    }
   
 }