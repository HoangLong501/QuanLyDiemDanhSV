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
}

module.exports=SinhVienController;
