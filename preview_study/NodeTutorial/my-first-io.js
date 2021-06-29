const fs = require("fs");

let fileName = process.argv[2];
let fileBfr = fs.readFileSync(fileName);
let fileStr = fileBfr.toString();

let newLineNumber = fileStr.split("\n").length - 1;

console.log(newLineNumber);