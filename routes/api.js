const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');

// Konfigurasi Multer
const upload = multer({ storage: multer.memoryStorage() });

// --- DEFINISI ROUTE ---

// 1. Create (POST) - Upload gambar & data
router.post('/komik', upload.single('gambar'), komikController.createKomik);

// 2. Read All (GET)
router.get('/komik', komikController.getAllKomik);

// 3. Read One by ID (GET)
// PERBAIKAN: Menggunakan titik (.) bukan koma (,)
router.get('/komik/:id', komikController.getKomikById);

// 4. Update (PUT)
// PERBAIKAN: Menggunakan PUT, bukan GET. Dan arahkan ke updateKomik
router.put('/komik/:id', upload.single('gambar'), komikController.updateKomik);

// 5. Delete (DELETE)
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;