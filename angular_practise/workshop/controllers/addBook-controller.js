module.controller("addBook", function($scope, $http,$rootScope,$location) {
		var config = {
                headers : {
                    'content-type': 'application/json'
                }
            }
		 $scope.availableOn=['amazon','eBay','Flipkart'];
		 
		 $scope.array=[];
		
				$scope.chkSelected = function(cb){
				
				 $scope.array.push(cb);
				 
				 
				 
				
				}
				
		$scope.addBook=function(book){
				
					$scope.book=book;
					console.log("add data");
					
					console.log($scope.book);
			
				
					var data= {
							isbn: $scope.book.isbn,
							title: $scope.book.title,
							author:$scope.book.author,
							price:$scope.book.price,
							availableOn:$scope.array
							};
							console.log($scope.book);
							console.log(data);
												
							$http.post('http://172.27.12.104:3000/book/new',data,config)
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