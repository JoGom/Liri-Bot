# Liri-Bot

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Instructions
LIRI consists of four commands:
1. **node liri.js concert-this <artist/band name here>**
    this will search the Bands in Town Artist Events API for an artist and render the following information:
    - Name of the venue
    - Venue location
    - Date of the Event (use moment to format this as "MM/DD/YYYY")

2. **node liri.js spotify-this-song <song name here>**
    This will utilize the node-spotify-api package in order to retrieve song information from the Spotify API and show the following information about the song in your terminal/bash window:
    - Artist(s)
    - The song's name
    - A preview link of the song from Spotify
    - The album that the song is from

3. **node liri.js movie-this <movie name here>**
    This will use the axios package to retrieve data from the OMDB API and show the following information about the song in your terminal/bash window:
    - Title of the movie.
    - Year the movie came out.
    - IMDB Rating of the movie.
    - Rotten Tomatoes Rating of the movie.
    - Country where the movie was produced.
    - Language of the movie.
    - Plot of the movie.
    - Actors in the movie.

4. **node liri.js do-what-it-says**
     LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

## Examples
1. Search for an artist's or band's concert
![DEMO](/images/concertThis.PNG)
2. Search for a song on Spotify
![DEMO](/images/spotifyThis.PNG)
If there is no song specified if is filled with a default song
![DEMO](/images/SpotifyNoInput.PNG)

