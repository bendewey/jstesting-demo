/**
 * @ngdoc overview
 * @name ngTestApp
 * @description
 * # ngTestApp
 *
 * Main module of the application.
 */
angular
  .module('ngBanking',[
    'ngRoute'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'accountCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });