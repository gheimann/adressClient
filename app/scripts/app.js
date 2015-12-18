'use strict';

/**
 * @ngdoc overview
 * @name adressVerwaltungApp
 * @description
 * # adressVerwaltungApp
 *
 * Main module of the application.
 */
var adressApp = angular.module('adressVerwaltungApp', ['ngRoute'  ]);

  adressApp.config(function ($routeProvider) {
    $routeProvider
      .when('/adresse/:id', {
        templateUrl: 'views/adress_anzeige.html',
        controller: 'AdressAnzeigeCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
