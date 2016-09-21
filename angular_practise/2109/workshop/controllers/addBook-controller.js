module.controller("addBook", function($scope, $http, $rootScope, $location) {
    var config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    $scope.availableOn = ['amazon', 'eBay', 'Flipkart'];

    $scope.array = [];


    $scope.chkSelected = function(cb, available) {
        if (available) {
            $scope.array.push(cb);
        } else {


            for (var i in $scope.array) {
                if ($scope.array[i] === cb) {
                    $scope.array.splice(i, 1);
                }
            }

        }


        console.log($scope.array);
    }



    $scope.addBook = function(book) {
        if ($.isEmptyObject(book)) {
            alert("Can not submit empty form");

        } else if ($.isEmptyObject(book.isbn)) {
            alert("ISBN can not be empty");
        } else if ($.isEmptyObject(book.title)) {
            alert("Book Title can not be empty");
        } else if ($.isEmptyObject(book.author)) {
            alert("Author name can not be empty");
        } else if ($.isEmptyObject(book.price)) {
            alert("Book Price can not be empty");
        } else if ($.isEmptyObject($scope.array)) {
            alert("Select at least one checkbox of availability");
        } else {

            $scope.book = book;
            console.log("add data");

            console.log($scope.book);


            var data = {
                isbn: $scope.book.isbn,
                title: $scope.book.title,
                author: $scope.book.author,
                price: $scope.book.price,
                availableOn: $scope.array
            };
            console.log($scope.book);
            console.log(data);

            $http.post('http://172.27.12.104:3000/book/new', data, config)
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