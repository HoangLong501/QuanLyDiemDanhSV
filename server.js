require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const readXlsxFile = require('read-excel-file/node');
const moment = require('moment');
const SinhVien = require('./src/models/sinhvien');
const db = require('./src/index');

const app = express();
const port = 4000;

var arrIndex = new Array();
var arrContent = new Array();
var arr = new Array();
var listSV = new Array();

readXlsxFile("diemdanh.xlsx").then((rows) => {
  for(let i = 1; i < rows.length; i++) {
    let timeText = rows[i][3];
    let dateText = rows[i][4];
    let sinhvien = new SinhVien(rows[i][0],rows[i][1],rows[i][2],timeText,dateText);  
    SinhVien.insertSinhVien(sinhvien);
  }
});

app.get('/', function (req, res) {
    res.send(`<h1>${arrContent}</h1>`);      
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
