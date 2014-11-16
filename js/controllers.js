var controllers = angular.module('ngDribble.controllers', []);

controllers.controller('AppCtrl', function(){
});

controllers.controller('ShotsListCtrl', function($http){
  this.list;
  $http.jsonp('http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK').then(function(data){
    console.log(data);
  })
})
