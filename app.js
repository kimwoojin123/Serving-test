const http = require('http');
const fs = require('fs');

const contentType = {
    'Content-Type': 'text/html',
    charset: 'utf-8',
};

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, contentType);
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.log('파일 호출 에러');
            } else {
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, contentType);
        res.end('<h1>요청 페이지를 찾을 수 없음</h1>');
    }
});
