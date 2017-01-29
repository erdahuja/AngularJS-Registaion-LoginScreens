myApp.controller('RegistrationCtrl', ['$scope', '$firebase', '$firebaseAuth', function($scope, $firebase, $firebaseAuth) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();





    $scope.login = function() {
        // $scope.message = "Welcome " + $scope.user.email; // body...

        Authentication.login($scope.user);
    };

    $scope.register = function() {



        Authentication.register($scope.user);

    };
}]);
