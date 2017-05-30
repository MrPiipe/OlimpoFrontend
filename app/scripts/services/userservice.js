'use strict';

/**
 * @ngdoc service
 * @name olimpoApp.userservice
 * @description
 * # userservice
 * Service in the olimpoApp.
 */
angular.module('olimpoApp')
  .service('userservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.postUser = function(body){
      return $http.post('http://localhost:8080/user',body);
    };
  });
