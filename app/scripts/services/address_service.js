'use strict';

addressApp.factory('AddressDataService', function($http) {

	var srv = {};

  var baseUrl = 'http://localhost:8080';

	srv.getAddressByAddressId = function(addressId) {
		return $http.get(baseUrl + '/AdressVerwaltungServer/rest/address/element/' + addressId);
	};

	srv.getAddress = function() {
		return $http.get(baseUrl + '/AdressVerwaltungServer/rest/address/list');
	};

	srv.storeAddress = function(address) {
		return $http.post(baseUrl + '/AdressVerwaltungServer/rest/address/new', address);
	};
	srv.updateAddress = function(addressId, address) {
		return $http.put(baseUrl + '/AdressVerwaltungServer/rest/address/update/' + addressId, address);
	};
	srv.deleteAddress = function(addressId) {
		return $http.delete(baseUrl + '/AdressVerwaltungServer/rest/address/delete/' + addressId);

	};

	// Public API (API Object)
	return {
		getAddressByAddressId : function(addressId) {
			return srv.getAddressByAddressId(addressId);

		},
		getAddress : function() {
			return srv.getAddress();

		},
		updateAddress : function(addressId, address) {
			return srv.updateAddress(addressId, address);

		},
		storeAddress : function(address) {
			return srv.storeAddress(address);

		},
		deleteAddress : function(addressId) {
			return srv.deleteAddress(addressId);

		}
	};

});
