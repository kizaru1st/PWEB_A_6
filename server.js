const express = require('express');
const app = express();
const userRouter = require('./admin');

app.listen(5000, () => {
    console.log("server aman");
});

app.use(userRouter);

// <--- 4 Methods of HTTP -->
app.route('/person/:id')
    .get((req, res) => {
        const ID = req.params.id;
        res.send(`Person Page ${ID}`);
    })
    .post((req, res) => {
        console.log("Method put is running");
    })
    .delete((req, res) => {
        const IDperson = req.params.id;
        res.send(IDperson);
    })
    .put((req, res) =>{
        const IDperson = req.params.id;
        res.send(`This id has been sent, value: ${IDperson}`);
    })

