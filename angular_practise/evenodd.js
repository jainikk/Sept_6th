var app = angular.module('filters', []);

app.controller('demo', function($scope){
  $scope.example1 = 1;
  $scope.example2 = 2;
  $scope.example3 = 3;
  $scope.example4 = 45;
  $scope.example5 = 777;
  $scope.example6 = 1901;
  $scope.example7 = 10;
  $scope.example8 = 22;
 
})

app.filter('ordinal', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var result = number % 2;
      if(result === 0){
        return number + ' is even'
      } else{
        return number + ' is odd'
      } 
    }
  }
})