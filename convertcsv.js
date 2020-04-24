const fs = require("fs");
const path = require("path");
let file = "";
let csvFile = "./practice-file.csv";

// conversion tool, can be used independently in other app
function csvToJSON(csvF) {
  //csvF cannot equal zero
  if (csvF !== []) {
    // splits at line breaks
    const lines = csvF.split("\n");

    let results = [];
    // takes top line from csv to map to the rest of columns
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      let lineToMap = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = lineToMap[j];
      }
      results.push(obj);
    }
    let folder = `file converted on ${Date()}`;
    let completeJSON = JSON.stringify(results);
    fs.mkdirSync(folder);
    fs.writeFileSync(path.join(__dirname, folder, "file.json"), completeJSON);
    console.log("writing complete");
  } else return console.log("error: object parsing not completed");
}

fs.readFile(csvFile, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  file = `${data}`;
  csvToJSON(file);
});
