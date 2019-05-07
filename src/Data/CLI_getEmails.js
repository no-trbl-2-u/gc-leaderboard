const fs = require('fs');
const originalEntries = require('./privateEntries.json');

const formatter = originalEntries => {
  return originalEntries
    .filter(ea => ea.mailingList === 'true')
    .filter(ea => ea.email !== '')
    .map(ea => ({email: ea.email}))
    .map(ea => [ea.email])
    .join('\n')
};

const main = () => {
  const formattedEntry = formatter(originalEntries);
  console.log(formattedEntry)
  // fs.writeFileSync('emails.txt', formattedEntry);
  // console.log("File properly formatted")
};

main();
