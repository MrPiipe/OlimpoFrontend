'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:NewartworkCtrl
 * @description
 * # NewartworkCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('NewartworkCtrl', function(artworkService) {
    var vm = this;
    vm.artwork = {};

    vm.getValues = function() {
      artworkService.postArtwork(vm.artwork).then(function() {});
    };
  });
