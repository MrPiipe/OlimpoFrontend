'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:NewartworkCtrl
 * @description
 * # NewartworkCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('NewartworkCtrl', function (artworkService) {
     var vm = this;
     var body = {};

    vm.getValues = function(name, description, url) {
      console.log("voy a comtar el siguiente body:");
      body = {
               "name": name,
               "description": description,
               "url": url
              };
        console.log(body);
        artworkService.postArtwork(body).then(function(result){});
    };
  });
