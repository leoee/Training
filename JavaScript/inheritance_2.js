let Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Homem.prototype.sexo = "masculino";

/*let leo = new Homem('Leo', 22);
console.log(leo.sexo);*/

let _new = function (f) {
    let obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
};

let pedro = _new(Homem, "Pedro", 22);

/*let pedro = {};
//Homem.call(pedro, "Pedro", 18);
pedro.__proto__ = Homem.prototype;
Homem.apply(pedro, ["Pedro", 18]);*/

console.log(pedro.sexo);