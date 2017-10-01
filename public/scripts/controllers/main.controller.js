app.controller('MainController', function(ListingService){
    var vm = this;
    
    ListingService.getListings();
    console.log('listing controller');
})