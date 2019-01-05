const fs = require('fs');
const originalEntries = require('./entries.json');

const scoreFormatter = originalEntries => {
  return originalEntries
    .map(ea => (
      {
        name: ea.name,
        score: (Number(ea.score) * 100) + 50,
        available: ea.available,
        telephone: ea.telephone,
        email: ea.email,
        mailingList: ea.mailingList
      }
    ))
};
const main = () => {
  const formattedEntry = scoreFormatter(originalEntries);
  console.log(formattedEntry)
  fs.writeFileSync('entries.json', JSON.stringify(formattedEntry));
  console.log("File properly formatted")
}

main();
