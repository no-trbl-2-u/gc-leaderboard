const fs = require('fs');
const originalEntries = require('../privateEntries.json');

const formatter = originalEntries => {
  return [...originalEntries]
    .sort((a, b) => b.score - a.score)
    .filter(ea => ea.available === "true")
    .filter(ea => String(ea.telephone) !== '1234567890' || String(ea.telephone) !== 'undefined')
    .filter((ea, idx) => idx <= 30)
    .map(({name, score, telephone}) => {
      return ({
        name,
        score, 
        telephone
      })
    })
};

// const main = () => {
//   const formattedEntry = formatter(originalEntries);
//   console.log(formattedEntry)
//   fs.writeFileSync('.champions.json', JSON.stringify(formattedEntry));
//   console.log("File properly formatted")
// }

// Testing
[...originalEntries]
  .sort((a, b) => b.score - a.score)
  .filter(ea => ea.telephone !== '1234567890')
  .filter(({telephone}) => String(telephone) !== 'undefined')
  .map(({name, score, telephone}) => ({name, score, telephone}))
  .map((ea, idx) => idx < 20 ? console.log({idx: idx + 1, ...ea}) : null)

// main();
