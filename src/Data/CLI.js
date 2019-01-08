const inquirer = require('inquirer');
const fs = require('fs');

const originalEntries = require('./privateEntries.json');


const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is their full name?'
  },
  {
    type: 'input',
    name: 'score',
    message: 'What did they score?',
    validate: value => (value <= 100000) ? true : 'Impossible Score'
  },
  {
    type: 'list',
    name: 'available',
    message: 'Are they available to participate in the tournament?',
    choices: ['true', 'false']
  },
  {
    type: 'input',
    name: 'telephone',
    message: 'What is their Phone Number?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their Email?'
  },
  {
    type: 'list',
    name: 'mailingList',
    message: 'Would they like to be on the mailing list?',
    choices: ['true', 'false']
  },
];

const sanityCheck = {
    type: 'list',
    name: 'correct',
    message: 'Are you certain of this entry?',
    choices: ['true', 'false']
}

// All encompessing questions
function askAll () {
  return inquirer
    .prompt(questions)
    .then(answers => answers)
}

// Sanity checker
function checkCorrect () {
  return inquirer
    .prompt(sanityCheck)
    .then(answers => answers.correct)
}

// Insanity Checker Template (Expects Promise)
async function createTemplate (answers) {
  const {name, score, available, telephone, email, mailingList} = answers
  return (
    `
    Name: ${name}
    Score: ${score} points!
    They ${available ? "are" : "aren't"} available for the tournament.
    Telephone: ${telephone}
    Email: ${email}
    They ${mailingList ? "would" : "would not"} like to be on the mailing list.
    `
  )
}


// Top-level abstraction
async function askQuestions () {
  console.log('');
  console.log('=============================================');
  console.log('Welcome to the Groove Catcher Data Entry Tool');
  console.log('=============================================');
  console.log('');
  const entryFull = await askAll();
  console.log(await createTemplate(entryFull))

  const correct = await checkCorrect();

  return (correct === String(true)) ? entryFull : askQuestions();
}

// Run
async function main () {
  const results = await askQuestions();

  const privateEntry = originalEntries.concat(results)
  const safeEntry = privateEntry.map(ea => ({name: ea.name, score: ea.score}))
  
  // Create Backup
  fs.writeFileSync('entries_backup.json', JSON.stringify(originalEntries))

  // Publish public scoring info
  fs.writeFileSync('publicEntries.json', JSON.stringify(safeEntry));

  // Finalize private entries
  fs.writeFileSync('privateEntries.json', JSON.stringify(privateEntry));

  console.log("Entry Successfully added!")
}

main();
