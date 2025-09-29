require("./module.js");
const Calculate = require("./Sum.js");
//import {Calculate} from './Sum.js'

var name = "Welcome to Node Js project";

var a = 10, b = 15;
console.log(name);
console.log(a + b);

//console.log(global);
//console.log(self)
console.log(globalThis === global); //true 

console.log(Calculate(3, 5, "add"));

