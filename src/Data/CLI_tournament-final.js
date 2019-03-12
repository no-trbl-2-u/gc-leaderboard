const inquirer = require('inquirer');
const fs = require('fs');

const tournEntries = require('./tournamentEntries.json');


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
  const {name, score} = answers
  return (
    `
    Name: ${name}
    Score: ${score} points!
    `
  )
}


// Top-level abstraction
async function askQuestions () {
  console.log('=============================================');
  console.log('Welcome to the Groove Catcher Tournament Entry Tool');
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

  const privateEntry = tournEntries.concat(results)
  const publicEntry = privateEntry.map(ea => ({name: ea.name, score: ea.score, available: ea.available}))
  
  // Create Backup
  fs.writeFileSync('tournamentEntries_backup.json', JSON.stringify(tournEntries))

  // Finalize entries
  fs.writeFileSync('tournamentEntries-private.json', JSON.stringify(privateEntry));
  fs.writeFileSync('tournamentEntries-public.json', JSON.stringify(publicEntry));

  console.log("Entry Successfully added!")
}

main();
