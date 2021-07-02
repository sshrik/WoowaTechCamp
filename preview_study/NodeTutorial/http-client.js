const http = require("http");

let sendToUrl = process.argv[2];

http.get(sendToUrl, (response) => {
    response.on('data', (data) => {
        console.log(data.toString());
    });
});
