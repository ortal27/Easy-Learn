

const http = require('http');
const data = require('./data')
const requestHandler = (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'        
    }
    if (req.url === '/cards') {
        res.writeHead(200, headers)
        res.end(JSON.stringify(data.cards))
    } else {
        res.writeHead(400, headers)
        res.end(JSON.stringify({'message': 'welcome'}))
    }
}
const server = http.createServer(requestHandler);

server.listen(8080, '127.0.0.1');
console.log('Server is runnig')
