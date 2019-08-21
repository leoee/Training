let Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
/*class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}*/
let leo = new Pessoa("Leo", 22);
console.log(leo);
console.log(leo instanceof Date);
console.log(leo instanceof Pessoa);
console.log("nome" in leo);
console.log("peso" in leo);
delete leo.nome;
console.log("nome" in leo);