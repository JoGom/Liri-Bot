
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

const eventInfo = function(){
    let queryUrl = "https://rest.bandsintown.com/artists/"+commandParam+"/events?app_id=codingbootcamp"
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            if(response.data.length === 0){
                console.log(`\n*** No upcoming events for ${commandParam} ***\n`);
            }
            else{
            console.log(`\n*** Showing event results for ${commandParam} ***\n`);
            for(let i = 0; i < response.data.length; i++){
            console.log(`Name of Venue: ${response.data[i].venue.name}\n--`);
            console.log(`Venue Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}\n--`);
            console.log(`Date of Event: ${moment(response.data[0].datetime).format('MM/DD/YYYY')}\n`);
            console.log("========================");
            };
            };
        
        });    
};

const spotifyInfo = function(){
    spotify = new Spotify(keys.spotify);
    if(!commandParam){
        commandParam = "The Sign Ace of Base"
    }
    spotify.search({ type: 'track', query: commandParam, limit: 3 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for(let i = 0; i < data.tracks.items.length; i++){
            let x = data.tracks.items[i];
            console.log(`\n*** Showing song results for ${commandParam} ***\n`);
            console.log(`Artist(s): ${x.artists[0].name}\n--`);
            console.log(`Song Name: ${x.name}\n--`);
            console.log(`Preview Song: ${x.preview_url}\n--`);
            console.log(`From Album: ${x.album.name}\n`); 
            console.log("========================");
        }
        
      });
}

const movieInfo = function(){
    let queryUrl = "http://www.omdbapi.com/?t=" + commandParam + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            let x = response.data;
            if(!commandParam){
                commandParam = "Mr. Nobody";
                movieInfo();
            }
            else{
            console.log(`\n*** Showing movie results for ${commandParam} ***\n`);
            console.log(`Movie Title: ${x.Title}\n--`);
            console.log(`Year: ${x.Year}\n--`);
            console.log(`IMDB Rating: ${x.imdbRating}\n--`);
            console.log(`Rotten Tomatoes Rating: ${x.Ratings[1].Value}\n--`);
            console.log(`Country Produced: ${x.Country}\n--`);
            console.log(`Movie Language: ${x.Language}\n--`);
            console.log(`Plot: ${x.Plot}\n--`);
            console.log(`Actors: ${x.Actors}\n`);
            console.log("========================");  
            }
        });    
}



switch(command){
    case "concert-this":
        eventInfo();
        break;
    case "spotify-this-song":
        spotifyInfo();
        break;
    case "movie-this":
        movieInfo();
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