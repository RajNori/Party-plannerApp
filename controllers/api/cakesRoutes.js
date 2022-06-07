
const { Cake } = require('../../models');
const router = require('express').Router();
const express = require('express');
const path = require('path');
const app = express();
const { append } = require('express/lib/response');


router
.route('/cakes')
.get((req, res)=>{
    res.sendFile(path.join(_dirname,'views/cakes.handlebars'))
})
.post ((req, res)=>{
   
})
router
.route('/cakes/:cakeid')
.get((req, res)=>{
    res.send()  
})
post((req, res)=>{
    
});

module.exports = router
