const fs = require('fs');
const wordList = require('../data/dictionary.json');
fs.writeFileSync('./src/data/1.json',  JSON.stringify(wordList.filter((ele)=>ele.length <= 4))); 
fs.writeFileSync('./src/data/2.json',  JSON.stringify(wordList.filter((ele)=>ele.length > 4 && ele.length <= 8))); 
fs.writeFileSync('./src/data/3.json',  JSON.stringify(wordList.filter((ele)=>ele.length > 8 ))); 