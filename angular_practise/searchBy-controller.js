module.controller("searchBy", function($scope, $http,$rootScope,$location) {
			var config = {
                headers : {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }		
					$scope.searchByISBN=function(book){
				/*	$rootScope.book=book;
					console.log($scope.book);
					var available=[];
					available=$scope.book.availableOn[0].split(',');
					console.log(available);
					
					$location.path('#/bookdetails?isbn='+$scope.book.isbn);
					var name=$location.search(); 
					console.log("name="+name);
					var name1 = $.param(name);
					console.log("name1="+name1);*/
					//$scope.myData.push(book);
					
					var name=$location.search(); 
					console.log("name="+name);
										
							$http.post('http://172.27.12.104:3000/book/byisbn',$location.search(),config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 //$location.path('#/bookdetails?isbn='+$scope.book.isbn);
									
									//console.log("name"+name);
									console.log(response.data);
									$rootScope.book=response.data;
									console.log($scope.book);
									 
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
					};
					
					$scope.searchByAuthor=function(book){
					
					console.log(book);
					//console.log($rootScope.myAuthor);
				/*	for(var c in $rootScope.myAuthor){
					   console.log($rootScope.myAuthor[c].name);
					   console.log(book.author);
						if(book.author===$rootScope.myAuthor[c].name){
						console.log($rootScope.myAuthor[c]);
						$rootScope.searchauthor=$rootScope.myAuthor[c];
						}
					}
					console.log($rootScope.searchauthor);
					//$scope.myData.push(book);
					$location.path('#/authordetails?name='+$rootScope.searchauthor.name);
					
					var name=$location.search(); 
					console.log("name="+name);
					var name1 = $.param(name);
					console.log("name1="+name1);
					
					*/
												
							$http.post('http://172.27.12.104:3000/author/byname',$location.search(),config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 console.log(response.data);
									$rootScope.searchauthor=response.data;
									console.log($scope.searchauthor);
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
					};
		});