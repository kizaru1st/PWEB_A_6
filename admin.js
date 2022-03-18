const express = require('./node_modules/express');
const routing = express.Router();

// <--- 4 Methods of HTTP -->
routing.get('/admin/:id', (req, res) => {
    const ID = req.params.id;
    res.send(`Get Admin id: ${ID}`);
});


module.exports = routing;