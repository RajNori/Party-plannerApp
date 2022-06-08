const router = require('express').Router();
const { Cake } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCake = await Cake.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCake);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
