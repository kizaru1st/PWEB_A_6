const express = require('../node_modules/express');
const app = express();

app.listen(5000, () => {
    console.log("Server is running");
});

// 4 Method HTTP

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/users', (req, res)=> {
    res.send('Post user');
});