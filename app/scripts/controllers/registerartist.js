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
    vm.register = {
      contacts: [{

      }]
    };

    vm.getArtistValues = function() {
      vm.register.role = 'ARTIST';
      artistService.postArtist(vm.register).then(function() {});
    };

    vm.addInput = function() {
      vm.register.contacts.push({});
    };

    vm.removeInput = function(index) {
      vm.register.contacts.splice(index, 1);
    };
  });
