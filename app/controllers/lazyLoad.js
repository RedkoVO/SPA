'use strict'

app.controller('LazyLoad', ['$scope', function ($scope) {
    var counter = 0;
    $scope.users = users;
    $scope.items = [];

    $scope.loadMore = function() {
        for (var i = 0; i < 10; i++) {
            $scope.items.push(users[counter]);
            if (counter < users.length) {
                counter += 1;
            }
        }
    };

    $scope.loadMore();

    /* User delete */
    $scope.remove = function(item){
        var index = $scope.items.indexOf(item)
        $scope.items.splice(index,1);
    }

    /* Several user delete */
    $scope.tableSelection = {};
    $scope.removeSelectedUsers = function() {
         for (var i = $scope.items.length - 1; i >= 0; i--) {
             if ($scope.tableSelection[i]) {
                 $scope.items.splice(i, 1);
                 delete $scope.tableSelection[i];
             }
         }
    };
}]);
