const yargs = require('yargs'); //module for collecting user input from the terminal
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        //making weather call with coordinates
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`it's ${weatherResults.icon}, the temperature is currently ${weatherResults.temperature} degrees`);
            }
        });
    }
});

