const router = require('express').Router();

const gamesRoutes = require('./gamesRoutes');
const cakesRoutes = require('./cakesRoutes');
const themesRoutes = require('./themesRoutes');
const userRoutes = require('./userRoutes');



app.get('/', (req,res)=>{
    //handle root
});

router.use('api/games', gamesRoutes);
router.use('api/cakes', cakesRoutes);
router.use('api/themes', themesRoutes);
router.use('api/profile', userRoutes);

module.exports = router;

