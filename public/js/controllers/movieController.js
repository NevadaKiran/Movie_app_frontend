function MovieController($http, $state, $scope, $stateParams, $rootScope){
  console.log("Movie Controller")

  var self = this;
  var server = 'http://localhost:3000'

  self.user = 'test'
  self.test = 'banana'
  self.movies = [];


$rootScope.$on('fetchData', function(event, data){
  console.log(data)
  console.log(self.user)
  self.user = data.id
  populateInitialState(data)


});


function populateInitialState(user){
  console.log(user.id)
  self.user = user.id

  console.log(self.test)
  self.test = 'new'
  console.log(self.test)

  $http.get(`${server}/users/${user.id}/movies`)
  .then(function(response){
    console.log(response.data)
    self.movies = response.data
  })
}

  // http reqeust to rails to create user Movies
  function createMovie(currentUser){
    console.log("Creating Movie")
    console.log(self.user)
    console.log(self.test)
    console.log(self.movies)
    console.log(currentUser)
    // requesting to rails API to create movies
    $http.post(`${server}/users/${currentUser._id}/movies`, self.newMovie)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        self.newMovie = {};
        console.log("MOVIES!!", self.movies);

        $state.go('usershow', {userId: currentUser.id})
      });
  }

  self.createMovie = createMovie;

}
