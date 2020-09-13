

const http = require('http');
const url = require('url');
const data = require('./data')

// function split(cards) {
//     const words = []
//     const translations = []
//     for (let index = 0; index < cards.length; index++) {
//         const element = cards[index];
//         words.push(element.word)
//         translations.push(element.translation)
//     }
//     const res = {
//         words: shuffle(words),
//         translations: shuffle(translations)
//     }
//     return res;
// }

function isMach(word, translation){
    if (!word) return false
    if (!translation) return false
    for (let index = 0; index < data.cards.length; index++) {
        const element = data.cards[index];
        if(element.word === word && element.translation === translation){
            return true;
        }
    }
    return false;
}


const requestHandler = (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'        
    }
    const u = url.parse(req.url, true)
    if (u.pathname === '/cards') {
        res.writeHead(200, headers)
        res.end(JSON.stringify(split(data.cards)))
        
    } else if(u.pathname === '/guess') {
        console.log(u.query.word)
        console.log(u.query.translation)
        res.writeHead(200, headers)
        const r = {
            'result': isMach(u.query.word, u.query.translation),
        }
        res.end(JSON.stringify(r))
    } else {
        res.writeHead(400, headers)
        res.end(JSON.stringify({'message': 'welcome'}))
    }
}
const server = http.createServer(requestHandler);

server.listen(8080, '127.0.0.1');
console.log('Server is runnig')
console.log("data catds is:" , data.cards)
console.log("shuffle array is: ", shuffle(data.cards))
