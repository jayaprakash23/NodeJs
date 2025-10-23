require("./module.js");
//const Calculate = require("./Sum.js");
//import {Calculate} from './Sum.js'

const {Addition,subtraction,Multiplicationtion,Divition} = require("./Calculate") //when there is a multiple files need to be import which are located in one folder, create index.js file and import the modules. Then you can import to anywhere in your code wthout mention index.js. just import till folder level (example, const{module name}=require('../path/to/folder/')). The index.js automatically take care of the importing the module.
 

var name = "Welcome to Node Js project";

var a = 10, b = 15;
console.log(name);
console.log(a + b);

//console.log(global);
//console.log(self)
console.log(globalThis === global); //true 

console.log("Addition", Addition(a,b))

