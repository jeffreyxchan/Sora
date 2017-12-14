# Sora

Demo the final product here: [Sora](http://jeffreyxchan.github.io/Sora "Sora")

## Description

A weather app built with **React.js** and **Webpack** that uses the [Open Weather API](http://openweathermap.org/api "Open Weather API") to display the weather forecast of any city within the next five days.

## Setting up the Webpack Development Environment

Run `npm install` to install this project's dependencies.  
Run `npm run start` to start the webpack development environment.  
Visit `localhost:8080` to view this project.

Note: The Open Weather API requires an API key.
Obtain an API key and place it within /app/utilities/development.js

```
// development.js example

module.exports = {
  OPEN_WEATHER_API_KEY: 'my_key'
}
```
