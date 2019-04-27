const fs = require('fs');
const originalEntries = require('./privateEntries.json');

const formatter = originalEntries => {
  return [...originalEntries]
    .sort((a, b) => b.score - a.score)
    .filter(ea => ea.available === "true")
    .filter((ea, idx) => idx <= 15)
    .map(({name, score, telephone, email}) => {
      return ({
        name,
        score, 
        telephone,
        email
      })
    })
};
const main = () => {
  const formattedEntry = formatter(originalEntries);
  console.log(formattedEntry)
  fs.writeFileSync('champions.json', JSON.stringify(formattedEntry));
  console.log("File properly formatted")
}

main();
