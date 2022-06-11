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
router.get('/dosen-referensi', dosenController.viewDosenReferensi);
router.get('/edit-rps', dosenController.viewEditRPS);
router.get('/dosen-edit-cpmk', dosenController.viewDosenEditCPMK);
router.get('/dosen-edit-komponen', dosenController.viewDosenEditKomponen);
router.get('/dosen-edit-pertemuan', dosenController.viewDosenEditPertemuan);
router.get('/dosen-edit-referensi', dosenController.viewDosenEditReferensi);
router.get('/dosen-info-cpmk', dosenController.viewDosenInfoCPMK);
router.get('/dosen-info-komponen', dosenController.viewDosenInfoKomponen);
router.get('/dosen-info-pertemuan', dosenController.viewDosenInfoPertemuan);
router.get('/dosen-info-referensi', dosenController.viewDosenInfoReferensi);

module.exports = router;
