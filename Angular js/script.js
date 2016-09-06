angular.module('docsTemplateUrlDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.cybagian = {
    name: 'Richa',
    city: 'Pune',
	age: '21',
  };
}])
.directive('myClient', function() {
  return {
    templateUrl: function(elem, attr) {
      return 'cybagian-' + attr.type + '.html';
    }
  };
});