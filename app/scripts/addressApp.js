'use strict';

var addressApp = angular.module("addressApp", ['ngRoute']);

addressApp.config(function($routeProvider) {

	$routeProvider.when('/address', {
		templateUrl: 'views/address_list.html',
		controller : 'AddressListCtrl'
	})
	.when('/address/:addressID', {
		templateUrl: 'views/address_detail.html',
		controller : 'AddressDetailCtrl'
	})
	.when('/admin/address/new', {
		templateUrl: 'views/address_form.html',
		controller : 'AddressNewCtrl'
	})
	.when('/address/:addressID/edit', {
		templateUrl: 'views/address_form.html',
		controller : 'AddressEditCtrl'
	})
	.otherwise({
		redirectTo: 'address'
	});
});
