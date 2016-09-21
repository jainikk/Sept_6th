module.controller("edit_delete-book", function($scope, $http, $rootScope, $location) {
    var config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    setTimeout(function() {
        var name = $location.search();
        console.log("name=" + name);
        var name1 = $.param(name);
        console.log(name1);
        var name2 = [];
        name2 = name1.split('=');
        console.log("name2=" + name2[0]);

        $rootScope.book = {};
        var xyz = $.param({
            isbn: name2[0]
        });
        $http.post('http://172.27.12.104:3000/book/byisbn', xyz, config)
            .then(
                function(response) {
                    // success callback
                    console.log('success');
                    console.log(response.data);
                    $rootScope.book = response.data;




                },
                function(response) {
                    // failure callback
                    console.log('failed');
                }
            );
    }, 200);
    $scope.editBook = function(book) {
        $rootScope.book = book;
        console.log($rootScope.book);
        var data1 = $.param({
            isbn: $rootScope.book.isbn,
            title: $rootScope.book.title,
            author: $rootScope.book.author,
            price: $rootScope.book.price
        });

        $http.put('http://172.27.12.104:3000/book/update', data1, config)
            .then(
                function(response) {
                    // success callback
                    alert('book updated');
                },
                function(response) {
                    // failure callback
                    console.log('book failed to update');
                }
            );
    };
    $scope.deleteBook = function(book) {
        var isbn = book.isbn;
        console.log(isbn);
        var isbn1 = {
            "isbn": isbn
        };
        console.log(isbn1);


        $http({
                url: "http://172.27.12.104:3000/book/remove",
                method: 'DELETE',
                data: $.param(isbn1),
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