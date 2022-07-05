//npm install mongodb; =>run this command from UR Current directory to install the mongodb node package.

const mongo = require("mongodb").MongoClient;//the class the interacts with the database.
const url = "mongodb://localhost/cdacdemo"; //Collection location

let database;
mongo.connect(url, (err, mgCl)=>{
    database = mgCl.db("cdacdemo");//get the database from the connection
    database.collection("empList").find().toArray((err, res)=>{
        if(err != undefined){
            console.error(err);
            return;
        }
        res.forEach((row)=>{
            console.log(`${row.empName} from ${row.empAddress}`);
        })
    })
})