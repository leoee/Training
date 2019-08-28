/*let timeout = setTimeout( () => {
    console.log("After 1s");
}, 1000);

//clearTimeout(timeout);

*/

let count = 0;
let interval = setInterval( () => {
    console.log(++count);
    if (count > 4) {
        clearInterval(interval);
    }
}, 1000);

console.log("output");


