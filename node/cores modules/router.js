let http = require('http');

let createRouter = function (port) {

    let routes = {
        GET: {},
        POST: {}
    };

    let methods = ['GET', 'POST'];

    methods.forEach(function (method) {
        routes[method] = {};
        api[method.toLowerCase()] = function (path, fn) {
            routes[method][path] = fn;
        };
    });


    http.createServer(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (!routes[req.method][req.url])
            return;
        routes[req.method][req.url](req, res);
    }).listen(port);

    return api;
};

module.exports = createRouter;