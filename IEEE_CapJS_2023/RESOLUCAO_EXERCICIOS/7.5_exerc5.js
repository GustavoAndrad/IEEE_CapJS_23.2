/*Remova os números pares
Preencha a variável semPares apenas com números ímpares;

Utilize uma estrutura de loop para percorrer o array arr;

Verifique se o número é ímpar e coloque no array semPares;

No final, exiba o array semPares com console.log;*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];

/*
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    semPares.push(arr[i]);
  }
}
*/

for (const numero of arr) {
  if (numero % 2 !== 0) {
    semPares.push(numero);
  }
}

console.log(semPares);