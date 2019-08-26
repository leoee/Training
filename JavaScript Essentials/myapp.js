/*console.log("Hello World!");

console.log(200);

console.log(true);

var array = [
    "string",
    100,
    ["embed", 200],
    {car: "ford"},
    () => {
        return "drive";
    }
];*/

/*function name (fullName = {}) {
    return fullName.firstName + 
        " " + fullName.lastName;
}

let obj = function(){};

//console.log(name({firstName: "Leo", lastName: "Nogueira"}));*/

/*function name (fullName) {
    return fullName();
}

console.log(name(function () {
    return "embed";
}));*/

// Hoisiting
/*console.log(name);

var name = "Leo";/*

/*console.log(name);

let name = "Leo";

/*
let engine = {
    maker: "Ford",
    headGasket: {
        pots: [
            "piston1",
            "piston2"
        ]
    }
};*/


// ------------------- Closures --------- 
/*
function runExpression (a) {
    return function (b) {
        return a + b;
    };
}

let first = runExpression(40);

console.log(first(30));*/



// ------------------- This Context ------------------
/*
let object = {
    prop: this,
    embed: {
        embed: true,
        method: function () {
            return this;
        }
    }
};

let array = [
    this,
    function () {
        return this;
    }
];

function global () {

    console.log('from global', this);

    function sub () {
        console.log('from sub', this);
    }
    
    sub();
    //sub.call(object);
}

//global.call(null);
global.call(object);*/

// Using bind, i can try to use call but the ' type of this' will be the first

/*
function f() {
    console.log(this);
}
var x = f.bind('');
x.call(20);*/

// Testing some things about 'this'
/*var artista = 'The Beatles'

function tocar () {
    let instrumentos = ['baixo', 'guitarra', 'microfone', 'bateria']
    console.log("Estamos tocando " + this.artista);
}

tocar(); // Estamos tocando The Beatles!

let bar = {
    artista: 'Dire Straits',
    tocar: function () {
        let instrumentos = ['baixo', 'guitarra', 'bateria', 'teclados', 'microfone']
        console.log("Vamos tocar " + this.artista);
    }
}

bar.tocar(); // Vamos tocar Dire Straits!*/



// ----------------Constructors--------------------
/*function Apple (x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

    return this;
}

let apple1 = new Apple(10, 20, 'red', 200);
let apple2 = new Apple(100, 200, 'green', 50);*/

// Constructors with Prototype
function Apple (color, weight) {
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    eat: function () {
        return "eat the apple";
    },
    throw: function () {
        return "throw the apple";
    }
};

let apple1 = new Apple('red', 99);
let apple2 = new Apple('green', 109);