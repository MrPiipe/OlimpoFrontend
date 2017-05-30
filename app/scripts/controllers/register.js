'use strict';

/**
 * @ngdoc function
 * @name olimpoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the olimpoApp
 */
angular.module('olimpoApp')
  .controller('RegisterCtrl', function (userservice) {
    var vm = this;
    var body = {};

  vm.getValues = function(email,user,password,role,name,lastName,phone,country) {
    console.log("voy a comtar el siguiente body:");
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
      console.log(body);
      userservice.postUser(body).then(function(result){});
  };
});