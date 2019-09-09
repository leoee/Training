let net = require('net');
let connections = [];

let broadcast = (message, origin) => {
    connections.forEach((connection) => {
        if (connection === origin)
            return;
        connection.write(message);
    });
};

net.createServer(function (connection) {
    connections.push(connection);
    connection.write('Hello, i am the server');

    connection.on('data', function (message) {
        broadcast(message, connection);
    });
}).listen(3000);