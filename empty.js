const moment = require('moment');
const http = require('http');
const time = moment().format('dddd');
const fs = require('fs');

const server = http.createServer((require, response) => {
    console.log(require.url , require.method);
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    });
    
});
server.listen(8080, 'localhost', () => {
    console.log('listening for requests on port 8080');
});

console.log(time);

