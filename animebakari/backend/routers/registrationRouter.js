const express = require('express');
const router = express.Router();

const User = require('../models/User');


router.get('/', async function(req,res){
    let users = await User.find({})
    res.send(users);
});

// router.get('/', function(req, res){
//     Animation.find({})
//     .then( data => {
//         res.send(data)
//     })
//   });

router.post('/register', function(req, res){
    let newUser = new User(req.body);
    newUser.save()
    .then( function (anime){
        res.send(anime)
    });
});

router.post('/login', (req, res) => {
    User.findOne(req.body).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.send({error: `invalid username/password`});
        }
    });
});



module.exports = router;