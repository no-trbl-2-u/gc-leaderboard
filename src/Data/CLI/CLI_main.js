const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { listDirectories } = require('../utilities');
const flag = process.argv[2];
const currentPrivateEntries = require('../privateEntries.json');

// From Tools
const { createEntry } = require('./Tools/CLI_data-entry');
const { clearCurrentEntries, backupCurrentEntries } = require('./Tools/CLI_backUpAndClearEntries');
const {
  CREATE_ENTRY,
  CREATE_TOURNAMENT_ENTRY,
  LIST_DIRECTORIES,
  BACKUP_AND_CLEAR,
  GATHER_EMAILS,
  GATHER_CHAMPIONS
} = require('./Tools/CONSTANTS');

/*
TODO: flags:
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
    validate: inp => [...inp].filter(eachLetter => eachLetter.toUpperCase()) === inp
  }
];

function askForAction () {
  return inquirer
    .prompt(optionQuestions)
    .then(answers => answers)
}

async function runAction(option) {
  console.log(option)

  switch(option.action){
    // Create Entry -- Finished
    case CREATE_ENTRY:
      const [originalEntries, publicEntry, privateEntry] = await createEntry();
      // UNCOMMENT WHEN MERGED
      // fs.writeFileSync('../entries_backup.json', JSON.stringify(originalEntries))
      // fs.writeFileSync('../publicEntries.json', JSON.stringify(publicEntry));
      // fs.writeFileSync('../privateEntries.json', JSON.stringify(privateEntry));
      break;

    case BACKUP_AND_CLEAR:
      
      break;
    
    default:
      break;
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