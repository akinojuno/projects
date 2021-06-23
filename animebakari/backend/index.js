const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Animation = require('./models/Animation')
const animationRouter = require('./routers/animationRouter');
const reviewRouter = require('./routers/reviewRouter');
const registrationRouter = require('./routers/registrationRouter')
const cors = require('cors');
const app = express();
const port = 8000;


mongoose.connect('mongodb://localhost:27017/animelists', 
    { useNewUrlParser: true,
    useUnifiedTopology: true
    }
);

app.use(bodyParser.json())

app.use(cors());
app.use('/anime', animationRouter);
app.use('/reviews', reviewRouter);
app.use('/users', registrationRouter);
app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/comingsoon', function(req, res){
    Animation.find({status: 'Coming Soon'})
    .then(data => {
        res.send(data)
    })
})



// app.get('/anime/category/:name/', function(req, res){
//     Animation.find({category: req.params.name})
//     .then( data => {
//         res.send(data)
//         console.log(data)
//     })
//   });



app.listen(port, function(){
    console.log(`app is listening on port ${port}`);
});