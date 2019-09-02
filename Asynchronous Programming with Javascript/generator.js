/*function* genFunc() {
    console.log("started");
    yield 'a';
    console.log("passed first yield");
    yield;
    console.log("passed second yield");
    yield 123;
    console.log("passed third yield");
        
    return "finished";
}

let genObject = genFunc(); //creates a generator object called genObject

console.log(genObject.next());

console.log(genObject.next());

console.log(genObject.next());

console.log(genObject.next());*/


// Throwing Errors
/*function* genFunc() {
    yield console.log('a');
    yield console.log('b');
    throw new Error("error thrown by genFunc()!");
    yield 'c';
    yield 'd';
        
}

var genObject = genFunc();

try{
    let a = genObject.next(); // Object {value: 'a', done: false}
    let b = genObject.next(); // Object {value: 'b', done: false}
    let c = genObject.next(); // undefined <-- since an uncaught error was thrown, the generator function terminated
    //console.log("error thrown by genFunc()!") occurs
    let d = genObject.next(); // undefined <-- other yield statements are ignored after the error
}
catch(e){
  console.log('err: ' + e.message);
}*/

// Yielding to other Generators
/*function* genFuncA() {
    yield console.log('a');
    yield console.log('b');
    yield console.log('c');

    return "done with genFuncA()!"
        
}

function* genFuncB(){
    yield console.log(1);
    yield* genFuncA(); // can be use like: yield* [a,b,c]
    yield console.log(2);
    yield console.log(3);

    return "done with genFuncB()!";
}

let genObject = genFuncB();

let a = genObject.next(); //Object {value: 1, done: false}
let b = genObject.next(); //Object {value: 'a', done: false}
let c = genObject.next(); //Object {value: 'b', done: false}
let d = genObject.next(); //Object {value: 'c', done: false}
let e = genObject.next(); //Object {value: 2, done: false}
let f = genObject.next(); //Object {value: 3, done: false}
let g = genObject.next(); //Object {value: "done with genFuncB()!", done: true}*/

// Sending input to generator
/*function* genFunc(){
    let a = yield '10';
    console.log(a); //a = 1
    let b = yield '20';  
    console.log(b); //b = 2
    let c = yield '30';
    console.log(c); //c = 102030

}

let genObject = genFunc();

let x = genObject.next(0); //starts genFunc(), the value inside the next() call is ignored
let y = genObject.next(1); //sends a value of 1 to genFunc()
let z = genObject.next(2); //sends a value of 2 to genFunc()
genObject.next(x.value + y.value + z.value);
genObject.next(4); //the value inside next() is ignored because genFunc() has no more yields*/

/*function* genFunc(){
    yield 'a';
    yield;  
    yield* [1,2,3];
    yield 123;

    return "finished";

}*/

/*for (let x of genFunc()){ //for...of statement
    console.log(x); 
}*/

/*let arr = [...genFunc()];
console.log(arr);*/

// let [a, b, c, d, e, f, g] = genFunc();


// Using Return()
/*function* genFunc(){
    yield 'a';
    yield 'b';
    yield 'c';
    return "finished";

}

let genObject = genFunc();

let a = genObject.next();
console.log(a);
let b = genObject.return('return() was called'); // b = Object {value: "return() was called", done: true}
console.log(b);
let c = genObject.next();
console.log(c);*/

// Throwing Errors
/*function* genFunc(){

    let a = yield 'a';
    console.log(a); // a = 123
    let b = yield 'b'; //exception is thrown, function exits
    //the code below never occurs because an exception occurred and was uncaught
    console.log(b); 
    let c = yield 'c'; 
    console.log(c); 

    return "finished!";
}

let genObject = genFunc();

let w = genObject.next(); // w = Object {value: 'a', done: false}, starts generator function
console.log(w.value);
let x = genObject.next(123);
console.log(x.value);
let y = genObject.throw(new Error("error thrown!")); // thrown() is called, y = undefined
let z = genObject.next('abc'); // z = undefined*/
