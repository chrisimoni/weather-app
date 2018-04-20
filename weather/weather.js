const request = require('request'); //module for making http request

var getWeather = (lat, lng, callback) => {
    //making http request to darksky api with lat and lng
    request({
        url: `https://api.darksky.net/forecast/8f0e62c8d2da177b5602614d5a366fe8/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            //callback function for success
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature,
                icon: body.currently.icon
            });
        }else{
            //callback function for displaying errors
            callback('Unable to fetch weather');
        }
        
    });
};

module.exports.getWeather = getWeather;
