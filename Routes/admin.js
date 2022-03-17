const express = require('./node_modules/express');
const routing = express.Router();

routing.route('/admin/:idAdmin')
    .get((req, res) => {
        const ID = req.params.idAdmin;
        res.send(`ID Admin sekarang: ${ID}`);
    })
    // Tambah 3 Method (Put, Delete, Post)


// Export into main file (web.js) 
module.exports = routing;