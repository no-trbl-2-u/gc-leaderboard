# Groove Catcher
This repo is dedicated to collecting and showcasing high scores for Groove Catcher VR

## To get Started:

***You will need to install ``` node``` / ```npm``` in order to run the site locally in a "dev" environment and to use the CLI tool***

```sh
git clone https://github.com/no-trbl-2-u/gc-leaderboard.git
npm install
```
```npm install``` installs all the dependencies ( locally ) that will be needed to run the site.

## To start up the site locally
Make sure you're in ```/gc-leaderboard``` and **NOT** in a child folder like ```/gc-leaderboard/src```
```
npm start
```

## To add an entry (normal)
```sh
cd gc-leaderboard/src/Data

node CLI_data-entry.js
```
This starts up the familiar questionnaire and will only update the basic "privateEntries.json

## To add an entry (final round)
```sh
cd gc-leaderboard/src/Data

node CLI_tournament-final.js
```

## To manually edit an entry

* Open the ```publicEntries.json``` and/or
* Open the ```privateEntries.json```
* Manually change the data of your most recent entries.

## To show the final Tournament scoreboard
*The scoreboard dedicated to showing the tournament winners' scores.*
* Open ```App.tsx```

* Uncomment the line that reads
```<TournLeaderBoard entries= {tournEntries} />```
### Commented out
```ts
            {/* TOURNAMENT LEADERBOARD */}
      {/* <TournLeaderBoard entries= {tournEntries } /> */}
```

### Uncommented out
```ts
            {/* TOURNAMENT LEADERBOARD */}
      <TournLeaderBoard entries= {tournEntries } />
```

## To show all the scores collected so far
* Open App.tsx
* Uncomment the line that reads ```<AllScores entries={ entries } />```

### Commented out
``` ts
  {/* ALL THE SCORES ACCUMULATED SO FAR */}
  {/* <AllScores entries={ entries } /> */}
```

### Uncommented
``` ts
  {/* ALL THE SCORES ACCUMULATED SO FAR */}
  <AllScores entries={ entries } />
```

## To change any of the Tournament Text
All of the tournament information is located inside the ```<TournamentText />``` component.

```sh
cd gc-leaderboard/src/TournamentText
```

Now just Change any of the text within the HTML to fit your tournament.

```jsx
import React from 'react';

export default function TournamentText () {
    return (
      <section className="TournamentText-container">
        <div className="TournamentText">

        {/* Change the Text Below This Part */}
          
          <h2>Leaderboard Contest Today </h2>
          <h1>Finale at 7pm - $200 in Prizes</h1>
          
          <div>Play and put your score on the leaderboard by 6.30pm.</div>
          <div>2d & 3rd places - Groove Catcher T-shirt.</div>
          <div>Top 5 players will compete at 7pm on a new level.</div>
        
          <h2>Top Prize: Synchrony LEDs - music-reactive lights ($150 value)</h2> 
          <h3>T-shirts for top 3</h3>
          <div>Follow your score: <span className="twitter">vizmoo.com/vrfest</span>

        {/* Change the Text Above This Part */}

        </div>

        </div>
      </section>
    );
}
```
*Hint: **h1,h2,h3** are for "HEADERS"*

*Hint: **div**s are for raw-text*
