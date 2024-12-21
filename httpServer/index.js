/*const http = require("http");
const server = http.createServer((req, res)=>{
    console.log(req.url);   //from this we know that what user type in the url
    res.end("Successfully");
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port number 8000");
});*/

const http = require("http");
const fs = require("fs")
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hello from home side");
    }
    else if(req.url == "/about"){
        res.end("Hello from AboutUs page");
    }
    else if(req.url == "/contact"){
        res.end("Hello from ContactUs page");
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userAPI/userapi.json`, "UTF8", (err,data)=>{
            console.log(data);
            // const objData = JSON.parse(data); //used for accesing single element in the data
            // res.end(objData[0].name);  //here we start from 0 bcz array indexing start from 0 and our json data is in array format
            res.end(data);
        });        
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1> 404 error page. Page doesn't exist. </h1>")
    }
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port number 8000");
});