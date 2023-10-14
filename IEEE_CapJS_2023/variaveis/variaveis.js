// Variáveis: pense em variáveis como caixinhas que guardam alguma coisa. 
//Tecnicamente quando criamos uma, estamos reservando um espaço na memória para um conteúdo

// Nomes de variáveis

/*
    JS é case sensitive (maiusculas e minusculas fazem diferença)

    Posso: iniciar com caracteres especiais $ e _, iniciar com letras, colocar acentos
    Não posso: iniciar com numeros, colocar espaços vazios. Dá erro
    Ideal: camelCase, snake_case. nomes que expliquem o que a variável é/faz

*/

// Em javascript temos 3 tipos de variáveis: var, let e const.
// Elas se diferenciam por escopo e possibilidade de variação


/*
    var: global e mutável. Pode funcionar fora de um escopo de bloco. Evitamos usar por conta de sua fleixibidade; pode causar bugs
    let: local e mutável
    const: local e imutável
*/

//VAR

var x = 0;
{
    var y = 1;
}

console.log(` x = ${x}\n y = ${y} `);
x = 1;

console.log(`\n\n x = ${x}\n y = ${y} `);


//LET

{
    let x = 0;
    let y = 1;
    console.log(` x = ${x}\n y = ${y} `);

    x = 1
    console.log(` x = ${x}\n y = ${y} `);
}


//CONST

{
    const x = 0;
    const y = 1;
    console.log(` x = ${x}\n y = ${y} `);
}


//PRINCIPAIS TIPOS DE DADOS
//diferente de tipo de variável

/* 
 JS é uma linguagem fracamente tipada e dinâmica. Não é necessário declarar o tipo de uma variável como em algumas linguagens
 dinamica: o tipo de dado uma variável pode mudar
 O tipo existe a partir do momento que eu atribuo um valor
*/
 
// --> Number: números inteiros e reais (float)

/*
CASOS ESPECIAIS: 
NaN - Not a Number: dividir um numero por uma string, por exemplo
Infinity // infinito
*/

// --> String : "JavaScript"
// --> Boolean: true ou false
// --> Existem outros tipos de dados interessantes (null, undefined, array, object, function)


//INTERPOLAÇÃO E CONCATENAÇÃO
//Interpolação costuma deixar o código mais legivel
const nome = "Ana";
const idade = 20;
const curso = false;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos de idade. \nÉ ${curso} que eu faço BCC.`);
console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos. \nÉ  " + curso + " que eu faço BCC");

console.log("Idade é do tipo: " + typeof(idade));
