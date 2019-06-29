const fs = require('fs')
const path = require('path')

const publicEntries = [{
  "name": "admin",
  "score": "0",
  "available": "false",
  "song": "Solid Roots AIO"
}];

const entries_backup = [{
  "name": "admin",
  "score": "0",
  "available": "false",
  "song": "Solid Roots AIO"
}];

const privateEntries = [{
  "song": "Solid Roots AIO",
  "score": "0",
  "name": "admin",
  "mailingList": "false",
  "email": "",
  "available": "false",
  "telephone": "0",
  "zip": ""}];

const tournamentEntries = [{"name":"admin", "score":0}];

// TODO:
// Create [{Entry}] forEach->
  // public     -- ../publicEntries.json
  // private    -- ../privateEntries.json
  // backup     -- ../entries_backup.json
  // tournament -- ../tournamentEntries.json
// Write to filesystem each file in src/Data

// main :: WriterIO()
const main = () => {
  
  // -> Commit to filesystem
  // fs.writeFileSync('../emails.txt', formattedEntry);
  console.log("Files rewritten")
}