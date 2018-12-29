const inquirer = require('inquirer')

// const data = require('./entires.json')

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
    validate: function(value) {
      if(value <= 1000){
        return true
      }else{
        return 'Impossible Score'
      }
    }
  },
  {
    type: 'list',
    name: 'available',
    message: 'Are they available to participate in the tournament?',
    choices: ['true', 'false']
  },
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
    .then(answers => Boolean(answers.available))
}


async function main () {

  const name = await gatherName();
  const score = await gatherScore();
  const available = await gatherAvailability();

  console.log(`
    ${name}, you scored ${score} points!
    It is ${available} that you can make it.
  `)
  console.log("main: Program End")
}

main();





// Ask questions
// Accumulate the answers into an object
// Add the object to the structure
// Overwrite old file
// // require('fs') -> sync file write
