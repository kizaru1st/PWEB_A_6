const express = require('../node_modules/express');
const app = express();

app.listen(5000, () => {
    console.log("Server is running");
});

app.get('/', (req, res) => {
    res.send("Hello World");
})