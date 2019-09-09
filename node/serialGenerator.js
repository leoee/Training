let max = 10000;

module.exports.generate = () =>{
    return Math.floor(Math.random() * max);
};


/*let createSerialGenerator = () => {
    let max = 10000;

    let generate = () => {
        return Math.floor(Math.random() * max);
    }

    return {
        generate: generate
    };
};

module.exports = createSerialGenerator();*/