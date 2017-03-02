angular.module('movie-angular-app', ['ui.router'])
    .config(movieRouter);

    // movieRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function movieRouter($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('homepage', {
          url: '/',
          templateUrl: "/partials/home.html"

        })
        .state('login', {
          url:'/login',
          templateUrl:"/partials/login.html"
        })
        .state('signup',{
          url:'/signup',
          templateUrl:'/partials/signup.html'
        })
        .state('usershow',{
          url:'/user/:userid',
          templateUrl: '/partials/user_show.html'
        })
        .state('movieshow', {
          url: '/movie/:movieid',
          templateUrl: '/partials/movie_show.html'
        })
        .state('movierevies',{
          url:'/movie/:movieid/review',
          templateUrl: '/partials/movie_review.html'
        })
      }