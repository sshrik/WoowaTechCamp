const http = require('http');
const fs = require('fs');

let portNumber = Number(process.argv[2]);
let fileName = process.argv[3];

const server = http.createServer((req, res) => {
    let readStream = fs.createReadStream(fileName);
    readStream.on('open', () => readStream.pipe(res));
    readStream.on('error', (err) => res.end(err));
});

server.listen(portNumber);

