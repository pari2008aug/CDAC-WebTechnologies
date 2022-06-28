let addFunc = (v1, v2) => v1 + v2;
let subFunc = (v1, v2) => v1 - v2;
let mulFunc = (v1, v2) => v1 * v2;
let divFunc = (v1, v2) => v1 / v2;

let processMethod = (v1, v2, operand) => {
    let result = 0.0;
    switch (operand) {
        case "+":
            result = addFunc(v1, v2);
            break;
        case "-":
            result = subFunc(v1, v2);
            break;
        case "*":
            result = mulFunc(v1, v2);
            break;
        case "/":
            result = divFunc(v1, v2);
            break;
        default:
            throw "Invalid Operation";
    }
    return result;//return the value for this method...
}