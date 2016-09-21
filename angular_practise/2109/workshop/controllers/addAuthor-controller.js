module.controller("addAuthor", function($scope, $http, $rootScope, $location) {
    $scope.skills = ["Node.js", "JavaScript", "Go", "Python", "PHP", "Backbone", "React", "Team Management", "Communication"];

    var config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    $scope.array = [];


    $scope.skillsselected = function(skill, authorskill) {
        if (authorskill) {
            $scope.array.push(skill);
        } else {


            for (var i in $scope.array) {
                if ($scope.array[i] === skill) {
                    $scope.array.splice(i, 1);
                }
            }

        }
        console.log($scope.array);

    }




    $scope.addAuthor = function(author) {

        if ($.isEmptyObject(author)) {
            alert("Can not submit empty form");

        } else if ($.isEmptyObject(author.empid)) {
            alert("Employee ID can not be empty");
        } else if ($.isEmptyObject(author.name)) {
            alert("Book Name can not be empty");
        } else if ($.isEmptyObject(author.email)) {
            alert("Author Email can not be empty");
        } else if ($.isEmptyObject(author.department)) {
            alert("Department can not be empty");
        } else if ($.isEmptyObject($scope.array)) {
            alert("Select at least one checkbox of skills");
        } else {


            $scope.author = author;
            console.log("add data");
            console.log($scope.author);
            console.log($scope.array);

            var data2 = {
                empid: $scope.author.empid,
                name: $scope.author.name,
                email: $scope.author.email,
                website: $scope.author.website,
                department: $scope.author.department,
                skills: $scope.array
            };
            console.log(data2);
            $http.post('http://172.27.12.104:3000/author/new', data2, config)
                .then(
                    function(response) {
                        // success callback
                        alert('book added');

                    },
                    function(response) {
                        // failure callback
                        alert('book is not added');
                    }
                );
        }
    };
});