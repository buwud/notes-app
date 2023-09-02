

const yargs = require('yargs')

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function ()
    {
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function ()
    {
        console.log('Removing the note!')
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
    command: 'read'
    describe: 'read a note',
    handler: function ()
    {
        console.log('Reading the notes!')
    }
})

yargs.parse()
