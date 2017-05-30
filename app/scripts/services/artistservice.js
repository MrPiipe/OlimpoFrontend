'use strict';

/**
 * @ngdoc service
 * @name olimpoApp.artistService
 * @description
 * # artistService
 * Service in the olimpoApp.
 */
angular.module('olimpoApp')
  .service('artistService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllArtist = function(){
      return $http.get('http://localhost:8080/artist');
    };
  });
