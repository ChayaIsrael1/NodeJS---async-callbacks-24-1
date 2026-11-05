// Exercise 2: Directory Files Only
// Goal: list only the files (not the folders) in the folder my-folder.
// Required: fs.readdir(directoryPath, callback), fs.lstat(filePath, callback), path.join(dir, item).
// Check every entry with fs.lstat and print only those where stats.isFile() is true.
//
// Expected output (the order may change):
//   File: index.js
//   File: notes.txt
//   File: app.js
//
// Run: node ex02.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "my-folder");

fs.readdir(directoryPath,{ withFileTypes: true },  (err,entries)=>{
    if (err) return console.error(err.message);
    entries.forEach(file =>{ 
        let filePath = path.join(directoryPath, file.name)
        fs.lstat(filePath,(err,stats)=>{
        if(err){console.log(err); return}
        if (stats.isFile() == true)
            console.log(`File: ${file.name}`)});})
}
)

