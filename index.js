const express = require('express');
const { APP_ID } = require('./common/constants');
const { getWeather } = require('./func/func_weather');
const app = express();
app.listen(3000);
app.use(express.static('public'));

app.get('/getWeather/:zip([0-9]+)', async (req, res) => {
    try {
        const result = await getWeather({ zip: req.params.zip, appid: APP_ID });
        res.json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
});
app.get('/getWeather/:city([a-zA-Z]+)', async (req, res) => {
    res.send(req.params.city);
    try {
        const result = getWeather({ q: req.params.city, appid: APP_ID });
        res.json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

console.log('Server running on the port:3000');