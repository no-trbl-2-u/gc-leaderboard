function createUpdatedEntries (playerToUpdate, currentEntries, newHighScore) {
  // Remove all their scores
  const entriesWithoutPlayerScores = 
    currentEntries
      .filter(eachEntry => 
        eachEntry.name.toLowerCase() !== playerToUpdate.toLowerCase()
      );
  
  // Grab the player's scores
  const currentPlayersScores = 
    [...currentEntries]
      .filter(eachEntry =>
        eachEntry.name.toLowerCase() === playerToUpdate.toLowerCase()    
      ).sort((a, b) => b.score - a.score);

  // Update their top score
  const playersTopScore = currentPlayersScores[0];
  playersTopScore.score = newHighScore;

  // Replace their old top score
  const updatedPlayerScores = currentPlayersScores
    .slice(1)
    .concat([playersTopScore]);

  // Concat updated Entries w/ all old Entries
  return entriesWithoutPlayerScores.concat(updatedPlayerScores);
}

module.exports = { createUpdatedEntries }
