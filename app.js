const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customise yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption: true,
      type:'string'
    },
    body:{
      describe:'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv)=> {
    console.log('Ttile: ' + argv.title)
    console.log('Body: ' + argv.body);
  }
})

//Create move command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing the note')
})

yargs.command({
  command: 'read',
  describe: 'Reading the note',
  handler: () => console.log('Reading the note')
})

yargs.command({
  command: 'list',
  describe: 'Lists all the notes',
  handler: ()=>console.log('Listing notes')
})

// add, remove, read, list

yargs.parse()