const fs = require('fs')

const getNotes = ()=>{
    return 'Your Notes.....'
}

const addNote = (title, body ) => {
    const notes = loadNotes()


    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New notes added!')
    }else{
        console.log('nooo bro!')
    }

    
}

const removeNote = (title)=>{
   const notes = loadNotes()
   const notesToKeep = notes.filter((note)=>note.title !== title)
   saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(note.body)
    }else{
        console.log("note not found!")
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{

    try{
        const datBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
  
    }catch(e){
        return[]
    }
}
    

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote, 
    listNotes: listNotes,
    readNote: readNote
}