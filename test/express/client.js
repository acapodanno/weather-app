const request = require('request');

request('http://localhost:3000/', (err, response, body) => {
    console.log(body);
})


request('http://localhost:3000/getWeather/1135', (err, response, body) => {
    console.log(body);
})

request('http://localhost:3000/getWeather/Tufino', (err, response, body) => {
    console.log(body);
})