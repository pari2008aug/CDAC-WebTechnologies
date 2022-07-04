const readLine = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

//prompt is my custom function that will behave like JS prompt function. This function takes 2 args. First arg is the statement to display. readline.question is the API of the Nodejs to display the statement, take input and return the input of the user as an answer in the form of callback function. 
function prompt(question, resFunc){
    readLine.question(question, (answer) =>{
        readLine.close();
        return resFunc(answer);
    })
}

prompt("Enter UR Name please", function(res) {
    console.log("The Name is " + res)
});
