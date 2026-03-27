function reqS(){
    let qtd = parseInt(prompt("digite quantos resistores em serie terão: "));
    let resultado = 0;
    for(let contador = 0; contador < qtd; contador++){
        resistores = parseFloat(prompt("digite o valor do resistor numero "+(contador + 1)+":"));
        resultado += resistores;
    }
    console.log("o valor final da Req em serie é: " + resultado + " Ω");

}

function reqP(){
    let qtd = parseInt(prompt("digite quantos resistores em paralelo terão: "));
    let resultado = 0;
    let req = [qtd]; 
    for(let contador = 0; contador < qtd; contador++){
        req[contador] = parseFloat(prompt("digite o valor do resistor numero " + (contador + 1)+":"));

       resultado += (1 / req[contador]);
    }
    resultado = 1 / resultado;

    console.log("o valor final da req em paralelo é: "+ resultado.toFixed(2)+" Ω");
    
}