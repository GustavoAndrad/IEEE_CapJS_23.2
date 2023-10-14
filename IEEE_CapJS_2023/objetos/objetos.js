// Objetos são estruturas de dados que guardam propriedaes (coisas que ele é) e métodos (coisa que ele faz)
// Entendam ele como se fosse uma variável composta

//{ propriedade : "valor", método: funcao }

const trainee = {
    nome: "Carlos",
    sobrenome: "Silva",
    idade: 20,
    faz_BCC: true,
    
    saudacao: function() { 
        return "oi"
        },

    dupla:{
            nome: "Pedro",
            idade: 21
        }, 
    
    nome_completo: function() {
        return this.nome + " " + this.sobrenome;
        }
}

console.log(trainee.nome_completo());
console.log(`Carlos tem ${trainee.idade} anos`)
console.log(trainee.saudacao());

trainee.faz_BCC = false;
console.log(trainee.faz_BCC);