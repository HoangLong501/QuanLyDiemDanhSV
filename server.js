const express = require('express');
const readXlsxFile = require('read-excel-file/node');
const moment = require('moment');
const SinhVien = require('./src/models/sinhvien');
const sinhvienRoutes = require('./src/routes/sinhvien_router');
// const bodyParser = require('body-parser');
const db = require('./src/config/db');


const app = express();
const port = 4000;

// app.use(bodyParser.urlencoded({ extended: false })); // Để xử lý dữ liệu form-urlencoded
// app.use(bodyParser.json()); // Để xử lý dữ liệu JSON
 //db.connect();

// app.use('/api',routes);
var arrIndex = new Array();
var arrContent = new Array();
var arr = new Array();
var listSV = new Array();
// readXlsxFile("diemdanh.xlsx").then((rows) => {
//   for(let i = 1; i< rows.length; i++) {
//     let timeText = rows[i][3]; // Giả sử cột thời gian nằm ở cột thứ 4 (index 3)
//     let dateText = rows[i][4];
//     // let timeDatetime = moment(timeText, "hmm").format("HH:mm");
//     // let dateDatetime = moment(dateText, "MM-DD-YYYY");
//       let sinhvien = new SinhVien(rows[i][0],rows[i][1],rows[i][2],timeText,dateText);  
//       SinhVien.insertSinhVien(sinhvien);
//     // console.log(timeText);
//     // console.log(dateText);

//   }
// })
 app.use('/sinhvien', sinhvienRoutes);

app.listen(port, () => {
   
    console.log(`Server is running on port ${port}`);
});