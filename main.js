let opcao = parseInt(prompt("1-para calculadora de multi&SubMulti\n2-para calculadora de custos\n3-para calular a lei de ohm\n4-para calculadora de resistor\n5-req em serie\n6-req em paralelo:"))

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
    
    case 5:
        reqS();
        break;
    
    case 6:
        reqP();
        break;

    default:
        break;
}