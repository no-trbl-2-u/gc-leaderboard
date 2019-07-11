const fs = require('fs');

// clearCurrentEntries :: Writer IO()
function clearCurrentEntries() {
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
  
  fs.writeFileSync('../entries_backup.json', JSON.stringify(emptyEntries_backup))
  fs.writeFileSync('../privateEntries.json', JSON.stringify(emptyPrivateEntries));
  fs.writeFileSync('../publicEntries.json', JSON.stringify(emptyPublicEntries));
  fs.writeFileSync('../tournamentEntries.json', JSON.stringify(emptyTournamentEntries));

  console.log("==============");
  console.log("Files Emptied");
  console.log("==============");
}

// backupCurrentEntries :: String -> WriteDirectory IO()S
function backupCurrentEntries(newDirectory) {
  // Current Entries (Path based from THIS directory)
  const currentEntries_Backup = require('../../entries_backup.json');
  const currentPublicEntries = require('../../publicEntries.json');
  const currentPrivateEntries = require('../../privateEntries.json');
  const currentTournamentEntries = require('../../tournamentEntries.json');
  
  // New Directory
  fs.mkdirSync(`../previousTournaments/${newDirectory}`);

  // Backup All Entries into new directory (Path based on Directory from ../CLI_main.js())
  fs.writeFileSync(`../previousTournaments/${newDirectory}/entries_backup.json`, JSON.stringify(currentEntries_Backup));
  fs.writeFileSync(`../previousTournaments/${newDirectory}/publicEntries.json`, JSON.stringify(currentPublicEntries));
  fs.writeFileSync(`../previousTournaments/${newDirectory}/privateEntries.json`, JSON.stringify(currentPrivateEntries));
  fs.writeFileSync(`../previousTournaments/${newDirectory}/tournamentEntries.json`, JSON.stringify(currentTournamentEntries));
}


module.exports = {
  clearCurrentEntries,
  backupCurrentEntries
}