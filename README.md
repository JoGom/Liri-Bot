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
    