function reqS(){
    let qtd = parseInt(prompt("digite quantos resistores em serie terão: "));

    for(let contador = 0; contador < qtd; contador++){
        let resistores = parseFloat(prompt("digite o valor do resistor numero "+(contador + 1)+":"));
        resistores+=resistores;
    }
    console.log("o valor final da Req em serie é: "+ resistores);

}

function reqP(){
    let qtd = parseInt(prompt("digite quantos resistores em paralelo terão: "));
    let resultado = 0;
    let req = []; 
    for(let contador = 0; contador < qtd; contador++){
        req[contador] = parseFloat(prompt("digite o valor do resistor numero " + (contador + 1)+":"));

       resultado += (1 / req[contador]);
    }
    resultado = 1 / resultado;
    
    console.log("o valor final da req em paralelo é: "+ resultado);
    
}