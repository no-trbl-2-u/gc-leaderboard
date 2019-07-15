// stripEmailsFromSource :: [Entries] -> [Entries]
function stripEmailsFromSource(originalEntries) {
  return [...originalEntries]
    .filter(ea => ea.mailingList === 'true' && ea.email !== '')
    .map(ea => ({email: ea.email}))
    .map(ea => [ea.email])
    .join('\n')
}


//____________________ Test Case __________________________________
// const { randomPrivateEntries } = require('../../utilities');
// console.log(stripEmailsFromSource(randomPrivateEntries));
//_________________________________________________________________

module.exports = { stripEmailsFromSource }
