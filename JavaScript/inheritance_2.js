let Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
let gritar = function (nome) {
    console.log(nome + " gritou");
};
let respirar = function (nome) {
    console.log(nome + " respirou");
};

Homem.prototype.sexo = "masculino";
Homem.prototype.gritar = gritar;
Homem.prototype.respirar = respirar;

let leo = new Homem('Leo', 22);
leo.gritar(leo.nome);
leo.respirar(leo.nome);

/*let _new = function (f) {
    let obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
};*/

//let pedro = _new(Homem, "Pedro", 22);

/*let pedro = {};
//Homem.call(pedro, "Pedro", 18);
pedro.__proto__ = Homem.prototype;
Homem.apply(pedro, ["Pedro", 18]);*/
