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
  function createMovie(currentUser1, newMovie){

    console.log(self.newMovie);
    currentUser1 = $rootScope.currentUser.id
    console.log(currentUser1)
    // requesting to rails API to create movies
    $http.post(`${server}/movies`, newMovie)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        newMovie = {};
        console.log("MOVIES!!", newMovie);

        $state.go('usershow', {userId: currentUser1.id})
      });
  }

  function showMovies(movies){
      currentUser1 = $rootScope.currentUser.id
    $http.get(`${server}/movies`)
    .then(function(response){
      console.log(response.data)
      self.movies = response.data
    })
      $state.go('usershow')

  }

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
function deleteMovie(id){
  console.log("PLEASE DELETE");
  currentUser1 = $rootScope.currentUser.id
  console.log(id)
  // console.log(film);
  console.log(currentUser1);
  $http.delete(`${server}/movies/${id}`)
  .then(function(response){
    console.log(response);
    // Recall all movies
    // showMovies();
    // self.savedMovies = response.data.currentUser.movies
  })
}

// Need A Show 1 Movie Route
 // function show(movie){
 //   currentUser1 = $rootScope.currentUser.id
 //   $http.get(`${server}/users/${currentUser1.id}/movies/${movie.id}`)
 //   console.log(response.data)
 //
 //   $state.go('movieshow')
 // };
//

  self.createMovie = createMovie;
  self.showMovies = showMovies;
//   self.savedMovie = savedMovie;
//   self.updateMovie = updateMovies;
  self.deleteMovie = deleteMovie;
}
