const router = require("express").Router();
const adminController = require("../controllers/adminController");

// router.get('/rps', dosenController.viewDosenRPS);
router.get("/admin-dosen", adminController.viewAdminDosen);
router.get("/admin-edit-dosen", adminController.viewAdminEditDosen);
router.get("/admin-info-dosen", adminController.viewAdminInfoDosen);
router.get("/admin-info-rps", adminController.viewAdminInfoRPS);
router.get("/admin-matkul", adminController.viewAdminMatkul);
router.get("/admin-tambah-dosen", adminController.viewAdminTambahDosen);

module.exports = router;
