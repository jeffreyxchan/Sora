var axios = require('axios')

var _baseURL = 'http://api.openweathermap.org/data/2.5/'
var _APIKEY = require('./development.js').OPEN_WEATHER_API_KEY

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(function(key) {
      return key + '=' + encodeURIComponent(queryStringData[key])
    })
    .join('&')
}

function prepURL(type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData)
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather(city) {
  var queryStringData = getQueryStringData(city)
  var url = prepURL('weather', queryStringData)

  return axios.get(url).then(function(currentWeatherData) {
    return currentWeatherData.data
  })
}

function getForecast(city) {
  var queryStringData = getQueryStringData(city)
  var url = prepURL('forecast/daily', queryStringData)

  return axios.get(url).then(function(forecastData) {
    return forecastData.data
  })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}
