const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', function( req, res ){
    Category.find({})
    .then( function( data ) {
        res.send(data)
    })
})

module.exports = router;