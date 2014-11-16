var controllers = angular.module('ngDribble.controllers', []);

controllers.controller('AppCtrl', function(){
  this.name = "Mandy";
  this.updateName = function(){
    this.name = "World";
  };
})
