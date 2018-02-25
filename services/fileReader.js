const fs = require('fs');

module.exports = filePath =>
  new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.R_OK, error => {
      if (error) {
        reject(error);
      }
      fs.readFile(filePath, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
  });
