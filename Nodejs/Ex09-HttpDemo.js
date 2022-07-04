/*Http module is a nodejs provided module for creating Web Apps without an explicit need to a heavy webserver like IIS, Apache tomcat or Websphere.
Even though Nodejs is small in size, it is very powerful. Almost all Web App Framworks use Nodejs as their dev Envinroment setup. This includes Angular and React. Even database servers use Nodejs as their platform for working with the users(MongoDb and Cassendra). 
Considering all these, Nodejs is a popular platform for Web App development as well as Database development. It is considered as a Replacement of the traditional Web servers.   
Every web-server has an ability to accept requests or queries from the users thru http. This request will be an HTTP object that contains info like the browser info, user details, what info the user is asking for and where to look for that info. 
The Web-server will handle that request, look for the location where user has asked for, if found processes that page and renders it back to the user as a RESPONSE to the Request. Response is also an HTTP object. 
*/
const http = require("http");
const fruits = ["Appples", "Mangoes", "Oranges", "Bananas"];
const server = http.createServer(function(req, res){
    console.log(req.url)
    if(req.url == "/Fruits"){
        res.write("<h1>Welcome to server side programming</h1><hr");
        res.write("<p>The fruits List with us</p>")
        res.write(fruits.toString ())
        res.end();
    }else if(req.url != 'favicon.ico'){
        res.write("<h1>Hello world from Http!!!</h1>")
        res.end();//stop the processing and sent the data to the client browser. 
    }
})

server.listen(1234);
//localhost:1234