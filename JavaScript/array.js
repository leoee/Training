let carros = []; // or new Array();
carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
let motos = ["Honda", "Yamaha"];
//console.log(carros.valueOf());
//console.log(carros.toString());
//console.log(carros.length);
//console.log(carros.push("Gol"));
//carros.pop();
//carros.unshift("Gol");
//carros.shift();
//let pos = carros.indexOf("Corsa");
//console.log(carros.splice(pos, 1, "Sonic"));
//carros.splice(pos, 0, "Classic");
//console.log(carros.toString());
/*carros.forEach( function (elemento) {
    console.log(elemento);
});*/

//High order functions
/*let newArray = carros.filter(function (elemento) {
    return elemento === 'Corsa';
});
console.log(newArray.toString());*/

/*console.log(carros.some(function (elemento) { // can be used .every
    return elemento === "Ka";
}));*/

/* console.log(carros.map(function (elemento) { // can be used .every
    return elemento.length;
}));*/

//carros.reduce(function ())

/*let veiculos = carros.concat(motos);
console.log(veiculos.sort());*/

/*let marcas = [];
marcas[0] = {
    nome: 'A',
    preco: 0
};
marcas[1] = {
    nome: 'B',
    preco: 2
};
marcas[2] = {
    nome: 'C',
    preco: 1
};
console.log(marcas.sort(function (a, b) {
    return b.preco - a.preco;
}));*/
console.log(carros.join(" "));