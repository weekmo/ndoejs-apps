const {createReadStream} = require('fs');

const stream = createReadStream('../third.txt',
     {
         highWaterMark: 90000, // buffer size
         //encoding: 'utf-8'
        });

stream.on('data', result => {
    console.log(result);
});

stream.on('error', err => console.log(err));