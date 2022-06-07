const express = require('express');
const { Theme } = require('../../models/Theme');
const app = express();
let router = require('express').Router();
const { append } = require('express/lib/response');

app.use(express.static('public'));

router.get('/', async (req, res) => {
    //serializes all of the games objects that it receives. 
     try { 
       const themesData = await Theme.findAll();
       const serializedData = themesData.map(theme => theme.get({ plain: true }));
   
       console.log(themesData)
       console.log(serializedData)
   
       res.render('all', themesData)
   
     }
   
     catch (err){
     res.status(500).json(err)
   
     }
   });
   
   // route to get one theme
   router.get('/Themes/:id', async (req, res) => {
     try{ 
         const themesData = await Theme.findByPk(req.params.id);
         if(!themesData) {
             res.status(404).json({message: 'No themes with this id!'});
             return;
         }
         const theme = dishData.get({ plain: true });
         res.render('theme', theme);
       } catch (err) {
           res.status(500).json(err);
       };     
   });
   
   module.exports = router;