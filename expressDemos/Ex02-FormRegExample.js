const app = require("express")();
const parser = require("body-parser")//use this only to process body part of the req sent by POST to UR server
const root  = __dirname;


//Include additional middleware(Extra apis that should process UR Requets);
app.use(parser.urlencoded({extended:false})) //use the parser as a middleware.

app.get("/",(req, res)=> res.send("Root Page"));
app.get("/home",(req, res)=> res.sendFile(root + "/home.html"));
app.get("/Register",(req, res)=> res.sendFile(root + "/Registration.html"));
app.get("/AfterRegistration" , (req, res)=>{
    const name = req.query.txtName;
    const email = req.query.txtEmail;
    res.send(`Mr. ${name}, Welcome to our learning module`);
})

app.post("/AfterRegistration", (req, res)=>{
    if(req.body == null){
        res.send("No info was posted by the customer")
    }else{
        const name = req.body.txtName;
        const email = req.body.txtEmail;
        res.send(`Mr. ${name}, Welcome to our learning module. UR Email is ${email}`);
    }
})

app.listen(1234, () => console.log("Server is available at port: 1234"));

/*
use Mongodb database to store the data
use express to create REST API to perform READ(GET), CREATE(POST), UPDATE(PUT) and DELETE(DELETE). 
An example of jQuery that uses this REST API/
using a View Engine to display Web Api. JADE. 
Intro to REACT. 
*/