app.controller('AddController', function(ListingService){
    var vm = this;

    console.log(ListingService.here, 'in add controller');

    vm.addListing = function(){
        if (vm.rentOrBuy === 'rent'){
            var newListing = {
                type: 'rent',
                rent: vm.price,
                sqft: vm.sqft,
                city: vm.city
            }
        }else if (vm.rentOrBuy === 'buy'){
            var newListing = {
                type: 'buy',
                cost: vm.price,
                sqft: vm.sqft,
                city: vm.city
            }
        }
        
        console.log(newListing);

        ListingService.addListing(newListing)
    }
})