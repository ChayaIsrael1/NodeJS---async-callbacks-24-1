// Exercise 11: Sum File Sizes in Folder
// Goal: list the entries in data-folder and sum the size of the files (ignore folders).
// Required:
//   fs.readdir(directoryPath, callback)  - get the entries
//   fs.lstat(filePath, callback)         - is it a file? (stats.isFile()) and its size (stats.size)
//   path.join(directoryPath, entryName)  - build the full path
// Print the total ONCE - only after all the lstat callbacks have finished.
//
// Expected output:
//   Total size: 2345 bytes
//
// Run: node ex11.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");

fs.readdir(directoryPath, (err, entries) => {
    if (err) return console.error(err.message);

    if (entries.length === 0) {
        console.log("Total size: 0 bytes");
        return;
    }

    let totalSize = 0;
    let completed = 0;

    entries.forEach((entryName) => {
        const filePath = path.join(directoryPath, entryName);

        fs.lstat(filePath, (error, stats) => {
            if (error) {
                console.error(`Error statting file ${entryName}:`, error.message);
            } else if (stats.isFile()) {
                totalSize += stats.size;
            }

            completed++;

            if (completed === entries.length) {
                console.log(`Total size: ${totalSize} bytes`);
            }
        });
    });
});
