console.log('starting app');

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

//get input user
const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
//console.log('Process ', process.argv);
console.log('Yargs ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command == 'list') {
    notes.getAll();
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