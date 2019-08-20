let regExp = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;
let telefone = '(80) 99876-1234, (50) 98231-1234';
//console.log(regExp.test(telefone));

//console.log(telefone.match(regExp));

//console.log(telefone.replace(regExp, "telefone"));

console.log(telefone.match(regExp));