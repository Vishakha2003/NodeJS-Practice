const fs = require("fs");

//In asynchronous file callback function must be there
// fs.writeFile("read.txt", "Today is Tuesday", (err)=> {
//     console.log("File is Created");
// });

// fs.appendFile("read.txt", "\nTuesday is known as Mangalvar in Marathi Language", (err)=>{
//     console.log("Task is completed");
// });

fs.readFile("read.txt","UTF8", (err, data)=>{
    console.log(data);
});