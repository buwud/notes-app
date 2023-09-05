const fs = require('fs')
const chalk = require('chalk')


const getNotes = () =>
{

    return 'Your notes...'
}

const removeNote = (title) =>
{
    const notes = loadNotes()

    const removedList = notes.filter((note) => note.title != title)
    //o title'a sahip olanları çıkardığı yeni bir const  oluşturdu

    if (notes.length === removedList.length)
    {
        console.log(chalk.red.inverse('Title not found!'))
    }
    else
    {
        saveNotes(removedList)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const addNote = (title, body) =>
{
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNotes)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else
    {
        console.log(chalk.red.inverse('Note title is taken!'))
    }
}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => //returns notes list
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

const listNotes = () =>
{
    console.log(chalk.gray.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) =>
    {
        console.log(note.title)
    });
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}