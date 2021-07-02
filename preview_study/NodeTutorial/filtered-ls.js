const fs = require("fs");

let pathName = process.argv[2];
let extension = process.argv[3];

fs.readdir(pathName, (err, fileList)=> {
    for(let i = 0; i < fileList.length; i++) {
        let splitFileName = fileList[i].split(".");
        let fileExtension = splitFileName[splitFileName.length - 1];
        if(fileExtension === extension && splitFileName.length !== 1) {
            console.log(fileList[i]);
        }
    }
});