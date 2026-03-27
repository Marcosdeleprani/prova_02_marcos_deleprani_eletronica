function multiSubMulti(){
    const pre = {
        G: 10 ** 9,
        M: 10 ** 6,
        k: 10 ** 3,
        base: 1,
        mili: 10 ** -3,
        micro: 10 ** -6,
        nano: 10 ** -9, 
    };

    let unidade = prompt("digite a unidade que deseja utilizar\ncorrente elétrica -> A (ampère)\ntensão elétrica -> V(volt)\nresistência elétrica -> (ohm)\npotência elétrica -> W(watt): ");

    let primeiroPre = prompt("digite qual prefixo para entrada\n(G) para giga\n(M) para mega\n(k) para quilo\n(base) para sem prefixo\n(mili) para mili\n(micro) para micro\n(nano) para nano: ");

    let segundoPre = prompt("digite qual prefixo para conversão\n(G) para giga\n(M) para mega\n(k) para quilo\n(base) para sem prefixo\n(mili) para mili\n(micro) para micro\n(nano) para nano: ");

    let quantidade1 = parseFloat(prompt("digite a quantidade que voce quer transformar: "));

    let valorBase = quantidade1 * pre[primeiroPre];
    let resultadoF = valorBase / pre[segundoPre];

    if(segundoPre == "base"){
        segundoPre == " ";
    }
    if(primeiroPre == "base"){
        primeiroPre == " ";
    }

    console.log(quantidade1 , primeiroPre , unidade , "são: ", resultadoF , segundoPre , unidade,"\n");
    
}