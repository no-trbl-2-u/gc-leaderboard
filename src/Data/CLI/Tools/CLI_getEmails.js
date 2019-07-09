const fs = require('fs')
const path = require('path')

const specificDirectory = process.argv[2]

const { listDirectories } = require('../../utilities.js')
const listOfDirectories = listDirectories(path.join(__dirname, '../.previousTournaments'))

const printDirectories = listOfDirs => {
  console.log('==================================================')
  console.log('List of All Current Directories')
  console.log('==================================================')
  console.log(listOfDirs)
}

// determinePath :: String -> Either([Entries], [])
const determinePath = (specificDirectory = "", currentDirectory) => { 
  // Current Entries
  if(!specificDirectory){
    return require(path.join(__dirname, `../privateEntries`))
  }
  // Specific Directory
  if(listOfDirectories.includes(specificDirectory)){
    return require(path.join(__dirname, `../.previousTournaments/${specificDirectory}/privateEntries`))
  }

  else{
    console.log("Directory Doesn't Exist")
    return []
  }
}

// formatter :: [Entries] -> [Entries]
const formatter = originalEntries => {
  return [...originalEntries]
    .filter(ea => ea.mailingList === 'true' && ea.email !== '')
    .map(ea => ({email: ea.email}))
    .map(ea => [ea.email])
    .join('\n')
}

// main :: [Entries] -> Either(IO(), WriterMonad())
const gatherEmails = entries => {
  
  // -> Format the [Array] of entries
  const formattedEntry = formatter(entries)

  // -> Double Check Work
  return formattedEntry
}

// gatherEmails(determinePath(specificDirectory))
module.exports = {
  listOfDirectories,
  printDirectories, 
}
