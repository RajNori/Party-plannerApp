const express = require('express');
const app = express();
let router = require('express').Router();


app.use(express.static('public'));


router.get('/', serializeData);

// route to get one game 

router.get('/Games/:id', getOneGame);

module.exports = router;