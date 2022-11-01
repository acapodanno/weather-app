const axios = require('axios');
const { WEATHER_URL } = require('../common/constants');
const getWeather = async (params) => {
    try {
        const result = await axios.get(WEATHER_URL, { params });
        return result.data;
    } catch (e) {
        console.log(e);
        throw e.response.data;
    }

}
module.exports = {
    getWeather
};