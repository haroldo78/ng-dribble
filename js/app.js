(function(){
  var app = angular.module('ngDribble', [
      'ngRoute',
      'ngDribble.controllers',
      'ngDribble.filters']);

  app.config(function($routeProvider){
    $routeProvider
    .when('/shots/:id', {
      controller: 'ShotsCtrl',
      templateUrl: 'partials/shots.html'
    })
    .when('/:list',  {
      controller: 'ShotsListsCtrl',
      templateUrl: 'partials/shots_lists.html'
    })
    .otherwise({redirectTo: "/popular"});
  });
})();
