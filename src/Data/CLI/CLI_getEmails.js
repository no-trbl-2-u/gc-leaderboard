const fs = require('fs')
const path = require('path')
const pathToEntries = process.argv[2]

const absoluteEntries = pathToEntries !== undefined 
  ? require(path.join(__dirname, pathToEntries))
  : [] 

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
  fs.writeFileSync('emails.txt', formattedEntry);
  console.log("File properly formatted")
}


if(pathToEntries !== undefined && absoluteEntries !== []){
  main(absoluteEntries)
}else{
  throw new Error("File does not exist")
}