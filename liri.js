
require("dotenv").config();
const keys = require("./key");
const Spotify = require('node-spotify-api');
const axios = require("axios");
const moment = require("moment");

const input = process.argv;
const command = input[2];
console.log(command);
console.log(input);
switch(command){
    case "concert-this":

        break;
    case "spotify-this-song":

        break;
    case "movie-this":

        break;
    case "do-what-it-says":

        break;
    default:
        return undefined;
}









// const spotify = new Spotify(keys.spotify);
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//     console.log(data.tracks.items[1]); 
// });