const express = require('./node_modules/express');
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

