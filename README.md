# prova_02_marcos_deleprani_eletronica
prova 02 - calculadora eletrica
# 📊 Calculadora de Eletrônica

Este projeto é uma aplicação simples em JavaScript que reúne diversas calculadoras voltadas para conceitos básicos de eletrônica, como Lei de Ohm, associação de resistores, consumo de energia e conversão de unidades. O objetivo principal é auxiliar no aprendizado e na prática desses conceitos de forma interativa e acessível.

A aplicação conta com várias funcionalidades importantes. Entre elas, está a conversão de múltiplos e submúltiplos, permitindo transformar valores entre diferentes prefixos como giga (G), mega (M), kilo (k), mili, micro e nano, aplicáveis a unidades como corrente (A), tensão (V), resistência (Ω) e potência (W). Também há um cálculo de consumo de energia, onde é possível estimar o consumo diário e mensal em kWh, além do custo aproximado com base na potência de um aparelho e no tempo de uso diário.

Outro recurso fundamental é a implementação da Lei de Ohm, que permite calcular resistência (R), corrente (I) ou tensão (U) a partir da fórmula:

U = R * I

O sistema também inclui uma calculadora de código de cores de resistores, com suporte para resistores de 4 e 5 faixas, informando o valor da resistência e sua tolerância. Além disso, há funções para calcular resistores em série, somando diretamente seus valores, e resistores em paralelo, utilizando a fórmula:

Req = 1 / (1/R1 + 1/R2 + ... + 1/Rn)

O projeto foi desenvolvido utilizando HTML5 e JavaScript puro, sem o uso de bibliotecas externas. A estrutura é composta por arquivos separados para cada funcionalidade, como `index.html`, `main.js`, `calcLeiOhm.js`, `calcReq.js`, `calcResistor.js`, `calcConsumo.js` e `calcMulti&SubMulti.js`, promovendo melhor organização do código.

Para executar o projeto, basta clonar o repositório com o comando `git clone https://github.com/seu-usuario/seu-repo.git`, abrir o arquivo `index.html` em um navegador e utilizar o menu interativo baseado em `prompt`. As entradas são feitas por janelas pop-up e os resultados são exibidos no console do navegador (acessível com F12).

Vale destacar que o projeto possui uma interface simples baseada em prompts, podendo ser melhorado com a adição de uma interface gráfica mais amigável, validação de entradas e ajustes em possíveis erros de cálculo.

Este trabalho foi desenvolvido com fins educacionais, com foco no aprendizado de lógica de programação, conceitos básicos de eletrônica e organização de código em JavaScript.

**Autor: Marcos Deleprani**