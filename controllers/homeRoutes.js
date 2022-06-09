const router = require('express').Router();
const { Cake, Game, User, Theme } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
  res.render('homepage');
});

router.get('/Cakes', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
   
    const cakeData = await Cake.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    
    // Serialize data so the template can read it
    const cakes = cakeData.map((cake) => cake.get({ plain: true }));
    console.log(cakes)

    // Pass serialized data and session flag into template
    res.render('cakes', { 
      cakes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Cakes/:id', withAuth, async (req, res) => {
  try {
    const cakeData = await Cake.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const cake = cakeData.get({ plain: true });

    res.render('each_cake', {
      ...cake,
      logged_in: req.session.logged_in
    })
    
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/Games', async (req, res) => {
  try {
    // Get all games and JOIN with user data
    // console.log('in cakes get')
    const gameData = await Game.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    //console.log(gameData)
    // Serialize data so the template can read it
    const games = gameData.map((game) => game.get({ plain: true }));
    //console.log(games)

    // Pass serialized data and session flag into template
    res.render('games', { 
      games, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Themes', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    // console.log('in games get')
    const themeData = await Theme.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(themeData)
    // Serialize data so the template can read it
    const themes = themeData.map((theme) => theme.get({ plain: true }));
    console.log(themes)

    // Pass serialized data and session flag into template
    res.render('themes', { 
      themes, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/Cakes');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router