const express = require('express');
const router = express.Router();

const Animation = require('../models/Animation');


router.get('/', async function(req,res){
    let animes = await Animation.find({}).populate('review').exec();
    res.send(animes);
});

// router.get('/', function(req, res){
//     Animation.find({})
//     .then( data => {
//         res.send(data)
//     })
//   });

router.post('/', function(req, res){
    let newAnime = new Animation(req.body);
    newAnime.save()
    .then( function (anime){
        res.send(anime)
    });
});

router.put('/:_id', function( req, res ){
    Animation.findByIdAndUpdate(req.params._id, req.body, {
        useFindAndModify: false,
        new: true
    })
    .then( function( anime ){
       console.log(anime); 
       res.send(anime);
    });
});

router.delete('/:_id', function( req, res ){
    Animation.findByIdAndDelete(req.params._id)
    .then( function(anime){
        res.send(anime)
    })
});

module.exports = router;