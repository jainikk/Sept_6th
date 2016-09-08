var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
	
$scope.iptValue = '';

}
)	
app.filter('Grade', [function() { 
 
      return function(marks) {  
						  //var marks = new Date().getTime();     
						       
						  if (marks >= 90) {        
						  return 'A+';        } 
						  else if (marks < 90 && marks > 80) {     
						  return 'B';        } 
						  else if (marks <=80 && marks > 70) {    
						  return 'C';        } 
						  else if (marks <= 70 && marks > 60) {      
						  return 'D';        } 
						  else {      
						  return 'FAILED :(';        }  
	  };   
	  }]); 