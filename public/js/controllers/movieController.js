function MovieController($http, $state){
  console.log("MovieController");

  self = this;
  server = 'http://localhost:3000'
  self.movies = [];
  self.createMovie = createMovie;


  // http reqeust to rails to create user Movies
  function createMovie(){
    console.log("Creating Board");
    // requesting to rails API to create movies
    $http.post(`${server}/users/` + currentUser.id + "/movies")
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        self.newMovieTitle = {}
        console.log("MOVIES!!", self.movies);
      });
  }


}
