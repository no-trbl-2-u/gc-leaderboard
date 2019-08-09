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

## To add an entry (normal or tournament)
```sh
cd gc-leaderboard/src/Data

node CLI_main.js
```
**Create Entry** (for normal)

**Create Tournament Entry** (for Tournament)

*This starts up the familiar questionnaire to begin a specific task*

## To manually edit an entry

```sh
cd gc-leaderboard/src/Data

node CLI_main.js
```
**Update a player's score**

*It will then ask for the name of the player (Not Case Sensetive)*

**Try to avoid this unless the player is in the top ten**

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

## To Change the Event Title
Inside of: src/Components/Layouts/LayoutScore.jsx

```ts
...
  export default function LayoutScores(props: ScoreProps) {

  // SET YOUR EVENT TITLE HERE!
  const event: string = "Put your event title here!!!"

...
```

**IMPORTANT!!!**
If you delete the quotation marks around the sentence, **THE SITE WILL BREAK!!!**

## To Move to the next round of the final tournament
Manually delete the score inside of Tournament

## To change any of the Tournament Text
All of the tournament information is located inside the ```<TournamentText />``` component.

```sh
cd gc-leaderboard/src/TournamentText
```

Now just Change any of the text within the HTML to fit your tournament.

***For Ease of use, I wrote in some filler options. You will only need to uncomment out the line to show it on the site.***

```jsx
import React from 'react';

export default function TournamentText () {
    return (
      <section className="TournamentText-container">
        <div className="TournamentText">

        {/* ----------- Change the Text Below This Part ----------- */}

        {/* Details for Tournament Placement (Fri-Sat) */}
        {/* <div style={style}>The top 5 Scores by 8PM Tonight will participate in our final round with our most difficult level</div> */}
        {/* <h2 style={style}>Be here by 8:00PM to participate</h2> */}

        {/* Details for Tournament Placement (Sunday) */}
        <h3 style={styles.text}>Highest Score by 4PM</h3>
        <h3 style={styles.text}>will win a free Groove Catcher T-Shirt!</h3>
                

        {/* First Prize */}
        {/* <h2>First Prize will be a $50 Amazon Gift Card</h2> */}
        
        {/* ----- OR -----*/}
        {/* <h2>First Prize will receive Synchrony LED lights</h2> */}
        {/* <div>The world's most advanced neural synch technology ($150 value)</div> */}
       
        {/* Second and Third Prize */}
        {/* <h3>Second and Third Place will receive Groove Catcher T-Shirts</h3> */}


        {/* ----------- Change the Text Above This Part ---------== */}

        </div>

        </div>
      </section>
    );
}
```
*Hint: **h1,h2,h3** are for "HEADERS"*

*Hint: **div**s are for raw-text*


## To edit the "TITLE" of the event...
Travel to gc-leaderboard/src/Layouts/LayoutScores.tsx and
track down this line of code:
```js
// SET YOUR EVENT TITLE HERE!
const event = 'Groove Catcher VR 2019'
// SET THE EVENT TITLE ABOVE!
```

Now just change the value of 'event' to be the TITLE of your choice.

*Keep Text inside of the apostrophe's to prevent any errors.*

```js
// SET YOUR EVENT TITLE HERE!
const event = 'YOUR NEW TITLE!'
// SET THE EVENT TITLE ABOVE!
```
