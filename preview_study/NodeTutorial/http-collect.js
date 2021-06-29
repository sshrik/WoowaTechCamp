const http = require("http");

let sendToUrl = process.argv[2];

http.get(sendToUrl, (response) => {
    let rcvData = "";

    response.on('data', (data) => {
        rcvData += data.toString();
    });
    response.on('end', () => {
        console.log(rcvData.length);
        console.log(rcvData);
    })
});
