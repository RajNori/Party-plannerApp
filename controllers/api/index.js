const router = require('express').Router();

const gamesRoutes = require('./gamesRoutes');
const cakesRoutes = require('./cakesRoutes');
// const themesRoutes = require('./themesRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/games', gamesRoutes);
router.use('/cakes', cakesRoutes);
// router.use('/themes', themesRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes)

module.exports = router;

