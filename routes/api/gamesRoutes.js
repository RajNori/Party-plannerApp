const express = require('express');
const app = express();
let router = require('express').Router();
const {serializeData, getOneGame} = require('../../controllers/games');

app.use(express.static('public'));

router.get('/', serializeData);
router.get('/Games/:id', getOneGame);

module.exports = router;