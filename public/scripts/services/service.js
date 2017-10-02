app.service('ListingService', function($http){
    var sv = this;
    //test string to log from controllers
    sv.here = 'Listing Service sourced in'

    sv.getListings = function(){
        $http({
            method: 'GET',
            url: 'listing'
        }).then(function(response){
            sv.listingData = {listings: response.data};
        })
    }

    sv.addListing = function(addData){
        $http({
            method: 'POST',
            url: 'listing',
            data: addData
        }).then(function(response){
            console.log(response);
            sv.getListings();
        })
    }
})