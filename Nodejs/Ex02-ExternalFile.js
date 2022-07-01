/*
All External functions in Nodjes should be exported so that the other files  can import them.
Functions exporting is based on a JS library called Module.js. Module.js is a lib that was available for creating modules(small independent JS components) and exporting them to other JS files. 
U must create functions that are a part of module.exports and will be consumed by the other JS files using require("") function.  
*/
/***************Importing single function*******************
const table = require("./table");
table(5);
*************************************************************/

const bunchOfFunctions = require("./table"); // ./ means that U R importing a user defined module.
//Get the reference of the tableFunc
const tableFunc  = bunchOfFunctions.tableFunc;
tableFunc(12);//Call the method thru the reference. 

console.log(bunchOfFunctions.addFunc(123,34))

bunchOfFunctions.tableFunc(5);
// console.log("Start of the Script")
// table(5); 
// console.log("End of the Script")