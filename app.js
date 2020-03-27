const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
    notes.addNote(argv.title, argv.body)
  }
})

//Create move command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.readNote(argv.title)
})

yargs.command({
  command: 'list',
  describe: 'Lists all the notes',
  handler: ()=>notes.listNotes()
})

// add, remove, read, list

yargs.parse()
