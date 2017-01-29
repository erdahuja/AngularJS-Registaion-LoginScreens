var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('appCtrl', ['$scope', function($scope) {

    $scope.message = "Welcome!"

}]);
