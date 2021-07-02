const mymodule = require("./mymodule.js");

let filepPath = process.argv[2];
let extension = process.argv[3];

mymodule(filepPath, extension, (err, data) => {
    if(err) console.log(err);
    else {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
})