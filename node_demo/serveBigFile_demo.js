var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('../data/thirdBig.txt','utf8');
    fileStream.on('open', ()=> {
        fileStream.pipe(res);
    });
}).listen(5000);