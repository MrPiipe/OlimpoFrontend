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
        controllerAs: 'artwork'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/artist', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'artist'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
