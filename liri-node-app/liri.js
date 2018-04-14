require("dotenv").config();

var keys = require("./keys.js");
console.log(keys);


var Twitter = require('twitter');
 
var client = new Twitter(keys.twitter);
 
var params = {screen_name: 'jessicazimel'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  
});

var Spotify = require('node-spotify-api');
var inquirer = require('inquirer');
require("dotenv").config();

var spotify = new Spotify({
  id: ('jesszimel'),
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err);
  })
