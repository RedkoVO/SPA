'use strict'

app.controller('Pagination', ['$scope', 'pagination', function ($scope, pagination) {
    /* show pagination */
    pagination.setUsers(users);

    $scope.users = pagination.getPageUsers();
    $scope.paginationList = pagination.getPaginationList();

    $scope.showPage = function(page) {
    		if (page == 'prev') {
    			   $scope.users = pagination.getPrevPageProducts();
    		} else if (page == 'next') {
    			   $scope.users = pagination.getNextPageProducts();
    		} else {
    			   $scope.users = pagination.getPageUsers( page );
    		}
    }

    $scope.currentPageNum = function() {
  		  return pagination.getCurrentPageNum();
  	}

    /* User delete */
    $scope.remove = function(user) {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    }

    /* several user delete */
    $scope.tableSelection = {};
    $scope.removeSelectedRows = function() {
         for (var i = $scope.users.length - 1; i >= 0; i--) {
             if ($scope.tableSelection[i]) {
                 $scope.users.splice(i, 1);
                 delete $scope.tableSelection[i];
             }
         }
   };


    // $scope.filterAge = function(val) {
    //     return (val.age > 10 && val.age < 30);
    // };
}]);
