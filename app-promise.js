/*
* Using axios library and Javascript promise
*/

const yargs = require('yargs'); 
const axios = require('axios');
const apiKey = 'AIzaSyBM_rkUE20_0BUt9eL-NQFOPkYr4nbEq0o'; //Your Google API KEY goes here
//setting up all the command options
const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`;

//Making a http get request with axios
axios.get(geocodeUrl).then((response) => {
    //throw error to the catch handler if an error occur
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/8f0e62c8d2da177b5602614d5a366fe8/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var icon = response.data.currently.icon;
    console.log(`it's ${icon}, the temperature is currently ${temperature} degrees`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    }else{
        console.log(e.message);
    }
});
