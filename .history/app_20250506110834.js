const readline = require("readline-sync")

function diaDaSemana(){ 

const request = readline.question("digite um numero correspondente ao dia da semana de 1-7");

switch(request){
    case "1":
        console.log("segunda-feira");
        break;

    case "2":
        console.log("terça-feira");
        break;

    case "3":
        console.log("quarta-feira");
        break;

    case "4":
        console.log("quinta-feira");
        break;

    case "5":
        console.log("sexta-feira");
        break;

    case "6":
        console.log("sabado"); 
        break;

    case "7":
        console.log("domingo");
        break;

default: console.log("numero invalido");
}
}

function MenuCrud() {
    let input;

    do {
        console.log("----Menu----");
        console.log("1 - CREATE");
        console.log("2 - READ");
        console.log("3 - UPDATE");
        console.log("4 - DELETE");
        console.log("0 - Sair");

        input = readline.question("Digite um numero correspondente a opcao desejada: ");

        switch (input) {
            case "1":
                console.log("Entity created");
                break;
            case "2":
                console.log("Read entities");
                break;
            case "3":
                console.log("Entity updated");
                break;
            case "4":
                console.log("Entity deleted");
                break;
            case "0":
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Número inválido");
        }

         

    } while (input !== "0");

    function vendasHotDog(quantidade){
        
        let precoPorUnidade;
    
        if (quantidade<=5){
            precoPorUnidade= '1 real';
            console.log("preco por unidade: ${precoPorUnidade}")
        }else if(quantidade>=5 && quantidade<=10)
            precoPorUnidade= '95 cents';
            console.log("preco por unidade: ${precoPorUnidade}")
        } re

    }
}




console.log(MenuCrud());


