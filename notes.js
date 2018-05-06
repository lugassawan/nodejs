console.log('starting note.js');

const fs = require('fs');

// module.exports.addNote = function() {
//     console.log('Add Note');
//     return 'New Note';
// }

//Fungsinya sama kaya diatas
// module.exports.addNote = () => {
//     console.log('Add Note');
//     return 'New Note';
// }

// module.exports.add = (a, b) => {
//     return a + b;
// };

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//user input
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all list');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //filter notes, removing the one with title of arg
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title:  ${note.title}`);
    console.log(`Body:  ${note.body}`);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};