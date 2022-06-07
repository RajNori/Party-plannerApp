
const sequelize = require('../config/connection');
const { User, Game, Cake, Theme } = require('../models');

const userData = require('./userData.json');
const gamesData = require('./gamesData.json');
const cakesData = require('./cakesData.json')
const themesData = require('./themesData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const game of gamesData) {
    await Game.create({
      ...game,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const cake of cakesData) {
    await Cake.create({
      ...cake,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const theme of themesData) {
    await Theme.create({
      ...theme,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
