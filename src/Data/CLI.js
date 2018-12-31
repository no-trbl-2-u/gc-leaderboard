const inquirer = require('inquirer')

// const data = require('./entires.json')


// ADD VALIDATION FUNCTIONS TO MANY
// ADD THE REST OF THE QUESTIONS
// CREATE FUNCTIONS:
//  //  createEntry() -> [newEntries] ** TRY TO USE PIPE?? ** (define yourself)
//  //  addEntry() = await entries.concat(createEntry()) OR entries.concat(newEntries)
//  //  using require('fs') -> Overwrite the original entries.json
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
  }
]


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


async function createEntry () {
  const name = await gatherName();
  const score = await gatherScore();
  const available = await gatherAvailability();
  const telephone = await gatherPhoneNumber();
  const email = await gatherEmail();

  return {
    name,
    score,
    available,
    telephone,
    email
  }
}

async function template (answers) {
  const {name, score, available, telephone, email} = answers
  return (
    `${name}, you scored ${score} points!
    It is ${available} that you can make it.
    Your telephone # is ${telephone} and your
    email is ${email}.
    `
  )
}

async function main () {

  console.log('Welcome to the Groove Catcher Data Entry Tool')

  const entryFull = await createEntry();
  const templateFull = await template(entryFull);
  console.log(templateFull)


  await console.log("main: Program End")
}

main();





// Ask questions
// Accumulate the answers into an object
// Add the object to the structure
// Overwrite old file
// // require('fs') -> sync file write
