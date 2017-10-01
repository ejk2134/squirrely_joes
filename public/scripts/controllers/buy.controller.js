app.controller('BuyController', function(ListingService){
    var vm = this;

    console.log(ListingService.here, 'buy controller');

    vm.forSale = ListingService.listingData;
})