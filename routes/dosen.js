const router = require('express').Router();
const dosenController = require('../controllers/dosenController'); 

router.get('/rps', dosenController.viewDosenRPS);

module.exports = router;