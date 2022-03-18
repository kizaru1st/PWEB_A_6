const express = require('./node_modules/express');
const routerr = express.Router();

// <--- 4 Methods of HTTP -->
routerr.get('/admin/:id', (req, res) => {
    const ID = req.params.id;
    res.send(`Get Admin id: ${ID}`);
});


module.exports = routerr;