const fs = require('fs');
const originalEntries = require('./entries.json');

const formatter = originalEntries => {
  return originalEntries
    .filter(ea => ea.mailingList === 'true')
    .filter(ea => ea.email !== '')
    .map(ea => ({name: ea.name,email: ea.email}))
    .map(ea => [ea.name, ea.email])
    .join('\n')
};
const main = () => {
  const formattedEntry = formatter(originalEntries);
  console.log(formattedEntry)
  fs.writeFileSync('emails.txt', formattedEntry);
  console.log("File properly formatted")
}

main();
