

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const animationSchema = new Schema ({
    title: String,
    category: String,
    rating: Number,
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    },
    image: String,
    synopsis: String,
    episodes: Number,
    status: String,
    spoilers: String
});


module.exports = mongoose.model('Animation', animationSchema); 