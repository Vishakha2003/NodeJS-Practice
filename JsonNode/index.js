/*const bioData = {
    name: "Vishakha",
    age: 21,
    department: "Computer",
};
console.log(bioData.department);

const jsonData = JSON.stringify(bioData); //used for converting object into json
console.log(jsonData);

const objData = JSON.parse(jsonData);  //used for converting json to object
console.log(objData);
*/

/*Task: 
1. Convert to JSON
2. dusre file me add kardena
3. readfile
4. again convert back to obj original
5. console.log  */
const fs = require("fs");
const friend = {
    Name :"Ayush",
    game: "Football",
    weight: 92,
    height: 6.2,
};
const jsonData = JSON.stringify(friend);
fs.writeFile('json1.json',jsonData, (err)=>{
    console.log("Added Successfully");
});

fs.readFile("json1.json", "UTF8", (err,data)=>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});

console.log(jsonData);