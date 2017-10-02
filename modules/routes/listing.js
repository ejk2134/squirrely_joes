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

router.post('/', function(req, res){
    console.log(req.body);
    if (req.body.type === 'rent'){
        var newListing = {
            rent: req.body.rent,
            sqft: req.body.sqft,
            city: req.body.city
        }
    }else{
        var inputs = {
            cost: req.body.cost,
            sqft: req.body.sqft,
            city: req.body.city
        }
    }
    
    var newListing = Listing(inputs);
    newListing.save(function(error){
        if (error){
            console.log(error);
            res.sendStatus(500);
        }else{
            res.sendStatus(201);
        }
    })
})


module.exports = router;