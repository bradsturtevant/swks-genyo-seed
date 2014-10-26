'use strict';

/**
 * @ngdoc function
 * @name swksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swksApp
 */
angular.module('swksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
