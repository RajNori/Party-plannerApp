const router = require('express').Router();
const { Cake, User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
  res.render('homepage');
});

router.get('/cakes', async (req, res) => {
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

    // Pass serialized data and session flag into template
    res.render('allcakes', { 
      ...cakes, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router