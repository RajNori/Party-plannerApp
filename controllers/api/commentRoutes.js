const { Comment } = require('../../models/Comment');
const express = require('express');
const path = require('path');
const app = express();
let router = require('express').Router();
const { append } = require('express/lib/response');

app.use(express.static('views'));

router
.route('/comment')
.get((req, res)=>{
   
    res.render('comment')
})
.post ((req, res)=>{
    
})


module.exports = router