
require("dotenv").config();
const keys = require("./key");
const Spotify = require('node-spotify-api');
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

const input = process.argv;
const command = input[2];
    console.log(command);
    console.log(input);
let commandParam = process.argv.slice(3).join(" ");;

// const parametersOmdb = function(){
//     for (let i = 3; i < input.length; i++) {
//         if (i > 3 && i < input.length) {
//           commandParam = commandParam + "+" + input[i];
//         }
//         else {
//           commandParam += input[i];   
//         }
//       }      
// }
// const parametersBands = function(){
//     for (let i = 3; i < input.length; i++) {
//         if (i > 3 && i < input.length) {
//           commandParam = commandParam + "%20" + input[i];
//         }
//         else {
//           commandParam += input[i];   
//         }
//       }      
// }
// const parametersNpm = function(){
//     for (let i = 3; i < input.length; i++) {
//         if (i > 3 && i < input.length) {
//           commandParam = commandParam + " " + input[i];
//         }
//         else {
//           commandParam += input[i];   
//         }
//       }      
//}  
// parametersNpm();
// console.log(commandParam);
const eventInfo = function(){
    let queryUrl = "https://rest.bandsintown.com/artists/"+commandParam+"/events?app_id=codingbootcamp"
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            console.log(`\n*** Showing event results for ${commandParam} ***\n`);
            for(let i = 0; i < response.data.length; i++){
            console.log(`Name of Venue: ${response.data[i].venue.name}\n--`);
            console.log(`Venue Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}\n--`);
            console.log(`Date of Event: ${moment(response.data[0].datetime).format('MM/DD/YYYY')}`);
            console.log("========================")
            };
        });    
};







switch(command){
    case "concert-this":
        eventInfo();
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