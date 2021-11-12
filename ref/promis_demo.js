const { readFile } = require('fs');
const path = require('path');



readFile('./first.txt','utf-8',(err,data) => {
    if(err) throw err;

    console.log(data);
});