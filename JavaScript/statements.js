let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

let HackerTextError = function (message) {
    this.message = message;
    this.name = "HackerTextError";
};

let toHackerCase = text => {
    if(!text) {
        throw new HackerTextError("Invalid text.");
    }
    if(typeof text !== 'string') {
        throw new HackerTextError("Invalid type.");
    }
    let hackerTextArray = [];
    for(let i = 0; i < text.length; i++){
        /*if(text.charAt(i) === "o") {
            hackerTextArray.push(0);
        } else if (text.charAt(i) === "l") {
            hackerTextArray.push(1);
        } else if (text.charAt(i) === "e") {
            hackerTextArray.push(3);
        } else if (text.charAt(i) === "a") {
            hackerTextArray.push(4);
        } else if (text.charAt(i) === "s") {
            hackerTextArray.push(5);
        } else if (text.charAt(i) === "t") {
            hackerTextArray.push(7);
        } else {
            hackerTextArray.push(text.charAt(i));
        }*/
        switch(text.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            case "l":
                hackerTextArray.push(1);
                break;
            case "e":
                hackerTextArray.push(2);
                break;
            case "a":
                hackerTextArray.push(3);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
                break;
        }
    }
    return hackerTextArray.join("");
};
try {
    console.log(toHackerCase(10));
} catch (err) {
    console.log("Error: " + err.message);
};
console.log(toHackerCase(text));