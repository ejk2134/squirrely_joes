app.service('ListingService', function($http){
    var sv = this;
    //test string to log from controller
    sv.here = 'Listing Service sourced in'

    sv.getListings = function(){
        $http({
            method: 'GET',
            url: 'listing'
        }).then(function(response){
            console.log(response.data[21]);
            sv.listingData = {listings: response.data};
        })
    }
})