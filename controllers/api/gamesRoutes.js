const express = require('express');
const { Game } = require('../../models/Game');
const app = express();
const path = require('path');
let router = require('express').Router();
const { append } = require('express/lib/response');

app.use(express.static('public'));


router.get('/', async (req, res) => {
   //serializes all of the games objects that it receives. 
    try { 
      const gamesData = await Game.findAll();
      const serializedData = gamesData.map(game => game.get({ plain: true }));
  
      console.log(gamesData)
      console.log(serializedData)
  
      res.render('all', gamesData)
  
    }
  
    catch (err){
    res.status(500).json(err)
  
    }
  });
  
  // route to get one game
  router.get('/Games/:id', async (req, res) => {
    try{ 
        const gamesData = await Game.findByPk(req.params.id);
        if(!gamesData) {
            res.status(404).json({message: 'No games with this id!'});
            return;
        }
        const game = dishData.get({ plain: true });
        res.render('game', game);
      } catch (err) {
          res.status(500).json(err);
      };     
  });
  
  module.exports = router;
  
