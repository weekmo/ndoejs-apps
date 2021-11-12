const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);

        });
    }

    else if (req.url == '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }

    else if (req.url == '/data') {
        const users = {
            'data': [
                { name: 'Hassan', age: 20 },
                { name: 'Ali', age: 30 },
                { name: 'Ahmed', age: 37 },
                { name: 'Klan', age: 50 }
            ]
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }

    console.log(`Request to => ${req.url}`);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));