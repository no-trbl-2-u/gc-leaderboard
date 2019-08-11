const fs = require('fs')
const path = require('path')

const listDirectories = sourcePath => 
  fs
    .readdirSync(sourcePath)
    .filter(f => fs.statSync(path.join(sourcePath, f)).isDirectory())

const emptyPublicEntries = [{
  "name": "admin",
  "score": "0",
  "available": "false",
  "song": "Solid Roots AIO"
}];
const emptyEntries_backup = [{
  "song": "Solid Roots AIO",
  "score": "0",
  "name": "admin",
  "mailingList": "false",
  "email": "",
  "available": "false",
  "telephone": "0",
  "zip": ""}];;
const emptyPrivateEntries = [{
  "song": "Solid Roots AIO",
  "score": "0",
  "name": "admin",
  "mailingList": "false",
  "email": "",
  "available": "false",
  "telephone": "0",
  "zip": ""}];
const emptyTournamentEntries = [{"name":"admin", "score":"0"}];

// Empty entries
const empty = {
  publicEntires: emptyPublicEntries,
  backupEntries: emptyEntries_backup,
  privateEntries: emptyPrivateEntries,
  tournamentEntries: emptyTournamentEntries
}

module.exports = { listDirectories, empty }