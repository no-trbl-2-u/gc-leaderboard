const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { listDirectories } = require('../utilities');
const flag = process.argv[2];

const currentPrivateEntries = require('../privateEntries.json');

// From Tools
const { createEntry } = require('./Tools/CLI_data-entry');
const { clearCurrentEntries, backupCurrentEntries } = require('./Tools/CLI_backUpAndClearEntries');
const { stripEmailsFromSource } = require('./Tools/CLI_gatherEmails');
const { gatherChampions } = require('./Tools/CLI_gatherChampions');
const {
  CREATE_ENTRY,
  CREATE_TOURNAMENT_ENTRY,
  LIST_DIRECTORIES,
  BACKUP_AND_CLEAR,
  GATHER_EMAILS,
  GATHER_CHAMPIONS,
  FORBIDDEN_CHARACTERS
} = require('./Tools/CONSTANTS');

// TODO: Write inside utility.js a utility importer for all entries
// TODO:   -> to make database migration much easier

/* 
  TODO: rewrite CREATE_TOURNAMENT_ENTRY
*/

/*
TODO: flags:
  TODO: -h/-help (List all Flags)
  TODO: -ls (List Directories)
  TODO: -e (Create Entry)
  TODO: -backup (backup Entries & clear)
  TODO: -get (getEmails || getChampions)
*/

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
      'Create Entry',
      'Create Tournament Entry',
      'List Directories',
      'Backup and Clear current entries',
      'Gather Emails',
      'Get Champions from current entries'
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
  }
];


function askForAction () {
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
  console.log(option)

  switch(option.action){
    //____________________________________________________________________________

    case CREATE_ENTRY:
      const [originalEntries, publicEntry, privateEntry] = await createEntry();

      fs.writeFileSync('../entries_backup.json', JSON.stringify(originalEntries))
      fs.writeFileSync('../publicEntries.json', JSON.stringify(publicEntry));
      fs.writeFileSync('../privateEntries.json', JSON.stringify(privateEntry));

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
        
    default:
      console.log("Impossible Action")
      break;

    //____________________________________________________________________________
  }
}

async function main() {
  // Print Greeting
  greeting();

  // Acquire option
  const optionChoice = await askForAction();

  // Run action based on option
  await runAction(optionChoice);
}

main();