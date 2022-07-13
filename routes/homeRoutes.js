const router = require('express').Router();
const { Cake, Game, User, Theme } = require('../models');
const withAuth = require('../utils/auth');
const {getCakes, getSingleCake}= require('../controllers/cake');
const { getGames } = require('../controllers/games');
const {getThemes} = require('../controllers/theme');
const {getSignup, getLogin} = require('../controllers/user')

router.get('/', async(req, res) => {
  res.render('homepage');
});
router.get('/Cakes', withAuth, getCakes);
router.get('/Cakes/:id', withAuth, getSingleCake );
router.get('/Games',getGames);

router.get('/Themes', getThemes);

router.get('/login', getLogin);
router.get('/signup', getSignup);


module.exports = router