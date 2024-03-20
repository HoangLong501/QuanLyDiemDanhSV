const express = require('express');
const router = express.Router();
const SinhVienController = require('../controllers/sinhvien_controller');

// Define routes
router.get('/', SinhVienController.getAllSV);
router.post('/', SinhVienController.createSV);
router.put('/:mssv', SinhVienController.updateSV);
router.delete('/:mssv', SinhVienController.deleteSV);

module.exports = router;
