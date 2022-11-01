const https = require('https');
const { WEATHER_URL, STATUS_CODE } = require('../../constants')
const {processResponse} = require('../../func/functions')
const city = process.argv[2] || ''
try {
    const req = https.get(WEATHER_URL + '&q=' + city, resp => {
        switch (resp.statusCode) {
            case 200:
                processResponse(resp);
                break;

            default:
                console.log(resp.statusCode + ":" + STATUS_CODE[resp.statusCode])
                break;
        }

    });
} catch (e) {
    console.error(e.message);
}


