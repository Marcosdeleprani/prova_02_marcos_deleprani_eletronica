let opcao = parseInt(prompt("1-para calculadora de multi&SubMulti\n2-para calculadora de custos\n3-para calculadora de resistor:"))

switch(opcao){
    case 1:
        multiSubMulti();
        break;

    case 2:
        calcConsumo();
        break;

    case 3:
        ohm();
        break;

    case 4:
        calcResistor();
        break;
    
}