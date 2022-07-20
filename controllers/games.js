const { Game,User } = require('../models/Game')

const serializeData = async (req, res) => {
  //serializes all of the games objects that it receives.
  try {
    const gamesData = await Game.findAll();
    const serializedData = gamesData.map((game) => game.get({ plain:true }));
    console.log(serializedData);
    res.render('all', gamesData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneGame = async (req, res) => {
  try {
    const gamesData = await Game.findByPk(req.params.id);
    if (!gamesData) {
      res.status(404).json({ message: 'No games with this id!' });
      return;
    }
    const game = gamesData.get({ plain: true });
    res.render('game', game);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getGames = async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const games = gameData.map((game) => game.get({ plain: true }));
    res.render('games', {
      games,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};



module.exports = {
 serializeData,
 getOneGame,
 getGames,
};