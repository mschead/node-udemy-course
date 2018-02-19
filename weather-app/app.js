const request = require('request');

request({
  // Using key from google developer, some changes might be needed!
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyBPHa_STFlfzSDgjPoDOftEX3J_0St0BW4',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});