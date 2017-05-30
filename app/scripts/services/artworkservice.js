'use strict';

/**
 * @ngdoc service
 * @name olimpoApp.artworkservice
 * @description
 * # artworkservice
 * Service in the olimpoApp.
 */
angular.module('olimpoApp')
  .service('artworkservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllArtworks= function(){
      return $http.get('http://localhost:8080/artwork');
    };
  });
