const request = require('request');

request('http://localhost:2000/getWeather', (err, response, body) => {
    console.log(JSON.parse(body));
})


