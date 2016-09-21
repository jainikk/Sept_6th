module.controller("edit_delete-author", function($scope, $http, $rootScope, $location) {



    var config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    setTimeout(function() {
        var name = $location.search();
        console.log("name=" + name);
        console.log($scope.myAuthor);
        var name1 = $.param(name);
        var name2 = [];
        name2 = name1.split('=');
        console.log("name2=" + name2[0]);

        $rootScope.searchauthor = {};

        var xyz = $.param({
            name: name2[0]
        })


        $http.post('http://172.27.12.104:3000/author/byname', xyz, config)
            .then(
                function(response) {
                    // success callback
                    console.log('success');
                   
                    console.log(response.data);
                    $rootScope.searchauthor = response.data;

                },
                function(response) {
                    // failure callback
                    console.log('failed');
                }
            );

    }, 200);
    $scope.editAuthor = function(searchauthor) {
        $rootScope.author = searchauthor;
        console.log($rootScope.author);
       
        var data1 = $.param({
            empid: $scope.author.empid,
            name: $scope.author.name,
            email: $scope.author.email,
            skills: $scope.author.skills,
            department: $scope.author.department,
            website: $scope.author.website
        });

        $http.put('http://172.27.12.104:3000/author/update', data1, config)
            .then(
                function(response) {
                    // success callback
                    alert('author updated');
                },
                function(response) {
                    // failure callback
                    alert('update failed');
                }
            );
    };

    $scope.deleteAuthor = function(author) {
        var empid = author.empid;
        console.log(empid);
        var empid1 = {
            "empid": empid
        };
        console.log(empid1);


        $http({
                url: "http://172.27.12.104:3000/author/remove",
                method: 'DELETE',
                data: $.param(empid1),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function(response) {
                $scope.value = response;
                alert($scope.value);
            })
            .error(function(error) {
                alert(error);
            });

    };


});