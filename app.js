const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')


yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: { //builder object
        title: {
            describe: 'Note title',
            demandOption: true, //made required
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler()
    {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler(argv)
    {
        notes.readNotes(argv.title)
    }
})

yargs.parse()