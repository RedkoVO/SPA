'use strict'

app.controller('LazyLoad', ['$scope', function ($scope) {
    $scope.users = users;
    $scope.items = [];
    var counter = 0;

    $scope.loadMore = function() {
        for (var i = 0; i < 10; i++) {
            $scope.items.push({item: users[counter]});
            if (counter < users.length) {
                counter += 1;
            }
        }
    };

    $scope.loadMore();
}]);
