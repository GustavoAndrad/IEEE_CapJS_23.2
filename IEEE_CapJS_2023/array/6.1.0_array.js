// Array/vetores/lista

// Em um array pode ter vários tipos de dados, mas não é o ideal

// Unidimensional

//let arrayTest = new Array() // criando com construtor

let lista = [
    "Carlos", 
    "Danilo", 
    "Pedro",
    function () {
        console.log("Oi")
    },
    {
        name: "Pablo",
        idade: 21
    }
]

lista[3]()
console.log(lista[4].name)


lista[0] = "Aline"
console.log(lista[0])

// MANIPULANDO ARRAYS

console.log(lista.length) // retorna quantos elementos em no array

console.log(lista.indexOf("Danilo")) // Acha a posição de um elemento no array

lista.unshift("Paulo")

console.log(lista)

/*
    Adiciona no fim: push
    Adiciona no começo: unshift
    Romeve do fim: pop
    Remove do inicio: shifth
    Pega somente alguns elementos do array: slice(inicio, fim)
    Remove um ou mais itens em qualquer posição do array: splice(1, 2)

*/

console.log(lista.slice(0, 3))
lista.splice(1, 3)
console.log(lista)

// For each - percorre um array - (item, index, array)

let array = [
    "Requeijão", 
    "Pão",
    "Geleia", 
    "Nutella"
]

array.forEach((item, index, array) => console.log(item))


// Map - percorre o array e faz alguma alteração nos seus elementos - retorna uma nova lista

let produtos = [
    {
        nome: "skate",
        preco: 400
    },
    {
        nome: "monitor",
        preco: 600
    },
    {
        nome: "Mouse",
        preco: 40
    },
    {
        nome: "Tênis",
        preco: 200
    },
    {
        nome: "Escada", 
        preco: 100
    },
    {
        nome: "fone",
        preco: 20
    }
]


const produtosPromocao = produtos.map(item => item.preco / 2)
console.log(produtosPromocao)


// reduce ((a, b) => a + b.preco, 0).  a é o acumulador, b o item e 0 em que valor o acumulador irá começar 

const total = produtos.reduce((a, b) => a + b.preco, 0)
console.log(total)

// Filter - não modifica o array original - cria um novo array - lida com boolean (se for true, o item é adicionado ao array)
// filter(item, index, array)


const newArray = produtos.filter(item => item.preco > 40)

console.log(newArray)

// Bidemensional

let matriz = []

for (let i = 0; i < 5; i++){
    matriz[i] = []
    for (let j = 0; j < 3; j++){
        matriz[i][j] = 8
    }
}


matriz[0][0] = 3
console.log(matriz[0][1])