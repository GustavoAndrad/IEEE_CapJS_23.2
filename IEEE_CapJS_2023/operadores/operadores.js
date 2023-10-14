//SÃO SIMBOLOS RESERVADOS QUE REPRESENTAM OPERAÇÕES

// OPERADORES ARITIMETICOS

//SOMA
console.log(10+10);
//console.log("10"+"10")

//SUBTRACAO
console.log(20 - 5);

//MULTIPLICACAO
console.log(2*8);

//DIVISAO
let divisao = 13/7;

console.log(divisao);
console.log(divisao.toFixed(2));
console.log(parseInt(divisao));

//RESTO DA DIVISAO
console.log(7 % 5);

//INCREMENTO E DECREMENTO
let contador = 0;
console.log(++contador); //1
console.log(contador++); //2

console.log(--contador); //1

//EXPONENCIAL
console.log(2 ** 3);

// APERADORES LÓGICOS
// valores booleanos, quando verificados resultará em verdadeiro ou falso

let condicao1 = false;
let condicao2 = true;

// AND: só será verdadeiro quando todas as condições também forem
console.log(condicao1 && condicao2)

// OR: só será verdadeiro quando ao menos uma condição for verdadeira
console.log(condicao1 || condicao2)

// NOT
console.log(!condicao1)


//COMPARAÇÕES
// Exemplo: verificar se um valor está entre 5 e 6
let valor = 5.7

console.log(valor > 5 && valor < 6)

// Diferença entre == e ===
// == compara valor, e === compara valor e tipo
console.log(1 == "1")