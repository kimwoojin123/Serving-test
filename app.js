const http = require('http');
const fs = require('fs');
const path = require(`path`);
const contentType = {
    'Content-Type': 'text/html;charset=utf-8',
};
function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
}

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
    } else if (req.url.startsWith('/image/')) {
        let imageName = path.basename(req.url);
        let imagePath = './image/' + imageName;

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.writeHead(200, { 'Contant-Type': 'image/jpg' });
            res.end(data);
        });
    } else {
        res.writeHead(404, contentType);
        res.end('<h1>요청 페이지를 찾을 수 없음</h1>');
    }
}).listen(8080);
