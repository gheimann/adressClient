addressApp.controller("AddressDetailCtrl", function($scope, $http, $routeParams, $location, AddressDataService) {
	var addressID = $routeParams.addressID
	
	AddressDataService.getAddressByAddressId(addressID).then(function(res) {
		$scope.address = res.data;
	}, function(error) {
		console.log('Lesen der Adresse fehlerhaft.' + error);
	});
	
	$scope.goToListView = function() {
		$location.path('/address');
	};
	
    });