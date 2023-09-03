const { timeEnd } = require('console')
const fs = require('fs')

const getNotes = function ()
{
    return 'Your notes...'
}

const removeNote = function (title)
{
    const notes = loadNotes()

    const removedList = notes.filter(function (note)
    {
        return note.title != title
    })
    if (notes.length === removedList.length)
    {
        console.log('Title not found!')
    }
    else
    {
        saveNotes(removedList)
        console.log('Note removed!')
    }
}

const addNote = function (title, body)
{
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note)
    {
        //The notes variable is a list of note objects
        return note.title === title
    })

    if (duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
    else
    {
        console.log('Note title is taken!')
    }
}

const saveNotes = function (notes)
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () //returns notes list
{
    //read from file
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e)
    {
        //if array does not exist, create empty array
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}