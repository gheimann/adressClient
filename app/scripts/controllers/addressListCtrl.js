'use strict';

addressApp.controller("AddressListCtrl", function($scope, $http, $location, $route, AddressDataService) {


         AddressDataService.getAddress().then(function(res) {
        	 $scope.address = res.data;
		});

        var addressDeleted;
        $scope.deleteAddress = function(addressDel) {
        	AddressDataService.deleteAddress(addressDel.id).then(function(res){
              var int2 = $scope.address.indexOf(addressDel);
              console.log(int2);
              $scope.address.splice($scope.address.indexOf(addressDel), 1);
              goToListView();
          });

    	};

    	var goToListView = function() {
    		$route.reload();
    		$location.path('/address');
    	};

    });
