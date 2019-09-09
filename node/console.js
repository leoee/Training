let konsole = {
    log: function (msg) {
            process.stdout.write(msg + "\n");
    },
    error: function (msg) {
        process.stderr.write(msg + "\n");
    }
};
konsole.log('A ' + process.stdout.isTTY);
konsole.error('B ' + process.stderr.isTTY);