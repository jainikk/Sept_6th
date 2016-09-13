 function showbookform(){
        $("#bookeditingform").show();
		$("#bookdetails").hide();
    };
	
	function showauthorform(){
        $("#authorform").show();
		$("#authordetails").hide();
    };
	
        angular.module('bookDemoApp',['ngRoute','ngResource'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
        .when("/",{
			   templateUrl:"Partials/table.html",
			   })
		.when("/addauthor",{
			   templateUrl:"Partials/addauthor.html",
			   controller:"londonCtrl"
			   })

		.when("/addbook",{
			   templateUrl:"Partials/addbook.html",
			   controller:"parisCtrl"
			   })
		.when("/authordetails",{
			   templateUrl:"Partials/authordetails.html",
			   controller:"parisCtrl"
			   })
		.when("/bookdetails",{
			   templateUrl:"Partials/bookdetails.html",
			   controller:"londonCtrl"
			   });
		}])

		.controller("londonCtrl",function($scope,$location,$http,$rootScope){
        var config = {
                headers : {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }		
		var name=$location.search(); 
					console.log("name="+name);
					var name1 = $.param(name);
					var name2=[];
					name2=name1.split('=');
					console.log("name2="+name2[0]);
					//$scope.myData.push(book);
					$rootScope.book={};
					for(var i in $scope.myData){
						if($rootScope.myData[i].isbn===name2[0]){
						        $rootScope.book.isbn=name2[0];
								$rootScope.book.title=$rootScope.myData[i].title;
								$rootScope.book.author=$rootScope.myData[i].author;
								$rootScope.book.price=$rootScope.myData[i].price;
						}
					}
												
							$http.post('http://172.27.12.104:3000/book/byisbn',name2[0],config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 //$location.path('#/bookdetails?isbn='+$scope.book.isbn);
									
									//console.log("name"+name);
									console.log(response.data);
									 
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
		
		})

		.controller("parisCtrl",function($scope,$location,$http,$rootScope){
		var config = {
                headers : {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }		
		var name=$location.search(); 
					console.log("name="+name);
					var name1 = $.param(name);
					var name2=[];
					name2=name1.split('=');
					console.log("name2="+name2[0]);
					//$scope.myData.push(book);
					$rootScope.searchauthor={};
					for(var i in $rootScope.myAuthor){
						if($rootScope.myAuthor[i].name===name2[0]){
						        $rootScope.searchauthor.name=name2[0];
								$rootScope.searchauthor.empid=$rootScope.myAuthor[i].empid;
								$rootScope.searchauthor.email=$rootScope.myAuthor[i].email;
								$rootScope.searchauthor.website=$rootScope.myAuthor[i].website;
								$rootScope.searchauthor.department=$rootScope.myAuthor[i].department;
								$rootScope.searchauthor.skills=$rootScope.myAuthor[i].skills;
						}
					}
												
							$http.post('http://172.27.12.104:3000/author/byname',name2[0],config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 //$location.path('#/bookdetails?isbn='+$scope.book.isbn);
									
									//console.log("name"+name);
									console.log(response.data);
									 
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
		})
		
		.controller("bookctrl", function($scope, $http,$rootScope,$location) {
				$http.get("http://172.27.12.104:3000/book/list").then(function(response) {
				$rootScope.myData = response.data;
				console.log($scope.myData);
				});
				
				$http.get("http://172.27.12.104:3000/author/list").then(function(response) {
				$rootScope.myAuthor = response.data;
				console.log($scope.myAuthor);
				});
				
		var config = {
                headers : {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }
		
		 $scope.availableOn=['amazon','eBay','Flipkart'];
	//	 $scope.selectedavailableOn=[];
		var temp1='';
		
				$scope.chkSelected = function(cb){
				
				 temp1+=cb+',';
				 
				 console.log(temp1);
				 
				/*
					$scope.selectedavailableOn.push(cb);
					console.log($scope.selectedavailableOn);*/
				}
				
		$scope.add=function(book){
					
					$scope.book=book;
					console.log("add data");
					//$scope.myData.push(book);
					console.log($scope.book);
				//	console.log($scope.selectedavailableOn);
					$scope.book.availableOn=temp1;
					var data= $.param({
							isbn: $scope.book.isbn,
							title: $scope.book.title,
							author:$scope.book.author,
							price:$scope.book.price,
							availableOn:$scope.book.availableOn
							});
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
			
			
			 $scope.skills=["Node.js", "JavaScript", "Go", "Python", "PHP", "Backbone", "React","Team Management", "Communication"];
	//	 $scope.selectedSkills=[];
		   
		   var temp='';
		 $scope.skillsselected = function(skill){
				 temp+=skill+',';
				 console.log(temp);
					
				
				}
				
				
				
			/*	
				
				//for checked box
        
            $("input:checkbox[name=type]:checked").each(function(){
               // avab.push($(this).val());
                
               avab += ''+$(this).val() +',';
                
            });
          
      emp3['skills']=avab;
         console.log(emp3);*/
				
					
		 
		 
				$scope.addAuthor=function(author){
				temp = temp.replace(/,\s*$/, "");
			//	$scope.selectedSkills.push(temp);
				console.log(temp);
			//	console.log($scope.selectedSkills);
					$scope.author=author;
					console.log("add data");
					console.log($scope.author);
					$scope.author.skills=temp;
					console.log($scope.author.skills);
					//$scope.myData.push(book);
					var data2= $.param({
							empid: $scope.author.empid,
							name: $scope.author.name,
							email:$scope.author.email,
							skills:$scope.author.skills,
							department:$scope.author.department,
							website:$scope.author.website
							});
									console.log(data2);
							$http({  
											url:"http://172.27.12.104:3000/author/new",  
											method:'POST',  
											data:data2,
												headers: {'Content-Type': 'application/x-www-form-urlencoded'}
										 }).success(function (response) {  
											$scope.value = response; 
											  alert($scope.value);
										 })  
										   .error(function (error) {  
											  alert(error);  
										   });
					};
					
					$scope.searchByISBN=function(book){
					$rootScope.book=book;
					console.log($scope.book);
					var available=[];
					available=$scope.book.availableOn[0].split(',');
					console.log(available);
					
					$location.path('#/bookdetails?isbn='+$scope.book.isbn);
					var name=$location.search(); 
					console.log("name="+name);
					var name1 = $.param(name);
					console.log("name1="+name1);
					//$scope.myData.push(book);
					var data= $.param({
							isbn: $scope.book.isbn,
							title: $scope.book.title,
							author:$scope.book.author,
							price:$scope.book.price
							});
												
							$http.post('http://172.27.12.104:3000/book/byisbn',name1,config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 //$location.path('#/bookdetails?isbn='+$scope.book.isbn);
									
									//console.log("name"+name);
									console.log(response);
									 
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
					};
					
					$scope.deleteBook=function(book){
					var isbn=book.isbn;
					console.log(isbn);
					 var isbn1={"isbn":isbn};
					console.log(isbn1);
					
												
						/*	$http.delete('http://172.27.12.104:3000/book/remove',$.param(isbn1),config)
					   .then(
								   function(response){
									 // success callback
									 alert('book deleted');
								   }, 
								   function(response){
									 // failure callback
									 alert('book deletion failed');
								   }
							);*/
							
					$http({  
											url:"http://172.27.12.104:3000/book/remove",  
											method:'DELETE',  
											data: $.param(isbn1),
												headers: {'Content-Type': 'application/x-www-form-urlencoded'}
										 }).success(function (response) {  
											$scope.value = response; 
											  alert($scope.value);
										 })  
										   .error(function (error) {  
											  alert(error);  
										   });

					};
					
					$scope.deleteAuthor=function(author){
					var empid=author.empid;
					console.log(empid);
					 var empid1={"empid":empid};
					console.log(empid1);
					
												
						/*	$http.delete('http://172.27.12.104:3000/book/remove',$.param(isbn1),config)
					   .then(
								   function(response){
									 // success callback
									 alert('book deleted');
								   }, 
								   function(response){
									 // failure callback
									 alert('book deletion failed');
								   }
							);*/
							
					$http({  
											url:"http://172.27.12.104:3000/author/remove",  
											method:'DELETE',  
											data: $.param(empid1),
												headers: {'Content-Type': 'application/x-www-form-urlencoded'}
										 }).success(function (response) {  
											$scope.value = response; 
											  alert($scope.value);
										 })  
										   .error(function (error) {  
											  alert(error);  
										   });

					};
					
					$scope.editBook=function(book){
					temp = temp.replace(/,\s*$/, "");
					$rootScope.book=book;
					console.log($rootScope.book);
					//$scope.myData.push(book);
					$scope.book.availableOn=temp1;
					var data1= $.param({
							isbn: $rootScope.book.isbn,
							title: $rootScope.book.title,
							author:$rootScope.book.author,
							price:$rootScope.book.price
							});
												
							$http.put('http://172.27.12.104:3000/book/update',data1,config)
					   .then(
								   function(response){
									 // success callback
									alert('book updated');
								   }, 
								   function(response){
									 // failure callback
									 console.log('book failed to update');
								   }
							);
					};
					
					$scope.editAuthor=function(searchauthor){
					$rootScope.author=searchauthor;
					console.log($rootScope.author);
					//$scope.myData.push(book);
					var data1= $.param({
							empid: $scope.author.empid,
							name: $scope.author.name,
							email:$scope.author.email,
							skills:$scope.author.skills,
							department:$scope.author.department,
							website:$scope.author.website
							});
												
							$http.put('http://172.27.12.104:3000/author/update',data1,config)
					   .then(
								   function(response){
									 // success callback
									 alert('author updated');
								   }, 
								   function(response){
									 // failure callback
									 alert('update failed');
								   }
							);
					};
					
					$scope.searchByAuthor=function(book){
					
					console.log(book);
					//console.log($rootScope.myAuthor);
					for(var c in $rootScope.myAuthor){
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
					
					var data= $.param({
							empid: $scope.searchauthor.empid,
							name: $rootScope.searchauthor.name,
							email:$rootScope.searchauthor.email,
							skills:$rootScope.searchauthor.skills,
							department:$rootScope.searchauthor.department,
							website:$rootScope.searchauthor.website
							});
												
							$http.post('http://172.27.12.104:3000/author/byname',name1,config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
								   }, 
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
					};

});