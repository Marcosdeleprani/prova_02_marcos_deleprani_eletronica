function ohm(){
    let opcao = parseInt(`digite qual deseja calcular: 
    1-para resistencia(ohms - R)
    2-para corrente elétrica(ampères - I)
    3-para tensão(volts - U)
    U = R * I`);
    let amperes = 0;
    let volts = 0;
    let ohms = 0;

    switch(opcao){
        case 1:
            amperes = parseFloat(prompt("digite o valor de I-(ampères): "));
            volts = parseFloat(prompt("digite o valor de U-(volts): "));
            ohms = volts / amperes;
            console.log(ohms," Ω");
            break;

        case 2:
            volts = parseFloat(prompt("digite o valor de U-(volts): "));
            ohms = parseFloat(prompt("digite a quantidade de R-(ohms): "));
            amperes = volts / ohms;
            console.log(amperes, " A");
            break;

        case 3:
            amperes = parseFloat(prompt("digite o valor de I-(ampères): "));
            ohms = parseFloat(prompt("digite a quantidade de R-(ohms): "));
            volts = ohms * amperes;
            console.log(volts, " V");
            break;
        
        default:
            break;
    }
}