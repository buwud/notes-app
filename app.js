const yargs = require('yargs')
const notes = require('./notes.js')


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
    handler: function (argv)
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
    handler: function (argv)
    {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function ()
    {
        console.log('Listing the notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function ()
    {
        console.log('Reading the notes!')
    }
})

yargs.parse()
