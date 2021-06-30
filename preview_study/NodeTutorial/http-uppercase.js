const http = require("http");

let portNumber = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    if(req.method == "POST") {
        req.on('data', (data) => {
            res.write(data.toString().toUpperCase());
        });
        req.on("error", (err) => {
            res.end(err);
        })
    }
});

server.listen(portNumber);

