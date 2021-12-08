const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is the server response !');
});

server.listen(process.env.PORT || 3000);
