const http = require("http");

let sendToUrl = process.argv[2];

function httpCollect(sendToUrl) {
    return new Promise((res, rej) => {
        http.get(sendToUrl, (response) => {
            let rcvData = "";
        
            response.on('data', (data) => {
                rcvData += data.toString();
            });
            response.on('end', () => {
                console.log(rcvData);
                res();
            });
            response.on('error', (err)=> {
                rej(err);
            });
        });       
    })
}

httpCollect(process.argv[2])
.then(() => {
    httpCollect(process.argv[3])
    .then(() => {
        httpCollect(process.argv[4])
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })
})
.catch((err) => {
    console.log(err);
})