const router = require("express").Router();
const dosenController = require("../controllers/dosenController");

router.get("/rps", dosenController.viewRPS);
router.get("/dosen-rps", dosenController.viewDosenRPS);
router.get("/dosen-cpmk", dosenController.viewDosenCPMK);
router.get("/dosen-info-rps", dosenController.viewDosenInfoRPS);
router.get("/dosen-komponen-nilai-tampil", dosenController.viewDosenKomponenNilaiTampil);
router.get("/dosen-pertemuan", dosenController.viewDosenPertemuan);
router.get("/dosen-referensi-a", dosenController.viewDosenReferensiA);
router.get("/dosen-tambah-cpmk", dosenController.viewDosenTambahCPMK);
router.get("/dosen-tambah-komponen", dosenController.viewDosenTambahKomponen);
router.get("/dosen-tambah-pertemuan", dosenController.viewDosenTambahPertemuan);
router.get("/dosen-tambah-referensi", dosenController.viewDosenTambahReferensi);
router.get("/dosen-tambah-rps", dosenController.viewDosenTambahRPS);

module.exports = router;
