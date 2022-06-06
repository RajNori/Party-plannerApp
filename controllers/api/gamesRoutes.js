const express = require('express');
const app = express();
const path = require('path');
let router = require('express').Router();
const { append } = require('express/lib/response');

app.use(express.static('public'));



router
.route('/games')
.get((req, res)=>{
    
 res.sendFile(path.join(_dirname,'views/games.handlebars'))
})
.post((req, res)=>{
   
})
router
.route('/games/:gameid')
.get((req, res)=>{
   res.send(``) 
})
.post((req, res)=>{
    res.send(userData)
});

module.exports = router;
