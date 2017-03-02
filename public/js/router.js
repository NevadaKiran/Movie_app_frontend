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
      }
