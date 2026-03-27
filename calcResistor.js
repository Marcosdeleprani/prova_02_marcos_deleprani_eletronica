function calcResistor(){
    let faixa1;
    let faixa2;
    let faixa3;
    let faixa4;
    let faixa5;

    const digito = {
        PRETO: 0,
        MARROM: 1,
        VERMELHO: 2,
        LARANJA: 3,
        AMARELO: 4,
        VERDE: 5,
        AZUL: 6,
        ROXO: 7,
        CINZA: 8,
        BRANCO: 9,
    };
    const multiplicador = {
        PRETO: 1,
        MARROM: 10,
        VERMELHO: 100,
        LARANJA: 1000,
        AMARELO: 10000,
        VERDE: 100000,
        AZUL: 1000000,
        DOURADO: 0.1,
        PRATA: 0.01,
    };
    const tolerancia = {
        MARROM: 0.01,
        VERMELHO: 0.02,
        DOURADO: 0.05,
        PRATA: 0.1,
    };
    let faixaSoma = 0;
    let faixaMulti = 0;
    let toleranciaMin = 0;  
    let toleranciaMax = 0;  
    let faixas = parseInt(prompt("1-para 4 faixas\n2-para 5 faixas: "));

    if(faixas == 1){
        faixa1 = prompt("digite a cor(em letra maiuscula) da faixa 1: ");
        faixa2 = prompt("digite a cor(em letra maiuscula) da faixa 2: ");
        faixa3 = prompt("digite a cor(em letra maiuscula) da faixa 3: ");
        faixa4 = prompt("digite a cor(em letra maiuscula) da faixa 4: ");
        
        faixaSoma = (digito[faixa1] * 10) + (digito[faixa2]);
        faixaMulti = faixaSoma * multiplicador[faixa3];
        toleranciaMin = faixaMulti - (faixaMulti * tolerancia[faixa4]);
        toleranciaMax = faixaMulti + (faixaMulti * tolerancia[faixa4]);

    }
    if(faixas == 2){
        faixa1 = prompt("digite a cor(em letra maiuscula) da faixa 1: ");
        faixa2 = prompt("digite a cor(em letra maiuscula) da faixa 2: ");
        faixa3 = prompt("digite a cor(em letra maiuscula) da faixa 3: ");
        faixa4 = prompt("digite a cor(em letra maiuscula) da faixa 4: ");
        faixa5 = prompt("digite a cor(em letra maiuscula) da faixa 5: ");
        
        faixaSoma = (digito[faixa1] * 100) + (digito[faixa2] * 10);
        faixaSoma = faixaSoma + digito[faixa3];
        faixaMulti = faixaSoma * multiplicador[faixa4];
        toleranciaMin = faixaMulti - (faixaMulti * tolerancia[faixa5]);
        toleranciaMax = faixaMulti + (faixaMulti * tolerancia[faixa5]);

    }

}