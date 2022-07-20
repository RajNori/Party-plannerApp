const { Cake,User } = require('../models/Cake');

const createCake = async (req, res) => {
  try {
    const newCake = await Cake.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCake);
  } catch (err) {
    res.status(400).json(err);
  }
};

//GET cakes by

const getCakes = async (req, res) => {
  try {
    const cakeData = await Cake.findAll({
      include: [{ model: User, attributes: ['name'] }],
    });
    const cakes = cakeData.map((cake) => cake.get({ plain: true }));
    console.log(cakes);
    res.render('cakes', {
      cakes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleCake = async (req, res) => {
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createCake, getCakes, getSingleCake };
