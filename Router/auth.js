const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/register", controller.users.tampilregister);
router.post("/register", controller.users.register);

router.post("/login", controller.users.login);
router.get("/login", controller.users.tampillogin);
    
router.post("/logout", controller.users.logout);

module.exports = router;
