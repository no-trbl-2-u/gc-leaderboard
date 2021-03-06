// All actions
const CREATE_ENTRY = 'Create Entry';
const CREATE_TOURNAMENT_ENTRY = 'Create Tournament Entry';
const LIST_DIRECTORIES = 'List Directories';
const BACKUP_AND_CLEAR = 'Backup and Clear current entries';
const GATHER_EMAILS = 'Gather Emails';
const GATHER_CHAMPIONS = 'Get Champions from current entries';
const UPDATE_ENTRIES = "Update a player's score";

const FORBIDDEN_CHARACTERS = [' ', '.', '/', '\\', '?','"', '<', '>', '|', '*'];

module.exports = {
  CREATE_ENTRY,
  CREATE_TOURNAMENT_ENTRY,
  LIST_DIRECTORIES,
  BACKUP_AND_CLEAR,
  GATHER_EMAILS,
  GATHER_CHAMPIONS,
  FORBIDDEN_CHARACTERS,
  UPDATE_ENTRIES
};