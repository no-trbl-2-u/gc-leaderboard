const inquirer = require('inquirer');

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

function askAll () {
  return inquirer
    .prompt(questions)
    .then(answers => answers)
}

function checkCorrect () {
  return inquirer
    .prompt(sanityCheck)
    .then(answers => answers.correct)
}

async function createTemplate (answers) {
  const {name, score} = answers
  return (
    `
    Name: ${name}
    Score: ${score} points!
    `
  )
}


async function askQuestions () {
  console.log('=============================================');
  console.log('Groove Catcher Tournament Entry Tool');
  console.log('=============================================');
  console.log('');
  const entryFull = await askAll();
  console.log(await createTemplate(entryFull))

  const correct = await checkCorrect();

  return (correct === String(true)) ? entryFull : askQuestions();
}

// Run
async function createTournamentEntry () {
  return await askQuestions();
}

module.exports = { createTournamentEntry }