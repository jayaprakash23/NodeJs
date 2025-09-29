/**
 * 
 * @param {*} a  Parameter 1
 * @param {*} b Parameter 2
 * @param {*} method Mathematical function
 * 
 * 
 * The Calculate function will do mathemetical function like addition, subtraction, Multiplication, Divition. This function will take three parameters
 * a,b are the values that needs to be calculated and method should be "add", "sub"."mul","div".
 * @returns The function will return the calculated values
 */

const Calculate=(a, b, method)=> {
    switch (method) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            return a / b;
        default:
            throw new Error("Invalid method");
    }
}

module.exports= Calculate;