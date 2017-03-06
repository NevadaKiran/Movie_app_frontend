function ReviewController($scope, $http, $state, $stateParams, $rootScope){
  console.log("ReviewController");
  var self = this;
  var server = 'http://localhost:3000'
  self.review = [];

  $rootScope.$on('fetchData', function(event, data){
    console.log(data)
    self.user = data.id
    populateInitialState(data)
  });

  function deleteMovie(id, currentUser1){
    currentUser1 = $rootScope.currentUser.id
    console.log(id)
    $http.delete(`/users/${currentUser1}/movies/${id}`)
    .then(function(response){
      self.savedMovies = response.data.currentUser.movies
    })
  }

}
