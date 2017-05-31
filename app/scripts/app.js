'use strict';

/**
 * @ngdoc overview
 * @name olimpoApp
 * @description
 * # olimpoApp
 *
 * Main module of the application.
 */
angular
  .module('olimpoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/artwork', {
        templateUrl: 'views/artwork.html',
        controller: 'ArtworkCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/artist', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'vm'
      })
      .when('/newartwork', {
        templateUrl: 'views/newartwork.html',
        controller: 'NewartworkCtrl',
        controllerAs: 'vm'
      })
      .when('/registerArtist', {
        templateUrl: 'views/registerartist.html',
        controller: 'RegisterartistCtrl',
        controllerAs: 'registerArtist'
      })
      .when('/registerUser', {
        templateUrl: 'views/registeruser.html',
        controller: 'RegisteruserCtrl',
        controllerAs: 'registerUser'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
