# Weather Forcast App

This is a simple Nodejs and Javascript weather console application that lets you see the weather forcast of any location your provided in the console.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes. 


### Usage

* Clone this repo and extract it to your computer
* Open your terminal and navigate to the directory (make sure you have node installed)
* Type "npm install" on the command prompt to download/install the dependencies
* Type node app.js in the terminal to begin with or type node app-promise.js to use the version implemented with axios and promise
* By typing node app.js -address "provide your location" or node app-promise.js "provide your location", 
  you should see the formatted address and the current temperature and icon of that location

### Commands
* To enter an address/twon or city of a state/any location, type node app.js -address="your address" 



## Built With

* [Nodejs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
* Javascrip

## Dependencies
* [yargs](https://www.npmjs.com/package/yargs) - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
