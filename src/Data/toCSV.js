const fs = require('fs');
const originalEntries = require('./entries.json');

const formatter = (originalEntries, scoreThreshold) => {
  return originalEntries
    .map(ea => (
      {name: ea.name, score: ea.score, telephone: ea.telephone, email: ea.email}
    ))
    .sort((a, b) => b.score - a.score)
    .filter(ea => ea.score > scoreThreshold)
    .map(ea => [ea.name, ea.score, ea.telephone, ea.email])
    .join('\n')
};
const main = () => {
  const formattedEntry = formatter(originalEntries, 950);
  console.log(formattedEntry)
  fs.writeFileSync('topScores.txt', formattedEntry);
  console.log("File properly formatted")
}

main();
