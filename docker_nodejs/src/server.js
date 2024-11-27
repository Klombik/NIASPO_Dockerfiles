const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 80;

const server = http.createServer((req, res) => {
    // Определим путь для index.html или других файлов
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Читаем файл и отправляем его клиенту
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            // Определяем тип контента, чтобы корректно обрабатывать HTML
            const extname = path.extname(filePath);
            let contentType = 'text/plain';

            if (extname === '.html') {
                contentType = 'text/html';
            } else if (extname === '.js') {
                contentType = 'application/javascript';
            } else if (extname === '.css') {
                contentType = 'text/css';
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});