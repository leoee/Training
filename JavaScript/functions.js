 /*function soma (a, b) {
     return a + b;
 }

 console.log(soma);
 console.log(soma(2, 3));

 let soma = function (a, b) {
     return a + b;
 }

 console.log(soma);
 console.log(soma(2, 3));

 console.log(soma(2, 3));

 function soma (a, b) {
    return a + b;
}*/

/*let produto = {
        nome: 'Sapato',
        preco: 150
};

let formulaA = function (preco) {
    return preco * 0.1;
}

let formulaB = function (preco) {
    return preco * 0.2;
}

let calcularPreco = function (produto, formulaImposto) {
    return produto.preco + formulaImposto (produto.preco);
};

console.log(calcularPreco(produto, formulaA));
console.log(calcularPreco(produto, formulaB));*/

var helloWorld = function () {
    return function () {
        return "Hello World!"
    };
};

console.log(helloWorld);
console.log(helloWorld()());