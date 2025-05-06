const readline = require("readline-sync")

const request = readline.question("digite um numero correspondente ao dia da semana de 1-7");

switch(request){
    case 1
    console.log("segunda-feira");
    break;

    case 2
    console.log("terça-feira");
    break;

    case 3
    console.log("quarta-feira");
    break;

    case 4
    console.log("quinta-feira");
    break;

    case 5
    console.log("sexta-feira");
    break;

    case 6
    console.log("sabado"); 
    break;

    case: 7
    console.log("domingo");
    break;

default: console.log("numero invalido");
}
