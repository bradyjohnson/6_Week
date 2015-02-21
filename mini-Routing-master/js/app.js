/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('routingApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'js/products/productTmpl.html',
      controller: 'productCtrl'
    })
    .when('/settings', {
      templateUrl: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});