const leia = require('readline-sync')
const {soma,sub}  = require('./aritimetica')

function main(){
    console.log("--------------------------------------")
    console.log("Somando e subtraindo array = [1,1,1,1,1]")
    console.log("--------------------------------------")
    console.log("Digite uma operacao + ou -")
    let op = leia.question("Qual a operacao desejada?: ")

    console.log(op)
    let arr = [1,1,1,1,1]
    let resultado = 0

    switch(op){
        case '+':
            resultado = soma(arr)
            break
        case '-':
            resultado = sub(arr)
        break;

        default:
            console.log("Opcao invalida!")

}
console.log("O resultado e: ", resultado)
}
main()