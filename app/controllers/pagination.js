'use strict'

app.controller('Pagination', ['$scope', 'pagination', function ($scope, pagination) {
    pagination.setProducts(users);

    $scope.users = pagination.getPageProducts();
    $scope.paginationList = pagination.getPaginationList();

    /*show pagination*/
    $scope.showPage = function(page) {
    		if (page == 'prev') {
    			   $scope.users = pagination.getPrevPageProducts();
    		} else if (page == 'next') {
    			   $scope.users = pagination.getNextPageProducts();
    		} else {
    			   $scope.users = pagination.getPageProducts( page );
    		}
    }

    $scope.currentPageNum = function() {
  		  return pagination.getCurrentPageNum();
  	}
}]);
