function MovieController($http, $state, $scope, $stateParams, $rootScope){
  console.log("Movie Controller")

  var self = this;
  var server = 'https://young-headland-63238.herokuapp.com/'
  self.movies = [];


$rootScope.$on('fetchData', function(event, data){
  self.user = data.id
  populateInitialState(data)

});

function editPage(){
  console.log("editPage/");
  $state.go('updateMovie')
}

function populateInitialState(user){
  self.user = user.id
  $http.get(`${server}/users/${user.id}`)
  .then(function(response){
    self.movies = response.data
  })
}

  // http reqeust to rails to create user Movies
  function createMovie(currentUser1, newMovie){
    currentUser1 = $rootScope.currentUser.id
    // requesting to rails API to create movies
    $http.post(`${server}/movies`, newMovie)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        newMovie = {};
        $state.go('usershow', {userId: currentUser1.id})
      });
  }
//Show Movies Route
  function showMovies(movies){
    console.log('show movie')
    currentUser1 = $rootScope.currentUser.id
    $http.get(`${server}/movies`)
    .then(function(response){
      console.log(response.data)
      self.movies = response.data
    })
      $state.go('movieshow')

  }

  function updateMovie(movie){
    console.log("hitting update");
    currentUser1 = $rootScope.currentUser.id
    console.log(movie)
    $http.put(`${server}/movies/${movie}`,
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
  self.editPage = editPage;
}




// //Show Movie Route
//   function showMovie(movie){
//     currentUser1= $rootScope.currentUser1.id
//     console.log(movie)
//     $http.get(`${server}/movies/${id}`)
//     .then(function(response){
//       console.log(response);
//     })
//     $state.go('moviereviews')
//   }
