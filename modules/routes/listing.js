var router = require('express').Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/realestate');

var listingSchema = new mongoose.Schema({
    rent: Number,
    cost: Number,
    sqft: Number,
    city: String
})

var Listing = mongoose.model('Listing', listingSchema);

router.get('/', function(req, res){
    Listing.find().then(function(data){
        res.send(data);
    })
})


module.exports = router;