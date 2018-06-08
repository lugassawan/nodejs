//3rd module
const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

//Self file
const notes = require('./notes.js');

//notes
// var res = notes.addNote();
// console.log(res);
//console.log('Result: ', notes.add(6, -3));

//lodash
// console.log(_.isString(true));
// console.log(_.isString('Lugas'));
// var filteredArray = _.uniq(['Lugas', 1, 'Sept', 1, 'Jhon', 2, 3, 4]); //filter
// console.log(filteredArray);

//os & fs
// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}!`);

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

//get input user
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Listing all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;


var command = process.argv[2];
console.log('Command: ', command);
//console.log('Process ', process.argv);
//console.log('Yargs ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command == 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}