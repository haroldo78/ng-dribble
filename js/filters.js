var filters = angular.module('ngDribble.filters', []);
filters.filter('dribbleDate', function($filter){
  return function (datestr, format) {
    return $filter('date')(Date.parse(datestr) || datestr, format);
  }
});
