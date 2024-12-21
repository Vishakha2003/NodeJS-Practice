/* First way
const fs = require("fs");
const http = require("http");
const server  = http.createServer();
server.on('request', (req, res) => {
    fs.readFile("input.txt", (err, data) => {
        if(err) return console.error(err);
        res.end(data.toString());
    });
});
server.listen(8000, "127.0.0.1");
*/

/*
//2nd way n
const fs = require("fs");
const http = require("http");
const server  = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.on('data', (chunkdata)=> {
        res.write(chunkdata);
    });
    rstream.on("end", ()=> {
        res.end();
    });
});
server.listen(8000, "127.0.0.1");
*/

//3rd way using stream pipe
const fs = require("fs");
const http = require("http");
const server  = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");

