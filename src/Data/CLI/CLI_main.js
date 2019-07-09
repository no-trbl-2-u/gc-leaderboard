const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { listDirectories } = require('../utilities');
const flag = process.argv[2];

// Current Entries
const currentPrivateEntries = require('../privateEntries.json');

/*
TODO: flags:
  TODO: -ls (List Directories)
  TODO: -e (Create Entry)
  TODO: -backup (backup Entries & clear)
  TODO: -get (getEmails || getChampions)
*/

const currentDirectories = listDirectories(path.join(__dirname, '../.previousTournaments'))

const greeting = () => {
  console.log('');
  console.log('=============================================');
  console.log('Welcome to the Groove Catcher Command Line Tool');
  console.log('=============================================');
  console.log('');
}

// NOTE: use "when" to get specific information before triggering an action
const optionQuestions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'Add Entry',
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
    when: options => options.action === 'Gather Emails'
  }
];

function askForAction () {
  return inquirer
    .prompt(optionQuestions)
    .then(answers => answers)
}
// const runAction = action => {
//   switch(action){
//   }
// }

async function main() {
  greeting();
  const optionChoice = await askForAction();
  await console.log(optionChoice);
}

main();