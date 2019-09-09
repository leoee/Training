let net = require('net');
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt();

let client = net.connect(3000);

client.on('connect', function (message) {
    client.write('Hello, i am the client!');
});

client.on('end', function () {
	process.exit();
});

client.on('data', function (message) {
    console.log(message.toString());
});


/*process.stdin.on('readable', function () {
    var message = process.stdin.read();
    if (!message) return;
    message = message.toString().replace(/\n/, '');
    client.write(message);
});*/

rl.on('line', function (message) {
    if (!message)
        return;
    message = message.toString().replace(/\n/, '');
    client.write(message);
}).on('close', function () {
    process.exit(0);
});