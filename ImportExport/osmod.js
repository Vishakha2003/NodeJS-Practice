const os = require("os");
console.log(os.arch()); //arch=architecture
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
const freeMemory = os.freemem();
console.log(freeMemory); //In bytes
const totalMemory = os.totalmem();
console.log(totalMemory);