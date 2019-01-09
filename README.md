# Groove Catcher
This repo is dedicated to collecting and showcasing high scores for Groove Catcher

## To get Started:

***You will need to install ``` node``` or ```yarn``` in order to run the site locally in a "dev" environment and to use the CLI tool***

```sh
git clone https://github.com/no-trbl-2-u/gc-leaderboard.git
yarn install
```
```yarn install``` installs all the dependencies ( locally ) that will be needed to run the site.

*To the best of my knowledge, you can use ```yarn install``` or ```npm install```  but yarn is better for this particular repo.*

## To start up the site locally
Make sure you're in ```/gc-leaderboard``` and **NOT** in a child folder like ```/gc-leaderboard/src```
```
yarn start
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

node tournament-final.js
```