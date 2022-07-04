const http = require("http");
const fs = require("fs");
const httpParse = require("url").parse;
const data = require('./SampleData.json');
//createReadStream of the fs module will create a ReadStream object that can be used to read the data that comes from the stream. The ReadStream has a function called pipe that can read the contents of the stream and push it to a resource like console, res etc..
//In http, browsers can send info to the server in the form of HTTP Methods: GET, PUT, POST, DELETE, PATCH. Get is used to acquire any info from the server. POST is used to send some secured info to the server, PUT is used only to update the info in the server and DELETE is used to delete any info in the server. PATCH is sp method that will do UPDATE on small section of the data instead of the whole data. 
//GET method sends the inputs of the Form thru the URL for processing in the server. It is not secured. 
//To send secured data so that no other person be able to see this data thru any other means,U should send it by POST.  

const root = __dirname;//Const value in Nodejs to represent the Current dir of ur server. 


function display(res, url){
    const filename = root + url + ".html";//our objective is to process only html docs. 
    fs.createReadStream(filename).pipe(res);
}

function errorPage(res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("<h1>Error page</h1>")
    res.write("<hr/>")
    res.write("OOPs! Something wrong happened!!!. Did not find UR Page!!!")
    res.end();
}
//Todo: create similar pages and allow the app to become more robust..
http.createServer((req, res)=>{
    if(req.method == "GET"){
        const query = httpParse(req.url).query;
        //console.log(query);
        if(query != null){
            debugger;
            const obj = httpParse(req.url, true).query;//converts the query string to a JSON object so that it will be easy to extract the values.
           // console.log(obj);
            const content = `Thanks Mr.${obj.txtName} for registering with Us!U will be contacted later at ${obj.txtEmail} for any more clarifications!!!<p>Thanks Again!!!!</p`;
            res.end(content);
            return;
        }
        switch(req.url.toLowerCase()){
            case '/favicon.ico':
                res.end();
                break;
            case "/home":
                display(res, req.url);
                break;
            case "/registration":
                display(res, req.url);
                break;
            case "/employees":
                res.end(JSON.stringify(data));
                break;
            case "/display":
                display(res, req.url);
                break;
            default:
                errorPage(res);
                break;
        }
    }else if(req.method == "POST"){
        debugger;
        req.on("data", function(inputs){
            console.log(req);
            res.write(inputs);
            res.end();
        })
        //Todo: Convert the inputs to object and display the details explicitly using the obj like we did in GET Method. 
    }
}).listen(1234);