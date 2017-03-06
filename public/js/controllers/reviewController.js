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

  function deleteReview(id, currentUser1){
    currentUser1 = $rootScope.currentUser.id
    console.log(id)
    $http.delete(`${server}/reviews/${id}`)
    .then(function(response){
      self.savedReviews = response.data.currentUser.reviews
    })
  }

  function updateReview(newReview){

    console.log(self.newMovie);
    currentUser1 = $rootScope.currentUser.id
    console.log(currentUser1)

    $http.patch(`${server}/reviews/${id}`)
      .then(function(response){
        console.log(response.data)
        self.movies.push(response.data);
        newMovie = {};
        console.log("I CAN HAZ MOVIREVIEW?!!", newReview);

        $state.go('usershow', {userId: currentUser1.id})
      });
  }

}
