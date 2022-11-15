import fetch from "node-fetch";
import fs from "fs";
import converter from "json-2-csv";

fetch('https://random-data-api.com/api/v2/users?size=2&is_xml=true').then((data) =>{
  return data.json();
}).then((data2) =>{
  
  converter.json2csv(data2, (err, csv) => {
  if (err) {
    throw err
  }
  console.log('CSV file created')

  // write CSV to a file
  fs.writeFileSync('user.csv', csv)
    
})
})
