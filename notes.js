const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) =>{
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)


  if(!duplicateNote) {
    notes.push({
      title: title,
      body:body
    })
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log('Note title taken!');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(
    (note) => note.title !== title
  )
  if (filteredNotes.length < notes.length){
    console.log(chalk.green.inverse('Note removed!'));
  } else {
    console.log(chalk.red.inverse('No Note found!'));
  }
  saveNotes(filteredNotes);
}
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.blue('Your Notes'));
  return notes.forEach(
    (n) => console.log(chalk.blue(n.title))
  );
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((n) => n.title === title)
  if(foundNote){
    console.log(chalk.green.inverse(foundNote.title));
    console.log(chalk.green(foundNote.body));
  } else {
    console.log(chalk.red.inverse('No Note found!'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e){
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
