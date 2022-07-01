//An file of Js in nodejs is called as MODULE. In this case, the module is table.js
/********************Exporting only one Function in the module********************* 
module.exports = function(num = 10){
    console.log(`Table for ${num} is: `);
    for (let index = 1; index <= 10; index++) {
       console.log(`${num} X ${index} = ${num * index}`)
    }       
}
*********************Exporting multiple Functions in single module********************/
module.exports.tableFunc = function(num = 10){
 console.log(`Table for ${num} is: `);
 for (let index = 1; index <= 10; index++) {
    console.log(`${num} X ${index} = ${num * index}`)
 }       
}

module.exports.addFunc = function(a, b){
    return a + b;
}
//This is a module that is being exported. So dont call this function here. The exported function will be acquired by the other JS file(Consumer file) using require method. 