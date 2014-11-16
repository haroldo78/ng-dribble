var controllers = angular.module('ngDribble.controllers', []);

controllers.controller('ShotsListsCtrl', function($scope, $routeParams, $http){
  var list = $routeParams.list;
  $http.jsonp('http://api.dribbble.com/shots/'+ list +'?callback=JSON_CALLBACK').then(function(data){
    $scope.list = data.data;
  });
});

controllers.controller('ShotsCtrl', function($scope, $routeParams, $http){
  var id = $routeParams.id;
  $http.jsonp('http://api.dribbble.com/shots/'+ id +'?callback=JSON_CALLBACK').then(function(data){
    $scope.shot = data.data;
    console.log(data.data.player.created_at);
  });
});
