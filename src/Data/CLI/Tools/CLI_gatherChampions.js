// gatherChampions :: Entries[] => Int => Entries[]
function gatherChampions(sourceEntries, quantity) {
  return [...sourceEntries]
    .sort((a, b) => b.score - a.score)
    .filter(({telephone}) => telephone !== '1234567890' && String(telephone) !== 'undefined')
    .map(({name, score, telephone}, idx) => ({idx: idx + 1, name, score, telephone}))
    .slice(0, quantity)
}

//________________Test Case_______________________
const { randomPrivateEntries } = require('../../utilities');
const topN = 20;
console.log(gatherChampions(randomPrivateEntries, topN));
//________________________________________________

module.exports = { gatherChampions }
