function MovieController($http, $state, $scope, $stateParams, $rootScope){
  console.log("Movie Controller")

  var self = this;
  var server = 'http://localhost:3000'
  self.movies = [];

$rootScope.$on('fetchData', function(event, data){
  console.log(data)
  self.user = data.id
  populateInitialState(data)


});


function populateInitialState(user){
  console.log(user.id)
  self.user = user.id

  $http.get(`${server}/users/${user.id}/movies`)
  .then(function(response){
    console.log(response.data)
    self.movies = response.data
  })
}

  // http reqeust to rails to create user Movies
  function createMovie(newMovie){

    console.log(self.newMovie);
    currentUser1 = $rootScope.currentUser.id
    console.log(currentUser1)
    // requesting to rails API to create movies
    $http.post(`${server}/users/${currentUser1}/movies`, newMovie)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        newMovie = {};
        console.log("MOVIES!!", newMovie);

        $state.go('usershow', {userId: currentUser1.id})
      });
  }

  // function getSavedMovies(savedMovie, currentUser1){
  //   $http.get(`${server}/users/${currentUser1}/movies`, movies)
  //   .then(function(response){
  //     self.savedMovies = response.data.movies
  //     console.log("READ", self.savedMovies);
  //
  //     $state.go('movie_show')
  //   })
  // }
//
// function updateMovie(currentUser){
//   $http.put(`users/${currentUser.id}/movies${$stateParams.movieid}`,
//   {name: self.name, url:self.url})
//   .then(function(movieResponse){
//     self.savedMovies = movieResponse.data.currentUser.movies;
//
//     self.url = ' ';
//     self.name = ' ';
//
//     $state.go('savedMovie', {userid: currentUser1})
//   })
// }
//
// function deleteMovie(id, currentUser){
//   console.log(id)
//   $http.delete(`/users/${currentUser1}/movies/${id}`)
//   .then(function(response){
//     self.savedMovies = response.data.currentUser.movies
//   })
// }

  self.createMovie = createMovie;
//   self.savedMovie = savedMovie;
//   self.updateMovie = updateMovies;
//   self.deleteMovie = deleteMovie;
}
