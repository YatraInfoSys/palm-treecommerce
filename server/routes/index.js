// ********************************************** importing ************************************************

const express = require('express');
const route = express.Router();
const dbcon = require('../controller/dbcon');
const save = require('../controller/save');
// ********************************************** importing ************************************************

// route.get('/login' , dbcon.connect);

dbcon.connect();
//login ko url bata data line aani db ma check garne fuck auth token bullshit 
route.get('/login/' ,  (req, res) =>{
    //got id from url (params)
    const e = req.query.id;
    res.json({"id":e});
});

route.post('/saveUser' , save.userSave);
module.exports = route;
