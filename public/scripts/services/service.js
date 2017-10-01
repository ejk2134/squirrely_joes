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
})