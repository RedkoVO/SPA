'use strict'

app.controller('LazyLoad', ['$scope', function ($scope) {
    var counter = 0;
    $scope.users = users;
    $scope.items = [];

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
