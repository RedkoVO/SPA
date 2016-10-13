'use strict'

app.controller('Pagination', ['$scope', 'filterFilter', function ($scope, filterFilter) {
    /* Pagination */
    $scope.users = users;
    $scope.currentPage = 1;
    $scope.maxSize = 10;
    $scope.entryLimit = 10;

    $scope.noOfPages = Math.ceil($scope.users.length/$scope.entryLimit);

    $scope.$watch('search', function(term) {
        $scope.filtered = filterFilter($scope.users, term);
        $scope.noOfPages = Math.ceil($scope.filtered.length/$scope.entryLimit);
    });

    /* User delete */
    $scope.remove = function(item){
        var index = $scope.users.indexOf(item)
        $scope.users.splice(index,1);
    }

    /* Several user delete */
    $scope.tableSelection = {};
    $scope.removeSelectedUsers = function() {
         for (var i = $scope.users.length - 1; i >= 0; i--) {
             if ($scope.tableSelection[i]) {
                 $scope.users.splice(i, 1);
                 delete $scope.tableSelection[i];
             }
         }
    };
}]);
