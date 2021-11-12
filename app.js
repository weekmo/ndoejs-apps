const http = require('http');
const {readFileSync} = require('fs');
const PORT = process.env.PORT || 5000;

const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeJs = readFileSync('./navbar-app/browser-app.js');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const favicon = readFileSync('./favicon.ico');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(homePage);
    }else if(req.url === '/styles.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(homeStyle);
    }else if(req.url === '/logo.svg'){
        res.writeHead(200,{'Content-Type':'image/svg+xml'});
        res.end(homeLogo);
    }else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        res.end(homeJs);
    }else if(req.url === '/favicon.ico'){
        res.writeHead(200,{'Content-Type':'image/x-icon'});
        res.end(homeLogo);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('Not found');
    }
    
}).listen(PORT, () => console.log(`Server running in port ${PORT} ....`));