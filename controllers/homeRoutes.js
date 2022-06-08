const router = require('express').Router();
const { Cake, User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
  res.render('homepage');
});

router.get('/Cakes', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    console.log('in cakes get')
    const cakeData = await Cake.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(cakeData)
    // Serialize data so the template can read it
    const cakes = cakeData.map((cake) => cake.get({ plain: true }));
    console.log(cakes)

    // Pass serialized data and session flag into template
    res.render('cakes', { 
      cakes, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Cakes/:id', async (req, res) => {
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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router