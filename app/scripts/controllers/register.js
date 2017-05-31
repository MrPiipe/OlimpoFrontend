'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('RegisterCtrl', function(userService, artistService) {
    var vm = this;
    vm.register = {};

    vm.getValues = function() {
      if (role) {
        artistService.postArtist(vm.register).then(function(result) {});
      } else {
        userService.postUser(vm.register).then(function(result) {});
      }
    };
  });
