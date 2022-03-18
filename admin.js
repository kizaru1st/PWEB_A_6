const express = require('./node_modules/express');
const routing = express.Router();

// <--- 4 Methods of HTTP -->
routing.get('/admin/:id', (req, res) => {
    const ID = req.params.id;
    res.send(`Get Admin id: ${ID}`);
});

routing.post('/admin', (req, res) => {
    res.send("Post berhasil");
})

routing.delete('/admin/:id', (req, res) => {
    const ID = req.params.id;
    res.send(`Delete Admin id: ${ID}`);
})

routing.put('/admin/:id', (req, res) => {
    const IDperson = req.params.id;
    res.send(`This id has been sent, value: ${IDperson}`);
})

module.exports = routing;