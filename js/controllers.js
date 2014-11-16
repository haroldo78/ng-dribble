var controllers = angular.module('ngDribble.controllers', []);

controllers.controller('ShotsListsCtrl', function($scope, $http){
  $scope.list;
  $http.jsonp('http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK').then(function(data){
    $scope.list = data.data;
  });
})
