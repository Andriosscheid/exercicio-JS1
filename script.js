// exercicio 1 e 2
const nome = "Andrios"
let idade = 23
idade = 24
console.log(idade)

//exercicio3
const oi = "Bom dia"
// oi = "Boa tarde" nao da certo pq const nao permite mudanças
console.log(oi)

//exercicio 4 a 7
const num1 = 5;
const num2 = 8;
const num3 = 3;
const num4 = 2;

let soma = num1 + num2
console.log(soma)

let multiplicacao = num2 * num3
console.log(multiplicacao)

let subtracao = num2 - num1
console.log(subtracao)

let divisao = num2 / num4
console.log(divisao)

//exercicio 8
function somar (numero1, numero2) {
    return numero1 + numero2
}
const total = somar(10,5)
console.log(total)

//exercicio 9
function menos(pnumero, snumero) {
    return pnumero - snumero 
}
const res = menos(10, 5)
console.log(res)

// exercicio 10 e 11
function saudacao() {
    const nome = prompt('Qual o seu nome')
    return nome
}
saudacao()
window.alert(`Oi ${nome}`)

//exercicio 12 
function aprovacao() {
    const nota = prompt('Qual foi a sua nota?')
if ( nota > 6) {
    window.alert('Você foi aprovado')
}
else {
    window.alert('Você não passou')
}
}
aprovacao()