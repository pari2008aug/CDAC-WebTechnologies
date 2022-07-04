const express = require("express"); //reference of the express. REFER the cart.js on explicit object creation in Nodejs modules. 

const app = express();//creates the app for U. 
const root = __dirname;

app.get("/", (req, res) => res.send("Hello world from Express"));

app.get("/home", (req, res) => res.sendFile(root + "/home.html"));

app.get("/Register", (req, res) => res.sendFile(root + "/Registration.html"));

app.listen(1234, () => console.log("server is up and running!!"));