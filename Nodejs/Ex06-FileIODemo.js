//To work with files, U need fs module
const fs = require("fs");//This will load the fs module for UR working..
const { cwd } = require("process");
/** Nodejs does not recommend to use sync functions. It should use async functions. 
const contents = fs.readFileSync("./Ex06-FileIODemo.js",'utf-8');//Reads the file synchronously. Till the filereading is complete, it will not move to the next file...
console.log(contents)
Callback functions are functions that are called by the environment after the main function has completed its task. 
*/

fs.readFile("./Ex06-FileIODemo.js", 'utf-8', function(err, data){
    if(err != null) //Error has occured and U want to read the error information. 
        console.error(err.message);
    else{
        console.log(data)
    }
})

// fs.readFile("./Ex06-FileIODemo.js", "utf-8", callbackFunc);
// console.log("This line of statement is expected to excute before file reading and display happens");

//callbackFunc is another function that my function should call
function testFunc(callBackFunc){
    console.log("Testing func activity will go on!!!");
    console.log("Testing func activity will go on!!!");
    console.log("Testing func activity will go on!!!");
    console.log("Testing func activity will go on!!!");
    console.log("Testing func activity is completed!!!!");
    callBackFunc("Input from this function")
}

function thisFuncIsSentAsArg(arg){
    console.log("arg value is passed by the testFunc. The value sent by the test func is ")
    console.log(arg)
}

testFunc(thisFuncIsSentAsArg);







