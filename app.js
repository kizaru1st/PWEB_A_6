'use strict'

/** 
 * Module dependencies.
 */

var express = require('../..');
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require ('express-session');

var app = module.export = express();

//config

app.set('view engine', 'ejs');
app.set('vibes', path.join(__dirname,'views'));

//middleware

app.use(expree.urlencoded({extended: false}))
app.use(session({
    resave: false, //don't save session if unmodified
    saveUnitialized: false, //don't create session until something stored
    secret:'shhhh, very secret'
}));

// Session-persisted message middleware

app.use(function(req, res, next){
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + '</p>';
    next();
});

// dummy database

var users = {
    tj : { name: 'tj'}
};

//when you create a user, generate a salt
//and hash the password ('foobar' is the pass here)

hash({ password:'foobar' }, function (err, pass, salt, hash){
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
});


// Authenticate using our plain-object database of doom!

