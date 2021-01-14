const request = require('request');
const fs = require('fs');

const args = process.argv;
let inputURI = args[2];
let inputPath = args[3];
  
request(inputURI, (error, response, body) => {
  fs.writeFile(inputPath, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
