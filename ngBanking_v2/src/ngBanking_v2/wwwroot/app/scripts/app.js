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
    'ngRoute',
    'ui.bootstrap'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });