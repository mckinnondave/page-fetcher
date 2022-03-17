const fs = require("fs");
const request = require('request');
const arg1 = process.argv[2];
const arg2 = process.argv[3];

request(arg1, (error, response, body) => {
  if (error) throw error;
  console.log("statusCode:", response && response.statusCode);
  fs.writeFile(arg2, body, (error) => {
    if (error) throw error;
    fs.stat(arg2, (error, stats) => {
      if (error) throw error;
      console.log(`Downloaded and saved ${stats.size} bytes to ${arg2}`);
    });
  });
  return;
});
