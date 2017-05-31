'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:ArtworkCtrl
 * @description
 * # ArtworkCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('ArtworkCtrl', function (artworkService) {
    var vm = this;
    artworkService.getAllArtwork().then(function(result){
      vm.artwork = result.data;
    });
});