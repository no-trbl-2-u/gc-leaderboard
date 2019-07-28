const fs = require('fs')
const path = require('path')

const listDirectories = sourcePath => 
  fs
    .readdirSync(sourcePath)
    .filter(f => fs.statSync(path.join(sourcePath, f)).isDirectory())

const randomPrivateEntries = require('./previousTournaments/AWESOMECON/privateEntries.json');

module.exports = { 
  listDirectories,
  randomPrivateEntries,
}