/**
 * Created by gabiheimann on 09.09.15.
 */
describe('Service: AddressDataService', function(){

  var AddressDataService,
      $httpBackend;

  var baseUrl = 'http://localhost:8080';

  // laden des app modules
  beforeEach(module('addressApp'));

  // get a reference to the srvice
  beforeEach(inject(function(_AddressDataService_, _$httpBackend_ ) {
    AddressDataService = _AddressDataService_;
    $httpBackend = _$httpBackend_;
  }));

  // define trained responses, wird anstelle des tatsächlichen http Aufrufes verwendet
  beforeEach(function() {
    $httpBackend.when(
      'GET', baseUrl + '/AdressVerwaltungServer/rest/address/list'
    ).respond(testAdressen);

    $httpBackend.when(
      'GET', baseUrl + '/AdressVerwaltungServer/rest/address/element/' + bartoliAdresse.id
    ).respond(bartoliAdresse);

    $httpBackend.when(
      'GET', baseUrl + '/AdressVerwaltungServer/rest/address/test'
    ).respond(404, '');

    $httpBackend.when(
      'POST', baseUrl + '/AdressVerwaltungServer/rest/address/new', bartoliAdresse
    ).respond(true);

    $httpBackend.when(
      'PUT', baseUrl + '/AdressVerwaltungServer/rest/address/update/' + winehouseAdresse.id, winehouseAdresse
    ).respond(true);

    $httpBackend.when(
      'DELETE', baseUrl + '/AdressVerwaltungServer/rest/address/delete/' + winehouseAdresse.id
    ).respond(true);
  });

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Plublic API', function(){
    it('should include a getAddress() function', function(){
      expect(AddressDataService.getAddress).toBeDefined();
    });
    it('should include a getAddressByAddressId() function', function(){
      expect(AddressDataService.getAddressByAddressId).toBeDefined();
    });
    it('should include a updateAddress() function', function(){
      expect(AddressDataService.updateAddress).toBeDefined();
    });
    it('should include storeAddress', function(){
      expect(AddressDataService.storeAddress).toBeDefined();
    });
    it('should include a deleteAddress() function', function(){
      expect(AddressDataService.deleteAddress).toBeDefined();
    });
  });


  describe('Plublic API', function(){

    describe('getAddress as list', function(){
      it('should get a Addresslist', function(){
        $httpBackend.expectGET(baseUrl + '/AdressVerwaltungServer/rest/address/list');
        var addresses;
        AddressDataService.getAddress().then(function(res) {
          addresses = res.data;
        });
        $httpBackend.flush();
        expect(addresses.length).toBe(testAdressen.length);
      });
    });

    describe('getAddressById', function(){
      it('should get address  by ID ', function(){
        $httpBackend.expectGET(baseUrl + '/AdressVerwaltungServer/rest/address/element/' + bartoliAdresse.id);
        var address;
        AddressDataService.getAddressByAddressId(bartoliAdresse.id).then(function(res) {
          address = res.data;
        });
        $httpBackend.flush();
        expect(address.id).toBe(bartoliAdresse.id);
      });
    });

    describe('storeAddress', function(){
      it('should store the passed address', function(){
        $httpBackend.expectPOST(baseUrl + '/AdressVerwaltungServer/rest/address/new', bartoliAdresse);
        AddressDataService.storeAddress(bartoliAdresse);
        $httpBackend.flush();
      });
    });

    describe('updateAddress', function(){
      it('should update the passed address', function(){
        $httpBackend.expectPUT(baseUrl + '/AdressVerwaltungServer/rest/address/update/' + winehouseAdresse.id, winehouseAdresse);
        AddressDataService.updateAddress(winehouseAdresse.id, winehouseAdresse);
        $httpBackend.flush();
      });
    });

    describe('deleteAddress', function(){
      if('should delete the passed address', function(){
          $httpBackend.expectDELETE(baseUrl + '/AdressVerwaltungServer/rest/address/delete/' + bartoliAdresse.id);
          AddressDataService.deleteAddress(bartoliAdresse.id);
          $httpBackend.flush();
        });
    });

  });

  // Helper objects
  var bartoliAdresse = {
    id          : 1,
    anrede      : 'Frau',
    vorname     : 'Cecelia',
    nachname    : 'Bartoli',
    email       : 'cb@test.de'
  };


  var winehouseAdresse = {
    id          : 2,
    anrede      : 'Frau',
    vorname     : 'Amy',
    nachname    : 'Winehouse',
    email       : 'awinehouse@test.de'
  };

  var testAdressen = [
    {
      id          : 3,
      anrede      : 'Herr',
      vorname     : 'Mischa',
      nachname    : 'Maisky',
      email       : 'mm@test.de'
    },
    {
      id          : 4,
      anrede      : 'Herr',
      vorname     : 'Ludwig',
      nachname    : 'van Beethoven',
      email       : 'vanBeethoven@test.de'
    },
    winehouseAdresse
  ];

  });
