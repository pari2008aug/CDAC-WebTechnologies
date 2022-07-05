/*What is REST API?
Representational State Transfer is an architectural style that defines a set of rules to be used for creating web based services. service is a component that provides certain functionalities thru which we can get data thru which we can perform CRUD Operations on the data. 
REST is more prefered way of communication b/w the servers and clients as it uses HTTP, the std protocol for all kinds web based data transfer.
REST uses the HTTP methods to define the direction of the data transfer. 
REST sends the data as TEXT in the form of JSON, XML or any other customized format if required. 
Requests to the server are made in the form of URLs, the server will have Functions that performs the operation that the user has requested and returns the data as HTTPRESPONSE. The Response can be any kind of data, but JSON is the most popular way of getting, posting, putting and deleting the data from the server. 
Almost all server based technologies like Spring, .NET, Python, PHP have the concept of RESTFull Service providing in their frameworks. 
All REST APIs are consumable using HTTP methods, so any technology and platform that supports HTTP directly or indirectly can consume the services of UR Application. 
POSTMAN is a tool to test UR REST APIs. U can also use Fiddler to test UR REST APIs
*/

const app = require("express")();//Get the Express object.
const parser = require("body-parser");
const mongo = require("mongodb").MongoClient;
const cors = require("cors");

app.use(parser.urlencoded({"extended" : true}));
app.use(parser.json())
app.use(cors())//Enable CROSS ORIGIN REQUEST SHARING->Implies Cross Domain Apps can request and get the data.

let db;
//create the function
getConnection = () =>{
    const url = "mongodb://localhost/cdacdemo";
    let mc = mongo.connect(url, (err, res)=>{
        if(err){
            console.error(err);
            return;
        }
        db = res.db("cdacdemo");
    })
}
getConnection();//Call this function so that db object is created

app.get("/", (req, res) => res.send("Add /Employees to the URL to get the data"));

//Get feature that feteches all the records
app.get("/Employees", (req, res)=>{
    db.collection("empList").find().toArray((err, data)=>{
        res.send(data);
    })
})

//Get feature to get the specific record based on Id passed as Query string to the URL...
app.get("/Employees/:id", (req, res)=>{
    const id = parseInt(req.params.id);//Get the query strig value passed as parameter to UR Url..
    db.collection("empList").find({"empId" : id}).toArray((e, result) => res.send(result));
})

//We need body parser to get the data as body from the PUT
app.put("/Employees", (req, res)=>{
    const rec = req.body;
    const id = parseInt(rec.empId)
    const name = rec.empName;
    const addr = rec.empAddress;
    console.log(addr);
    db.collection("empList").update({"empId" :  id}, {$set:{empName : name, empAddress : addr }});
    res.send("Updated successfully")
})

app.post("/Employees", (req, res)=>{
    let rec = req.body;
    const id = parseInt(rec.empId);
    rec.empId = id;
    db.collection("empList").insert(rec);
    res.send("Employee inserted successfully")
})

app.delete("/Employees/:id", (req, res)=>{
    const id  = parseInt(req.params.id);
    db.collection("empList").remove({"empId" : id});
    res.send("Employee is deleted successfully");
})
app.listen(1234, ()=>console.log("Server is available at port: 1234"));


