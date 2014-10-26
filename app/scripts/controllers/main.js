'use strict';

/**
 * @ngdoc function
 * @name swksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swksApp
 */
angular.module('swksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
