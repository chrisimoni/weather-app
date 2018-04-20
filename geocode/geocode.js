const request = require('request'); //module for making http request
const apiKey = 'AIzaSyBM_rkUE20_0BUt9eL-NQFOPkYr4nbEq0o'; //Your Google API KEY goes here

var geocodeAddress = (address, callback) => {
    //encoding the inputed address from the terminal
    var encodedAddress = encodeURIComponent(address);

    //making a HTTP request to the google api to fetch the address, longtitude and latitude cordinates
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        //checking for errors
        if(error){
            callback('Unable to connect to Google servers');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address');
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};
// 8f0e62c8d2da177b5602614d5a366fe8
module.exports.geocodeAddress = geocodeAddress;