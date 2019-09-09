/*setTimeout(() => {
    console.log('B ' + new Date());
}, 3000);

const ref = setTimeout(() => {
    console.log('B ' + new Date());
}, 3000);

console.log('A ' + new Date());

clearTimeOut(ref);*/

//----------------------

/*setInterval(function () {
    console.log('C ' + new Date());
}, 1000);

//clearInterval(ref);*/

//----------------------

// Set the Timeout to execute after all code
setTimeout(function () {
    console.log('foo');
}, 0);
// or
setImmediate(function () {
    console.log('foo');
})