const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { listDirectories } = require('../utilities');

// import all current Entries && create tournament/backup if inexistent
let currentPrivateEntries = require('../privateEntries.json') || [];
let currentBackupEntries = require('../entries_backup.json') || [];
const currentPublicEntries = require('../publicEntries.json');
const currentTournamentEntries = require('../tournamentEntries.json');

if(currentPrivateEntries === []) {
  console.log('emptyJawn')
}

// From Tools
const { createEntry } = require('./Tools/CLI_data-entry');
const { clearCurrentEntries, backupCurrentEntries } = require('./Tools/CLI_backUpAndClearEntries');
const { stripEmailsFromSource } = require('./Tools/CLI_gatherEmails');
const { gatherChampions } = require('./Tools/CLI_gatherChampions');
const { createUpdatedEntries } = require('./Tools/CLI_updateEntry');
const { createTournamentEntry } = require('./Tools/CLI_tournamentData-entry');
const {
  CREATE_ENTRY,
  CREATE_TOURNAMENT_ENTRY,
  LIST_DIRECTORIES,
  BACKUP_AND_CLEAR,
  GATHER_EMAILS,
  GATHER_CHAMPIONS,
  FORBIDDEN_CHARACTERS,
  UPDATE_ENTRIES
} = require('./Tools/CONSTANTS');

const flagEntered = process.argv[2];


// TODO: Write inside utility.js a utility importer for all entries
// TODO:   -> to make database migration much easier

// TODO: Autogenerate privateEntries.json if not found
// TODO: Autogenerate entries_backup.json if not found


const currentDirectories = listDirectories(path.join(__dirname, '../previousTournaments'))

const greeting = () => {
  console.log('');
  console.log('=============================================');
  console.log('Welcome to the Groove Catcher Command Line Tool');
  console.log('=============================================');
  console.log('');
}

const optionQuestions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      CREATE_ENTRY,
      CREATE_TOURNAMENT_ENTRY,
      LIST_DIRECTORIES,
      BACKUP_AND_CLEAR,
      GATHER_EMAILS,
      GATHER_CHAMPIONS,
      UPDATE_ENTRIES
    ]
  },
  {
    type: 'list',
    name: 'directoryChoice',
    message: 'Which Directory would you like to obtain emails from?',
    choices: ['Current Tournament', ...currentDirectories],
    when: options => options.action === GATHER_EMAILS
  },
  {
    type: 'input',
    name: 'newDirectory',
    message: 'What is the name of the current tournament? (In ALL CAPS, no spaces)',
    when: options => options.action === BACKUP_AND_CLEAR,
    validate: inp => [...inp]
      .filter(letter => 
        letter === letter.toUpperCase()
        && !FORBIDDEN_CHARACTERS.includes(letter)       
      ).join("") === inp
        ? true 
        : 'All Upper Case and no forbidden characters (:, ", /, \\, |, ?, ., *, and spaces.'
  },
  {
    type: 'input',
    name: 'playerNameToUpdate',
    message: 'What is the name of the player who you would like to update?',
    when: options => options.action === UPDATE_ENTRIES
  },
  {
    type: 'input',
    name: 'newHighScore',
    message: 'What is their new high score?',
    when: options => options.action === UPDATE_ENTRIES
  },
];


function askForAction () {
  return inquirer
    .prompt(optionQuestions)
    .then(answers => answers)
}

function askForPlayerAndNewScore () {
  return inquirer
    .prompt(optionQuestions)
    .then(answers => answers)
}

async function doubleCheckDirectoryName(directoryPath) {
  const sanityCheck = {
    type: 'list',
    name: 'correctPath',
    message: `Is ${directoryPath} correct?`,
    choices: ['true', 'false']
  };

  function askSanityCheck() {
    return inquirer
      .prompt(sanityCheck)
      .then(result => result.correctPath);
  }

  return await askSanityCheck(); 
}

async function runAction(option) {
  switch(option.action){
    //____________________________________________________________________________

    case CREATE_ENTRY:
      const [originalEntries, publicEntry, privateEntry] = await createEntry();

      fs.writeFileSync('../entries_backup.json', JSON.stringify(originalEntries))
      fs.writeFileSync('../publicEntries.json', JSON.stringify(publicEntry));
      fs.writeFileSync('../privateEntries.json', JSON.stringify(privateEntry));

      break;

    //____________________________________________________________________________

    case CREATE_TOURNAMENT_ENTRY:
      const newTournEntry = await createTournamentEntry();
      const newTournamentEntries = currentTournamentEntries.concat(newTournEntry)
      // Commit to filesystem
      fs.writeFileSync('../tournamentEntries.json', JSON.stringify(newTournamentEntries));

      break;
    //____________________________________________________________________________

    case BACKUP_AND_CLEAR:
      const sanityResult = await doubleCheckDirectoryName(option.newDirectory);

      if(sanityResult === 'true') {
        backupCurrentEntries(option.newDirectory);
        clearCurrentEntries();
      }else{
        await main();
      }

      break;

    //____________________________________________________________________________

    case LIST_DIRECTORIES:

      console.log(currentDirectories);

      break;

    //____________________________________________________________________________

    case GATHER_EMAILS:

      const { directoryChoice } = option;

      if(directoryChoice === 'Current Tournament') {
        console.log(stripEmailsFromSource(currentPrivateEntries))
      }else{
        const specifiedEntries = require(`../previousTournaments/${directoryChoice}/privateEntries.json`);
        console.log(stripEmailsFromSource(specifiedEntries));
      }

      break;

    //____________________________________________________________________________

    case GATHER_CHAMPIONS:

      console.log(gatherChampions(currentPrivateEntries));

      break;
  
    //____________________________________________________________________________

    //TODO: Create Flag (-update)
    case UPDATE_ENTRIES:
      console.log(option)

      // Choose Player
      const chosenPlayer = option.playerNameToUpdate || '';
      const newHighScore = option.newHighScore || '';

      // Create New Entry from player name
      const updatedPrivateEntries = createUpdatedEntries(chosenPlayer, currentPrivateEntries, newHighScore);
      const updatedPublicEntries = createUpdatedEntries(chosenPlayer, currentPublicEntries, newHighScore);
      const updatedBackupEntries = createUpdatedEntries(chosenPlayer, currentBackupEntries, newHighScore);

      // Write new Entries to file system
      fs.writeFileSync('../privateEntries.json', JSON.stringify(updatedPrivateEntries));
      fs.writeFileSync('../publicEntries.json', JSON.stringify(updatedPublicEntries));
      fs.writeFileSync('../entries_backup.json', JSON.stringify(updatedBackupEntries))
      break;
  
    //____________________________________________________________________________
        
    default:

      console.log("Impossible Action");

      break;

    //____________________________________________________________________________
  }
}

async function main() {
  // Print Greeting
  greeting();

  // flag switch
  switch(flagEntered){
    case '-h':
      console.log("  Current flags include: ");
      console.log(" ");
      console.log('\t-h       --Display a list of all current possible flags');
      console.log('\t-e       --Create Entry in current tournament');
      console.log('\t-t       --Create Tournament Entry for current tournament');
      console.log('\t-l       --List All previous Tournaments/Directories');
      // console.log("\t-update  --Update and a player's entry");      
      console.log('\t-backup  --Backup and Clear current entries');
      console.log('\t-get     --Gather Emails from a directory or current tournament');
      break;
    
    case '-t':
      await runAction({action: CREATE_TOURNAMENT_ENTRY});
      break;

    case '-e':
      await runAction({action: CREATE_ENTRY});
      break;

    case '-l':
      await runAction({action: LIST_DIRECTORIES});
      break;

    // case '-update':
    //   const results = await askForPlayerAndNewScore();
    //   await runAction({action: UPDATE_ENTRIES});
    //   break;

    case '-backup':
      await runAction({action: BACKUP_AND_CLEAR});
      break;
    
    case '-get':
      await runAction({action: GATHER_EMAILS});
      break;
    
    // No Flag or Incorrect Flag run questions
    default:
      const optionChoice = await askForAction();
      await runAction(optionChoice);
  }
}

main();