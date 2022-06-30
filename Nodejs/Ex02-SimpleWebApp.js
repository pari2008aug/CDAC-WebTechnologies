const http = require("http");
const data = require("../jQuery/lib/SampleData.json");
http.createServer((req, res)=>{
    res.end("Code");
    console.log(data)
}).listen(1234);

/*
  install nodejs
  try a sample example. 
  Modules in Nodejs, 
  Form based Application in nodejs. 
  File IO operation. 
  Simple Web Server. 
*/