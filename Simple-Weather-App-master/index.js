
const request = require('request');
const argv = require('yargs').argv;

let apiKey = '9404aa4a00622165c142b697ff96d61f';
let city = argv.c || 'portland';
//let city = 'bergenfield';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    
      let weather = JSON.parse(body);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});