/**
 * Created by gabiheimann on 11.09.15.
 */
'use strict';


describe('List Address', function(){

    var ptor;
    var baseUrl='http://127.0.0.1:9000/';

    //beforeEach(function(){
    //    browsers.get(baseUrl);
    //    ptro = protractor.getInstance();
    //});

    it('should contain the address list', function() {
        browser.get('http://localhost:8081/app/#/address');
        var addressList = element.all(by.repeater('addresses in address'));
        expect(addressList.count()).toEqual(5);
    });
    //
    //it('should contain the appropriate nachname', function() {
    //    browser.get('http://localhost:8081/app/#/address/4/edit');
    //    var el = element(by.css('ul li:first-child'));
    //    expect(el.getText()).toEqual('Nummer: 4');
    //});

} );