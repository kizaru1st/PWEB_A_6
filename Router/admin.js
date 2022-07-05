const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));


router.get("/rps", controller.admin.tampilRpsAdmin);
// router.get("/menentukandosen/:id", controller.admin.tampilMenentukanDosen);
router.get("/menentukandosen/:id", controller.admin.infoRPSdosen);
router.get("/laporanrpsmatkul",controller.admin.tampilLaporanRpsMatkul);
router.get("/cetaklaporan", controller.admin.cetakLaporan);
router.get("/tambahmatkul", controller.admin.createMatkul);


router.post("/add",controller.admin.tambahMatkul);
router.post("/editmatkul",controller.admin.editMatkul);
router.post("/tambahdosen",controller.admin.tambahDosen);
router.post("/hapusdosen",controller.admin.hapusDosen);


module.exports = router;
