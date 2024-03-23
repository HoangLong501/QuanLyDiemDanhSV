const SinhVien = require('../models/sinhvien');

const SinhVienController ={
    getAllSV:(req,res)=>{
        SinhVien.getAllSinhVien((err,results)=>{
            if (err) {
                console.error('Error getting users:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req GetAllUser");
              }
        });
    },
    createSV: (req, res ) => {
      const newSV = req.body;
      console.log(req.body);
      SinhVien.insertSinhVien(newSV, (err, result) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          console.log("Test log khi có req createUser");
        }
      });
    },
    updateSV: (req, res) => {
      const mssv = req.params.mssv;
      const updatedSV = req.body;
      SinhVien.updateSinhVien(mssv, updatedSV, (err, result) => {
          if (err) {
              console.error('Error updating user:', err);
              res.status(500).json({ error: 'Internal Server Error' });
          } else {
              res.json({ message: 'Update Success' });
              console.log("Test log khi có req updateSV");
          }
      });
  },
  deleteSV: (req, res) => {
      const mssv = req.params.mssv;
      SinhVien.deleteSinhVien(mssv, (err, result) => {
          if (err) {
              console.error('Error deleting user:', err);
              res.status(500).json({ error: 'Internal Server Error' });
          } else {
              res.json({ message: 'Delete Success' });
              console.log("Test log khi có req deleteSV");
          }
      });
  }
}

module.exports=SinhVienController;
