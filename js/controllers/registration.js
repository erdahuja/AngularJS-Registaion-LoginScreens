myApp.controller('RegistrationCtrl', ['$scope', function($scope) {
    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email; // body...
    };

    $scope.register = function() {
        $scope.message = "Welcome " + $scope.user.firstname;

    };
}]);
