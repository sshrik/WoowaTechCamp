const fs = require("fs");

module.exports = function (pathName, extension, callback) {
    fs.readdir(pathName, (err, fileList)=> {
        if(err) return callback(err, null);
        let returnData = [];
        for(let i = 0; i < fileList.length; i++) {
            let splitFileName = fileList[i].split(".");
            let fileExtension = splitFileName[splitFileName.length - 1];
            if(fileExtension === extension && splitFileName.length !== 1) {
                returnData.push(fileList[i]);
            }
        }
        callback(null, returnData);
    });
}