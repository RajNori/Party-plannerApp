
const { Cake } = require('../../models');
const router = require('express').Router();
// const express = require('express');
// const path = require('path');
// const app = express();
// const { append } = require('express/lib/response');


router.get('/', async (req, res) => {
    //serializes all of the cakes objects that it receives. 
     try { 
       const cakesData = await Cake.findAll();
       const serializedData = cakesData.map(cake => cake.get({ plain: true }));
   
       console.log(cakesData)
       console.loc(serializedData)
   
       res.render('all', cakesData)
   
     }
   
     catch (err){
     res.status(500).json(err)
   
     }
   });
   
   // route to get one cake
   router.get('/Gakes/:id', async (req, res) => {
     try{ 
         const cakesData = await Cake.findByPk(req.params.id);
         if(!cakesData) {
             res.status(404).json({message: 'No cakes with this id!'});
             return;
         }
         const cake = cakesData.get({ plain: true });
         res.render('cake', cake);
       } catch (err) {
           res.status(500).json(err);
       };     
   });
   
   module.exports = router;