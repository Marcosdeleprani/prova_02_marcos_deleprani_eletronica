function calcConsumo(){
    let nome = prompt("digite o nome do item a ser calculado: ");
    let medida = parseInt(prompt("1-para W\n2-para kW: "));
    let tempo = parseFloat(prompt("digite o tempo de uso diario: "));
    let potencia = parseFloat(prompt("digite a potencia do aparelho: "));

    if(medida == 1){
        potencia = potencia / 1000;
    }
    else if(medida == 2){
        potencia = potencia;
    }
    else{console.log("erro na medida")}

    let kWh = potencia * tempo;
    let kWhmensal = kWh * 30;
    let valordia = kWh * 0.9;
    let valorMensal = valordia * 30;

    console.log("nome: " + nome + "\n");
    console.log("consumo mensal em kWh: " + kWhmensal + "\n");
    console.log("total gasto: " + valorMensal + "\n");
}