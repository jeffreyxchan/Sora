var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '3807ad72ded15aaf389f356d55850523';

function prepRouteParams (queryStringData) {
    return Object.keys(queryStringData)
        .map(function (key) {
            return key + '=' + encodeURIComponent(queryStringData[key]);
        }).join('&');
}

function prepURL (type, queryStringData) {
    return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
    return {
        q: city,
        type: 'accurate',
        APPID: _APIKEY,
        cnt: 5
    }
}

function getCurrentWeather (city) {
    var queryStringData = getQueryStringData(city);
    var url = prepURL('weather', queryStringData);
    
    return axios.get(url)
        .then(function (currentWeatherData) {
            console.log(currentWeatherData.data);
        });
}

function getForcast (city) {
    var queryStringData = getQueryStringData(city);
    var url = prepURL('forcast/daily', queryStringData);
    
    return axios.get(url)
        .then(function (forcastData) {
            console.log(forcastData.data);
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForcast: getForcast
};