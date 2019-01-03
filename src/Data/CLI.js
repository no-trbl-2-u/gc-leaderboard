const inquirer = require('inquirer');
const fs = require('fs');

const originalEntries = require('./entries.json');


const questions = [
  {
    type: 'input',
    name: 'fullName',
    message: 'What is their full name?'
  },
  {
    type: 'input',
    name: 'score',
    message: 'What did they score?',
    validate: value => (value <= 1000) ? true : 'Impossible Score'
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

// Individual Questions (All Return Promises)
function gatherName () {
  return inquirer
    .prompt(questions[0])
    .then(answers => String(answers.fullName))
}

function gatherScore () {
  return inquirer
    .prompt(questions[1])
    .then(answers => Number(answers.score))
}

function gatherAvailability () {
  return inquirer
    .prompt(questions[2])
    .then(answers => answers.available)
}

function gatherPhoneNumber () {
  return inquirer
    .prompt(questions[3])
    .then(answers => String(answers.telephone))
}

function gatherEmail () {
  return inquirer
    .prompt(questions[4])
    .then(answers => String(answers.email))
}

function gatherMailing () {
  return inquirer
    .prompt(questions[5])
    .then(answers => answers.mailingList)
}


// Sanity checker
function checkCorrect () {
  return inquirer
    .prompt(sanityCheck)
    .then(answers => answers.correct)
}

// Composed Questions
async function createEntry () {
  const name = await gatherName();
  const score = await gatherScore();
  const available = await gatherAvailability();
  const telephone = await gatherPhoneNumber();
  const mailingList = await gatherMailing();
  const email = await gatherEmail();

  return {
    name,
    score,
    available,
    telephone,
    mailingList,
    email,
  }
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
  console.log('Welcome to the Groove Catcher Data Entry Tool')

  const entryFull = await askAll();
  console.log(await createTemplate(entryFull))

  const correct = await checkCorrect();

  return (correct === String(true)) ? entryFull : askQuestions();
}

// Run
async function main () {
  const results = await askQuestions();

  const newEntry = originalEntries.concat(results)
  
  // Create Backup
  fs.writeFileSync('entries_backup.json', JSON.stringify(originalEntries))

  // Finalize entry
  fs.writeFileSync('entries.json', JSON.stringify(newEntry));

  console.log("Entry Successfully added!")
}

main();
