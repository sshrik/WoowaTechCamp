const fs = require("fs");

let fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (err, data)=> {
    let fileStr = data.toString();
    let newLineNumber = fileStr.split("\n").length - 1;

    console.log(newLineNumber);
});