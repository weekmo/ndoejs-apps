/*
const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

console.log('first task');
const doio = async () => {
    try {
        const first = await readFilePromise('./first.txt','utf-8');
        const second = await readFilePromise('./second.txt','utf-8');
        await writeFilePromise('third.txt',
        `This is combination file\n${first}\n${second}`);
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
}

doio();

console.log('second task');
*/

const {readFile, writeFile} = require('fs').promises;

console.log('first task');
const doio = async () => {
    try {
        const first = await readFile('./first.txt','utf-8');
        const second = await readFile('./second.txt','utf-8');
        await writeFile('third.txt',
        `This is combination file\n${first}\n${second}`, {flag:'a'});
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
}

doio();
console.log('second task');

const {writeFileSync} = require('fs');

for(let i=0; i<=100000; i++){
    writeFileSync('thirdBig.txt',`This is combination file\n`, {flag:'a'});
}
