const express = require('./node_modules/express');
const app = express();
const routing = express.Router();

// Calling data.json
const showDataJSON = require('./data.json');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// <--- 4 Methods of HTTP -->
routing.get('/admin', (req, res) => {
    res.status(200).send(showDataJSON);
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