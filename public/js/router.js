angular.module('movie-angular-app', ['ui.router'])
    .config(movieRouter)
    .config(authInterceptor);

    function authInterceptor($httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');
        }

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
          url:'/users/:userid/reviews',
          templateUrl: '/partials/user_show.html'
        })
        .state('movieshow', {
          url: '/movies',
          templateUrl: '/partials/movie_show.html'
        })
        .state('moviereviews',{
          url:'/reviews',
          templateUrl: '/partials/movie_review.html'
        })
        .state('updateMovie',{
          url:'/movies/:movieid',
          templateUrl: '/partials/movie_edit.html'
        })
      }
