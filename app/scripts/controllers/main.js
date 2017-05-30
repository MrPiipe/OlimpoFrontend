'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('MainCtrl', function (artistService) {
    var vm = this;
    artistService.getAllArtist().then(function(result){
      vm.artists = result.data;
    });

    vm.showDisplayName = function(artist){
      console.log(artist.displayName);
    }; 
  });
