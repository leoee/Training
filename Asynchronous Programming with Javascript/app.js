// Asynchronous Fundamentals
/*let timeout = setTimeout( () => {
    console.log("After 1s");
}, 1000);

//clearTimeout(timeout);

*/

/*let count = 0;
let interval = setInterval( () => {
    console.log(++count);
    if (count > 4) {
        clearInterval(interval);
    }
}, 1000);

console.log("output");*/

// Promises

/*let promise = new Promise( function(resolve, reject) {


    let isSuccessful = true;

    if (isSuccessful) { 
        resolve("Success!");
    }
    else { 
        reject(Error("Failure."));
    }
});

promise.then( (val) => { //sucess callback
    console.log(val);
}, (val) => { //rejection callback
    console.log(val);
});*/

/*let promise = Promise.resolve([1, 2, 3, 4]);
// This way i can use Sequencing Asynchronous Operations
promise.then( (result) => {
    console.log(result);
    return result.map(x => x * x);
}).then( (result2) => {
    console.log(result2);
    return result2.filter(x => x > 5);
}).then( (result3) => {
    console.log(result3);
});*/

// Using Promises.all
/*let promise1 = Promise.resolve('hello'); 
let promise2 = Promise.resolve({age:2,height:188}) 
let promise3 = 42;


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

}).catch(function(error){

    console.log(error) 

});*/

/*let promise1 = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve("finished in two seconds");
    }, 2000) //returns a resolved promise after 2 seconds
});

let promise2 = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve("finished in five seconds");
    }, 5000) //returns a resolved promise after 5 seconds
});


Promise.race([promise1, promise2]).then( function(result) { 

    console.log(result) // logs "finished in two seconds" because promise1 resolved first

}).catch( function(error){

    console.log(error)  

});*/


// Fetch API
//const fetch = require("node-fetch");
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(result){
       return result.json()  
    })
    .then(function(result){
       console.log(result);
       //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
    })
    .catch(function(err){
        console.log(err);
});*/


