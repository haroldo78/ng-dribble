(function(){
  var app = angular.module('ngDribble', []);
  app.controller('AppCtrl', function(){
    this.name = "Mandy";
    this.updateName = function(){
      this.name = "World";
    };
  });
})();
