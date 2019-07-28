const fs = require('fs')
const path = require('path')
const pathToEntries = process.argv[2]

const absoluteEntries = pathToEntries !== undefined 
  ? require(path.join(__dirname, pathToEntries))
  : [] 

const formatter = originalEntries => {
  return [...originalEntries]
    .filter(ea => ea.name.toLowerCase().includes("test"))
    .map(ea => ({name: ea.name, email: ea.email}))
    .map(ea => {console.log("FULL", ea); return ea})
    .map(ea => [ea.email])
    .join('\n')
}

const main = entries => {
  // -> Format the [Array] of entries
  const formattedEntry = formatter(entries)

  // -> Double Check Work
  console.log(formattedEntry)

  // -> Commit to filesystem
  // fs.writeFileSync('testers.txt', formattedEntry);
  // console.log("File properly formatted")
}



if(pathToEntries !== undefined && absoluteEntries !== []){
  main(absoluteEntries)
}else{
  throw new Error("File does not exist")
}