const fs = require('fs')
const path = require('path')

const listDirectories = sourcePath => 
  fs
    .readdirSync(sourcePath)
    .filter(f => fs.statSync(path.join(sourcePath, f)).isDirectory())

module.exports = { listDirectories }