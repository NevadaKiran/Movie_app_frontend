function HomeController($scope, $http){
  // console.log("HomeController")
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    console.log(data)
    self.currentUser = data;
  });

  $scope.$on('userLoggedOut', function(event, data){
    self.currentUser = null;
  });
}
