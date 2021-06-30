const http = require("http");
const url = require("url");

let portNumber = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    console.log(req.url);
    let parsedURL = new URL(`http://localhost${req.url}`);
    console.log(parsedURL);
    let urlPathName = parsedURL.pathname;
    let queryString = parsedURL.searchParams;
    if(req.method == "GET") {
        if(urlPathName == "/api/parsetime") {
            if(queryString.get("iso")) {
                let timeValue = queryString.get("iso");
                let date = new Date(Date.parse(timeValue));
                let data = {
                    "hour" : date.getHours(),
                    "minute" : date.getMinutes(),
                    "second" : date.getSeconds(),
                }
                sendData(res, JSON.stringify(data));
            }
        }
        else if(urlPathName == "/api/unixtime") {
            if(queryString.get("iso")) {
                let timeValue = queryString.get("iso");
                let date = Date.parse(timeValue);
                let data = {
                    "unixtime" : date
                }
    
                sendData(res, JSON.stringify(data));
            }
        }
    }
});


function sendData(res, data) {
    res.writeHead(200, {"Content-Type": 'application/json'});
    res.write(data);
    res.end();
}

server.listen(portNumber);