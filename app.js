const http = require('http');
const fs = require('fs');

const contentType = {
    'Content-Type': 'text/html',
    charset: 'utf-8',
};

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, contentType);
    } else {
    }
});
