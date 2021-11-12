require('dotenv').config();
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if( req.url == '/'){
        
        res.end('<h1>Hello, World!</h1>');
    }
    else if(req.url == '/student'){
        res.end('This is student Page.');
    }
    else{
        res.statusCode = 404;
        res.end('Invalid request!');
    }
});

server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});