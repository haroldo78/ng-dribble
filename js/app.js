(function(){
  var app = angular.module('ngDribble', ['ngRoute','ngDribble.controllers']);

  app.config(function($routeProvider){
    $routeProvider
    .when('/:list',  {
      controller: 'ShotsListsCtrl',
      templateUrl: 'partials/shots_lists.html'
    })
    .otherwise({redirectTo: "/popular"});
  });
})();
