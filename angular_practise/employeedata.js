var app = angular.module('myApp', []);
var count=0;
app.controller('employeesCtrl', function($scope, $http) {
    $http.get("package.json").then(function(response) {
        $scope.myData = response.data.employee;
		console.log($scope.myData);
		
    });
	$scope.sort=function(col_name){
		count++;
		$scope.col_name=col_name;
		if(count%2==0)
		$scope.str='-';
		else
			$scope.str='+';
	};
	
	$scope.edit=function(employee){
		$scope.employee_edit=employee;
	};
	
	$scope.add=function(employee_new){
		$scope.myData.push(employee_new);
	};
	
	$scope.del=function(employee){
		$scope.employee_edit=employee;
	};
	
	$scope.delemp=function(employee){
		$scope.employee_edit.firstname='';
		$scope.employee_edit.lastname='';
		$scope.employee_edit.email='';
		$scope.employee_edit.dateofjoining='';
		$scope.employee_edit.extension='';
		$scope.employee_edit.isonbench='';
	};
});

app.filter("boolean", function() {
  return function(input) {
    input = input || '';
    var out;
    if(input=="true"){
		out='Y';
	}
	else if(input=="false"){
		out='N';
	}
	else{
		out='';
	}
    
    return out;
  };
});