const express = require('../node_modules/express');
const app = express();

app.listen(5000, () => {
    console.log("Server is running");
});

app.get('/', (req, res) => {
    res.send("Hello World");
<<<<<<< HEAD
})
=======
});

app.delete('/users/:idAnda', (req, res) => {
    const ID = req.params.idAnda
    res.send(ID);
 });

>>>>>>> 666abbe9b80433014c1c73ae71273495eabc43c2

app.post('/users', (req, res)=>
{
    res.send('Post user');
})