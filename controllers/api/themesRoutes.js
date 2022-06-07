const express = require('express');
const path = require('path');
const app = express();
let router = require('express').Router();
const { append } = require('express/lib/response');

app.use(express.static('public'));

router
.route('/themes')
.get((req, res)=>{
    res.sendFile(path.join(_dirname,'views/themes.handlebars'))
})
.post ((req, res)=>{
    
})
router
.route('/themes/:themeid')
.get((req, res)=>{
    
})
// post((req, res)=>{
    
// })

module.exports = router