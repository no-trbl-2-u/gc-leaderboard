const fs = require('fs')
const path = require('path')
const optionalDirectory = process.argv[2]
const { listDirectories } = require('../../utilities.js')

const listOfDirectories = listDirectories(path.join(__dirname, '../.previousTournaments'))

const determinePath = optDir => {
  if(!optionalDirectory){
    return require(path.join(__dirname, `../privateEntries`))
  }
  if(listOfDirectories.includes(optionalDirectory)){
    return require(path.join(__dirname, `../.previousTournaments/${optionalDirectory}/privateEntries`))
  }
  if(optionalDirectory === '-list' || optionalDirectory === '-l'){
    console.log('==================================================')
    console.log('List of All Current Directories')
    console.log('==================================================')
    console.log(listOfDirectories)
    return []
  }else{
    console.log("Directory Doesn't Exist")
  }
}

const formatter = originalEntries => {
  return [...originalEntries]
    .filter(ea => ea.mailingList === 'true')
    .filter(ea => ea.email !== '')
    .map(ea => ({email: ea.email}))
    .map(ea => [ea.email])
    .join('\n')
}

const main = entries => {
  
  // -> Format the [Array] of entries
  const formattedEntry = formatter(entries)

  // -> Double Check Work
  console.log(formattedEntry)

  // -> Commit to filesystem
  // fs.writeFileSync('../emails.txt', formattedEntry);
  // console.log("File properly formatted")
}

main(determinePath(optionalDirectory))
