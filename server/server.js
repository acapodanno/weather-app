const http = require('http')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const { WEATHER_URL, APP_ID } = require('../common/constants')
http.createServer((req, resp) => {
    const { query, pathname } = url.parse(req.url, true)
    let params = {}
    switch (pathname) {
        case '/':
            const index = fs.createReadStream('./client/index.html')
            resp.writeHead('200', { 'Content-Type': 'text/html' })
            index.pipe(resp);
            break;
        case '/getWeather':
            if (query.city && !query.zip) {
                params.q = query.city;
            }
            if (query.zip) {
                params.zip = query.zip + ',IT';
            }
            params.appid=APP_ID
            axios.get(WEATHER_URL, {
                params:
                params

            }).then(weather => {
                resp.writeHead('200', { 'Content-Type': 'text/json' })
                resp.end(JSON.stringify(weather.data));
            }).catch(error => {
                resp.writeHead(500);
                resp.end();
            });
            break;
        default:
            break;
    }
    //resp.end('You called me with ' + req.url)
}).listen(2000);

console.log('Server runnig on port :2000')