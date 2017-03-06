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

  $http.get(`${server}/users/${user.id}`)
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
//Show Movies Route
  function showMovies(movies){
      currentUser1 = $rootScope.currentUser.id
    $http.get(`${server}/movies`)
    .then(function(response){
      console.log(response.data)
      self.movies = response.data
    })
      $state.go('movieshow')

  }

//Show Movie Route
  function showMovie(movie){
    console.log(movie)
    currentUser1= $rootScope.currentUser1.id
    $http.get(`${server}/movies/${id}`)
    .then(function(response){
      console.log(response);
    })
    $state.go('reviewshow')
  }


  function populateFormData(movie, currentUser) {
    console.log("HITTING UPDATE?");
    title: self.title
      poster_url:self.poster_url
      director:self.director
      genre: self.genre
      release_date:self.release_date

    $state.go('updateMovie', {
      userId: currentUser._id,
      movieId: movie._id
    })
   }


  function updateMovie(id){
    console.log("hitting update");
    currentUser1 = $rootScope.currentUser.id
    console.log(id)
    $http.put(`${server}/movies/${id}`,
    {title: self.title,
      poster_url:self.poster_url,
      director:self.director,
      genre: self.genre,
      release_date:self.release_date
    })
    .then(function(movieResponse){
      console.log(movieResponse)
      self.movies = movieResponse.data.movies;

      self.title = ' ';
      self.poster_url = ' ';
      self.director = ' ';
      self.genre = ' ';
      self.release_date = ' ';

      $state.reload('usershow', {userid: currentUser1})
    })
  }



//Delete Route
  function deleteMovie(id){
    console.log("PLEASE DELETE");
    currentUser1 = $rootScope.currentUser.id
    $http.delete(`${server}/movies/${id}`)
    .then(function(response){
      console.log(response);
    })
    $state.reload('movieshow')
  }


  self.createMovie = createMovie;
  self.showMovies = showMovies;
  self.updateMovie = updateMovie;
  self.deleteMovie = deleteMovie;
}




// function updateMovie(id){
//   currentUser1 = $rootScope.currentUser.id
//   console.log(id)
//   $http.put(`${server}/movies/${movieid}`,
//   {name: self.name, url:self.url})
//   .then(function(movieResponse){
//     console.log(movieResponse)
//     // self.savedMovies = movieResponse.data.currentUser.movies;
//     //
//     // self.url = ' ';
//     // self.name = ' ';
//
//     $state.reload('usershow', {userid: currentUser1})
//   })
// }




// Need A Show 1 Movie Route
 // function show(movie){
 //   currentUser1 = $rootScope.currentUser.id
 //   $http.get(`${server}/users/${currentUser1.id}/movies/${movie.id}`)
 //   console.log(response.data)
 //
 //   $state.go('movieshow')
 // };
//
