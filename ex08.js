// Exercise 8: Delete a File Safely
// Goal: delete temp.txt, but only if the file exists.
// Required:
//   fs.access(path, fs.constants.F_OK, callback) - check if temp.txt exists
//   fs.unlink(path, callback)                    - delete it if found
//
// Expected output:
//   File deleted.        (if deleted)
//   File not found.      (if not found)
//
// Run: create a file temp.txt in this folder, then run node ex08.js twice.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temp.txt");

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
        fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
                return console.error("Error deleting file:", unlinkErr.message);
            }
            console.log("File deleted.");
        });
    } else {
        console.log("File not found.");
    }
});
