'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('RegisterCtrl', function (userService, artistService) {
    var vm = this;
    var body = {};

  vm.getValues = function(email,user,password,role,name,lastName,phone,country) {
    console.log("voy a comtar el siguiente body:");
      console.log(role);
      if(role){
          body = {
                  "displayName": user,
                  "contacts": [{
                    "name": name,
                    "lastName": lastName,
                    "phone": phone,
                    "country": country
                  }],
                  "artTypes": ["MUSIC", "ACTING"],
                  "genderByArtType": [{"artType": "MUSIC", "genders": ["Rock", "Indie"]}, {"artType": "ACTING", "genders": ["Comedy"]}]
                 }
        artistService.postArtist(body).then(function(result){});
      }else{
        body = {
                  "loginInformation": {
                    "email": email,
                    "username" : user, //TODO: this is not in the backend
                    "password": password,
                    "role": role
                  },
                  "contactInformation": {
                    "name": name,
                    "lastName": lastName,
                    "phone":phone,
                    "country": country
                  },
                  "profilePicture": "sopotamadre.png"
                };
        userService.postUser(body).then(function(result){});
      }
  };
});