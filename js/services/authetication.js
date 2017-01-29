myApp.factory('Authetication', ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject', function($rootScope, $firebaseAuth, $location, $firebaseObject) {


            var ref = firebase.database().ref();

            var auth = $firebaseAuth();
            var myObject;
            return {
                auth.$onAuthStateChanged(function(authUser) {

                    if (authUser) {
                        var ref = ref.child('users').child(authUser.uid);
                        var userObj = $firebaseObject(ref);
                        $rootScope.currentUser = userObj;

                    } else {

                        $rootScope.currentUser = '';
                    }


                });

                myObject = {
                    login: function(user) {
                        auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {


                            $location.path('/success');

                        }).catch(function(error) {

                            $rootScope.message = error.message;
                        });




                    },
                    logout: function() {
                        return auth.$signOut();
                    },

                    requireAuth: function() {
                        return auth.$requireSignIn();

                    },
                    register: function(user) {

                        auth.$createUserWithEmailAndPassword(user.email, user.password)
                            .then(function(regUser) {
                                var regRef = ref.child('users')
                                    .child(regUser.uid)
                                    .set({
                                        date: firebase.database.ServerValue.TIMESTAMP,
                                        regUser: regUser.firstname,
                                        firstname: user.firstname,
                                        lastname: user.lastname,
                                        email: user.email

                                    });



                                //  $rootScope.message = "Hi " + user.firstname + " , Thanks for registering";

                                myObject.login(user);
                            }).catch(function(error) {

                                $rootScope.message = error.message;

                            });
                    }


                };

                return myObject;



            }]);
