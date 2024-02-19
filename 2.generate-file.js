const fs = require('fs');
const mkdirp = require('mkdirp');

// Create a directory if it doesn't exist
mkdirp.sync('build');

// Generate a text file
fs.writeFileSync('build/example.txt', 'This is a sample text file generated as a build artifact.\n');
console.log('Text file generated successfully.');