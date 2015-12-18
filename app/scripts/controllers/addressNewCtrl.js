'use strict';

addressApp.controller("AddressNewCtrl", function($scope, $location, $route,  AddressDataService){

	$scope.address = {};
	$scope.submitBtnLabel = 'Adresse anlegen';
	var adress = {};
	adress.nachname = $scope.address.nachname;

	$scope.submitAction = function() {
		$scope.jsonObj = angular.toJson($scope.address, false);
		AddressDataService.storeAddress($scope.jsonObj).then(function(res){
      goToListView();
    });

	};

	$scope.cancelAction = function() {
		goToListView();

	};

	var goToListView = function() {
		$route.reload();
		$location.path('/address');

	};

});
