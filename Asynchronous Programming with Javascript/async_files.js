const fs = require('fs');

console.log(1);

// Callback
/*fs.readFile('./in1.txt', () => {
    console.log(String(contents));
});*/

//Promises
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err) {
            reject(err);
        } else {
            resolve(contents);
        }
    });
});
//Promises
/*
readFile('./in1.txt')
    .then(contents => {
        console.log(String(contents));
    });*/


//async/await
const init = async () => {
    const contents = await readFile('./in1.txt');
    console.log(String(contents));
};

console.log('init', init());
console.log(2);