/*var counter = 0;
var add = function () {
    return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function (item) {
    itens.push(item);
    return itens;
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));*/

/*let counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

let itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));*/

/*var createCounter = function () {
    var value = 0;
    return {
        add: function () {
            return ++value;
        }
    };
};
var counter = createCounter();
console.log(counter.add());*/
/*var counter = (function (){
    var value = 0;
    return {
        add: function () {
            return ++value;
        }
    };
})();
console.log(counter.value);
console.log(counter.add());*/
let counter = (function () {
    let value = 0;
    let add = function () {
        return ++value;
    };
    let reset = function () {
        value = 0;
    };
    return {
        add: add,
        reset: reset
    };
})();
console.log(counter.value);
console.log(counter.add());