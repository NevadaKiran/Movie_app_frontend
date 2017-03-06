function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory){
  // console.log("AuthController")
  var self = this
  var server = 'http://localhost:3000'

  function signup(user) {
    console.log("SIGN");
    $http.post(`${server}/users`, {user: user})
    .then(function(response){
      console.log(response.data);
      $state.go('login');
    });
  }

function login(user){
  console.log("LOGIN");
  $http.post(`${server}/users/login`, {user: user})
  .then(function(response){
    AuthTokenFactory.setToken(response.data.token)

    $scope.$emit('userLoggedIn', response.data.user);
    $rootScope.$emit('fetchData', response.data.user);
    $rootScope.currentUser = response.data.user
    $state.go('movieshow');
  });
}

function logout(){
  AuthTokenFactory.setToken()

  $scope.$emit('userLoggedOut');
  $state.go('homepage');
}

this.signup = signup;
this.login = login;
this.logout = logout;

}
