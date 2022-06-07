var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// DOSEN ROUTER
router.get('/dosen-profile', (req, res) => {
  res.render('dosen-profile', {
    layout: 'partials/dosen-app',
    title: 'Dashboard - Dosen',
    judulPage: 'RPS'
  })
})

router.get('/dosen-profile-edit', (req, res) => {
  res.render('dosen-profile-edit', {
    layout: 'partials/dosen-app',
    title: 'Dashboard - Dosen',
    judulPage: 'RPS'
  })
})

router.get('/dosen-rps', (req, res) => {
  res.render('dosen-rps', {
    layout: 'partials/dosen-app',
    title: 'Dashboard - Dosen',
    judulPage: 'RPS'
  })
})

module.exports = router;
