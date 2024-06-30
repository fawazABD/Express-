const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

const server = http.createServer((req, res) => {
    //localhost:5000
    //localhost:5000/about
    //localhost:5000/contact
    //req.url == /about or /contact or /

    //localhost:500/about
    let fileName = ''; // setting this to empty - creats an avenue for it to take optional value

    if (req.url === '/') {
        fileName = 'index.html';
    } else if (req.url === '/about') {
        fileName = 'about.html';
    } else if (req.url === '/contact') {
        fileName = 'contact.html';
    } else if (req.url == '/css/style.css') {
        fileName = '/css/style.css';
    } else if (req.url === '/js/index.js') {
        fileName = '/js/index.js';
    }

    const bobo = 'gay';
    let filePath = path.join(
        __dirname,
        "public",
        fileName
    );

    res.writeHead(200, { 'Content-Type': contentType });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${ err }`)
    } else {
        console.log('Server listening at port ${ port }...');
    }
});