'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:RegisterartistCtrl
 * @description
 * # RegisterartistCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('RegisterartistCtrl', function(artistService) {
    var vm = this;
    vm.register = {};

    vm.getArtistValues = function() {
      vm.register.role = "user";
      artistService.postArtist(vm.register).then(function() {});
    };
  });
