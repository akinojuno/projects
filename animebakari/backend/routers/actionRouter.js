const express = require('express');
const router = express.Router();

const Animation = require('../models/Animation');


// router.get('/anime/action', async function(req,res){
//     let animes = await Animation.find({category: 'Action'})
//     res.send(animes);
// });

router.get('/anime/action', function(req, res){
    Animation.find({category: 'Action'})
    .then( data => {
        res.send(data)
        console.log(data)
    })
  });

module.exports = router;