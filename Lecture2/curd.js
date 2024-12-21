const fs = require("fs");

//create a folder named vish
// fs.mkdir("Vish", (err)=>{
//     console.log("Folder is Created")
// });

//create a file named bio.txt
// fs.writeFile("./Vish/bio.txt", "My name is Vishakha", (err)=>{
//     console.log("File is Created")
// });

//add more data into the file at the end of the existing data
// fs.appendFile("./Vish/bio.txt", "\nI am studying in the Computer Department of ZCOER.", (err)=> {
//     console.log("Text added Successfully");
// });

//read the data without getting buffer data
// fs.readFile("./Vish/bio.txt", "UTF8", (err, data)=> {
//     console.log(data);
// });

//rename the file as mybio.txt
// fs.rename("./Vish/bio.txt", "./Vish/mybio.txt", (err)=> {
//     console.log("Updated Successfully");
// });

//delete both file as well as folder
// fs.unlink("./Vish/mybio.txt",(err)=>{
//     console.log("File is Deleted");
// });

fs.rmdir("./Vish", (err)=>{
    console.log("Folder deleted");
});

