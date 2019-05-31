const inquirer = require('inquirer');
const fs = require('fs');

const originalEntries = require('../privateEntries.json');


const questions = [
  {
    type: 'list',
    name: 'song',
    message: 'Which Song was just played?',
    choices: ['Solid Roots AIO', 'On Taobh AIO']
  },
  {
    type: 'input',
    name: 'score',
    message: 'What did they score?',
    validate: value => (value <= 100000) ? true : 'Impossible Score'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is their full name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their Email?'
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
    message: 'What is their Phone Number?',
    when: value => {
      const available = value.available === 'true'
      const solidRootsAOI = value.song === 'Solid Roots AIO' && value.score > 90000
      const onTaobhAOI = value.song === 'On Taobh AIO' && value.score > 80000

      return (available && solidRootsAOI) ||(available && onTaobhAOI)
    },
    validate: value => {
      const isDigitOnly = new RegExp(/^([0-9])*$/).test(value)
      const isCorrectLength = value.length === 10
      return isDigitOnly && isCorrectLength ? true : 'Incorrect Format' 
    }
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

// All questions
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

// Sanity Checker Template (Expects Promise)
async function createTemplate (answers) {
  const {name, score, available, telephone, email, mailingList, song} = answers
  return (
    `
    Name: ${name}
    Song: ${song}
    Score: ${score} points!
    They ${available === "true" ? "are" : "aren't"} available for the tournament.
    Telephone: ${telephone}
    Email: ${email}
    They ${mailingList === "true" ? "would" : "would not"} like to be on the mailing list.
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
  
  // Create Template
  console.log(await createTemplate(entryFull))

  // Sanity Check results
  const correct = await checkCorrect();

  // Pass along the entry or recursivly ask these questions again
  return (correct === 'true') ? entryFull : askQuestions();
}


// Run
async function main () {
  const results = await askQuestions();

  // const backUp = originalEntries
  const privateEntry = originalEntries.concat(results)
  const safeEntry = privateEntry.map(
    ea => ({
      name: ea.name,
      score: ea.score,
      available: ea.available,
      song: ea.song
    })
  )
  
  // Create Backup
  fs.writeFileSync('../entries_backup.json', JSON.stringify(originalEntries))

  // Publish public scoring info
  fs.writeFileSync('../publicEntries.json', JSON.stringify(safeEntry));

  // Finalize private entries
  fs.writeFileSync('../privateEntries.json', JSON.stringify(privateEntry));

  console.log("Entry Successfully added!")
}


main();
