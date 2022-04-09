var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');


/* CEK LOGIN */
router.post('/login', function(req, res, next){
    let username = req.body.username;
    let password = req.body.password;


    dotenv.config();
    let secret = process.env.JWT_SECRET;
    let token = jwt.sign({username}, secret, {expiresIn : '1800s'});

    let json = {
        message: "Success",
        token : token,
        expiresIn : "30 menit"

    }

    res.json(json);
});

/*MiddleWare */
function authenticatetoken(req, res, next )
{
    dotenv.config();
    let secret = process.env.JWT_SECRET;
    
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sandStatus(401)

    jwt.verify(token, secret, (err, user ) => 
    {
        console.log(err)

        if(err) return res.sendStatus(403)

        req.user = user

        next()
    })
}
module.exports = router;