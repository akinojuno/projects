const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', function( req, res ){
    Review.find({})
    .then( function( data ) {
        res.send(data)
    })
})

router.post('/', function(req, res){
    let newReview = new Review(req.body);
    newReview.save()
    .then( function (anime){
        res.send(anime)
    });
});

// router.post('/comments', function(req, res){
//     let newComment = new Review.comment(req.body);
//     newComment.save()
//     .then(function (comment){
//         res.send(comment)
//     })
// })

router.put('/:_id', function( req, res ){
    Review.findByIdAndUpdate(req.params._id, req.body, {
        useFindAndModify: false,
        new: true
    })
    .then( function( anime ){
       console.log(anime); 
       res.send(anime);
    });
});

router.delete('/:_id', function( req, res ){
    Review.findByIdAndDelete(req.params._id)
    .then( function(anime){
        res.send(anime)
    })
});

module.exports = router;