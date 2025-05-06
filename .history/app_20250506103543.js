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

function MenuCrud(){
do{
console.log("----Menu----")
console.log("1 - CREATE")
console.log("2 - READ")
console.log("3 - UPDATE")
console.log("4 - DELETE")

const input = readline.question("digite um numero correspondendte a opção desejada: ")


switch(input){
    case "1":
        console.log("Entity are created")
        break;
        case "2":
            console.log("read entities")
            break;
            case "3":
                console.log("Entity are update")
                break;
                case "4":
                    console.log("Entity are deleted")
                    break;
                        default:
                        console.log("Number invalid");

        }
}

console.log(MenuCrud());
