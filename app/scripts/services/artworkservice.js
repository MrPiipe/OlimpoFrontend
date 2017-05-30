'use strict';

/**
 * @ngdoc service
 * @name olimpoApp.artworkservice
 * @description
 * # artworkservice
 * Service in the olimpoApp.
 */
angular.module('olimpoApp')
  .service('artworkService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllArtwork = function(){
      return $http.get('http://localhost:8080/artwork');
    };
  });
