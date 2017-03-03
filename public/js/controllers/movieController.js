function MovieController($http, $state, $scope, $stateParams, $rootScope){
  console.log("Movie Controller")

  var self = this;
  var server = 'http://localhost:3000'

  self.movies = [];


$rootScope.$on('fetchData', function(event,data){
  populateInitialState(data)
});

function populateInitialState(user){
  $http.get(`${server}/users/${user.id}/movies`)
  .then(function(response){
    console.log(response.data)
    self.movies = response.data
  })
}

  // http reqeust to rails to create user Movies
  function createMovie(currentUser){
    console.log("Creating Board")
    console.log(currentUser)
    // requesting to rails API to create movies
    $http.post(`${server}/users/${currentUser}/movies`)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        self.title = {};
        self.director={};
        self.genre= {};
        self.release_date = {};
        self.poster_url = {};
        console.log("MOVIES!!", self.movies);
      });
  }

  self.createMovie = createMovie;

}
