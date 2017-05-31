'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:RegisteruserCtrl
 * @description
 * # RegisteruserCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('RegisteruserCtrl', function(userService) {
    var vm = this;
    vm.register = {};

    vm.getUserValues = function() {
      vm.register.role = 'USER';
      userService.postArtist(vm.register).then(function() {});
    };
  });
