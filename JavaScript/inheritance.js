let homem = {
    sexo: 'masculino'
};

let joao = {
    nome: 'Joao',
    idade: 20,
    // __proto__: homem
};

Object.setPrototypeOf(joao, homem);

/*let leo = {
    nome: 'Leo',
    idade: 22,
    //__proto__: homem
};*/

let leo = Object.create(homem);
leo.nome = "Leo";
leo.idade = 22;

//Object.setPrototypeOf(leo, homem);

console.log(joao.sexo);
console.log(leo.sexo);