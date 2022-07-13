const { Theme } = require('../models/Theme')

const getThemes = async (req, res) => {
  try {
    const themeData = await Theme.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(themeData);

    const themes = themeData.map((theme) => theme.get({ plain: true }));
    console.log(themes);
    res.render('themes', {
      themes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {getThemes}