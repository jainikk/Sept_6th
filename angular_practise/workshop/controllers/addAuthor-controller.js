module.controller("addAuthor", function($scope, $http,$rootScope,$location) {
			 $scope.skills=["Node.js", "JavaScript", "Go", "Python", "PHP", "Backbone", "React","Team Management", "Communication"];
	
		   var config = {
                headers : {
                    'content-type': 'application/json'
                }
            }
		  $scope.array=[];
		   
		 $scope.skillsselected = function(skill){
			console.log($scope.authorskill);
			 
				$scope.array.push(skill);
				 console.log($scope.array);
				 for(var i=0; i<$scope.array.length-1;i++){
					 for(var j=i+1;j<$scope.array.length-1;j++){
					if($scope.array[i]===$scope.array[j]){
						$scope.array.splice(j,1);
					}
					 }
				}
				
			 
				
				console.log($scope.array);
				
				}
				
				
		
				
					
		 
		 
				$scope.addAuthor=function(author){
		
				
		
					$scope.author=author;
					console.log("add data");
					console.log($scope.author);
					console.log($scope.array);
				
					var data2= {
							empid: $scope.author.empid,
							name: $scope.author.name,
							email:$scope.author.email,
							website:$scope.author.website,
							department:$scope.author.department,
							skills:$scope.array
							};
									console.log(data2);
							$http.post('http://172.27.12.104:3000/author/new',data2,config)
					   .then(
								   function(response){
									 // success callback
									 alert('book added');
									   
								   }, 
								   function(response){
									 // failure callback
									 alert('book is not added');
								   }
							);
					};
		});