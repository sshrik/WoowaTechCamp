const net = require('net');

let portNumber = Number(process.argv[2]);

function getNowDate() {
    let date = new Date();
    
    let year = "" + date.getFullYear();
    let month = "" + (date.getMonth() + 1);
    month = month.padStart(2, 0);
    let day = "" + date.getDate();
    day = day.padStart(2, 0);
    let hour = "" + date.getHours();
    hour = hour.padStart(2, 0);
    let minute = "" + date.getMinutes();
    minute = minute.padStart(2, 0);

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
}

const server = net.createServer((socket) => {
    socket.write(getNowDate());
    socket.end();
});

server.listen(portNumber);