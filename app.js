const getNotes = require('./notes.js')
const yargs = require('yargs')
const notes = require('./notes.js')


//create

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
      notes.removeNote(argv.title)
    }
})


//list
yargs.command({
    command: 'list',
    describe: 'listing a new note',
    handler(){
       notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


console.log(yargs.argv)