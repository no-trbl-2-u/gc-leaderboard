const fs = require('fs');


const publicEntries = [{
  "name": "admin",
  "score": "0",
  "available": "false",
  "song": "Solid Roots AIO"
}];

const entries_backup = [{
  "song": "Solid Roots AIO",
  "score": "0",
  "name": "admin",
  "mailingList": "false",
  "email": "",
  "available": "false",
  "telephone": "0",
  "zip": ""}];;

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

// main :: WriterIO()
const main = () => {
  fs.writeFileSync('../entries_backup.json', JSON.stringify(entries_backup))

  fs.writeFileSync('../privateEntries.json', JSON.stringify(privateEntries));
  fs.writeFileSync('../publicEntries.json', JSON.stringify(publicEntries));
  fs.writeFileSync('../tournamentEntries.json', JSON.stringify(tournamentEntries));

  console.log("==============");
  console.log("Files Emptied");
  console.log("==============");
}

main();