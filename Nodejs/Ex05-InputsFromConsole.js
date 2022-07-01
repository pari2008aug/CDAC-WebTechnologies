const readLine = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

function prompt(question, resFunc){
    readLine.question(question, (answer) =>{
        readLine.close();
        return resFunc(answer);
    })
}

prompt("Enter UR Name please", (res) => console.log("THe Name is " + res))