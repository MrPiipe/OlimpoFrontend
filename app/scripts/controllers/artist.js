'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:ArtistCtrl
 * @description
 * # ArtistCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('ArtistCtrl', function (artistService) {
    var vm = this;
    artistService.getAllArtist().then(function(result){
      vm.artists = result.data;
    });
  });
