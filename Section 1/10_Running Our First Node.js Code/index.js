const { error } = require('console');
const fs = require('fs');

const text = fs.readFileSync("./message.txt",'utf-8');

// another way to convert  buffer to string
// console.log(text.toString())

console.log(text);

// re name file
// fs.renameSync("./notes.txt","newNotes.txt");

// delete files
// fs.unlinkSync("./newNotes.txt")
fs.unlink("newNotes.txt",(error)=>{
    console.log(error)
})

//  In node js the global object is global
//  but in javascript it is window