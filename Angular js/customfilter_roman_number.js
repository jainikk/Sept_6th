var app = angular.module('filters', []);

app.controller('demo', function($scope){
  $scope.example1 = 1;
  $scope.example2 = 2;
  $scope.example3 = 3;
  $scope.example4 = 4;
  $scope.example5 = 5;
  $scope.example6 = 6;
  $scope.example7 = 7;
  $scope.example8 = 8;
  $scope.example8 = 9;
  $scope.example8 = 10;
})

app.filter('roman', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var lastDigit = number;
      if(lastDigit === 1){
        return  'I'
      } else if(lastDigit === 2){
        return  'II'
      } else if (lastDigit === 3){
        return  'III'
      } else if (lastDigit === 4){
        return  'IV'
      } else if (lastDigit === 5){
        return 'V'
      } else if (lastDigit === 6){
        return 'VI'
	  } else if (lastDigit === 7){
        return  'VII'
	  }  else if (lastDigit === 8){
        return 'VIII'
	  }  else if (lastDigit === 9){
        return  'IX'
	  }  else if (lastDigit === 10){
        return 'X'
	  }
	 }
  }
})