// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = callback => {
  const files = [];

  fs.readFile(file1, "utf-8", (err, data) => {
    if(err) return callback(err, data);

    const parseData = JSON.parse(data);
    const splitData = parseData.message.split(" ")[1];
    files.push(splitData);

    fs.readFile(file2, "utf-8", (err, data) => {
      if(err) return callback(err, data);

      const parseData = JSON.parse(data);
      const getMessage = parseData.map(item => item.message)[0];
      const splitData = getMessage.split(" ")[1];
      files.push(splitData);

      fs.readFile(file3, "utf-8", (err, data) => {
        if(err) return callback(err, data);

        const parseData = JSON.parse(data);
        const getMessage = parseData.map(item => item.data.message)[0];
        const splitData = getMessage.split(" ")[1];
        files.push(splitData);

        return callback(err, files);
      });
    });
  });
  
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
