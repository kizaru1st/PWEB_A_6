const router = require("express").Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// router.get('/rps', dosenController.viewDosenRPS);
router.get("/mahasiswa-info-rps", mahasiswaController.viewMahasiswaInfoRPS);
router.get("/mahasiswa-rps", mahasiswaController.viewMahasiswaRPS);

module.exports = router;
