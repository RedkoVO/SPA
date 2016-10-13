'use strict'

app.service('pagination', function($sce) {
		var currentPage = 0;
		var itemsPerPages = 10;
		var users = [];

		return {
				setUsers: function( newUsers ) {
						users = newUsers;
				},

				getPageUsers: function( num ){
						var num = angular.isUndefined(num) ? 0 : num;
						var first = itemsPerPages * num;
						var last = first + itemsPerPages;
						currentPage = num;
						last = last > users.length ? (users.length - 1) : last;
						return users.slice(first, last);
				},

				getTotalPagesNum: function() {
						return Math.ceil( users.length / itemsPerPages );
				},

				getPaginationList: function() {
						var pagesNum = this.getTotalPagesNum();
						var paginationList = [];
						paginationList.push({
								name: $sce.trustAsHtml('&laquo;'),
								link: 'prev'
						});
						for (var i=0; i<pagesNum; i++) {
								var name = i + 1;
								paginationList.push({
										name: $sce.trustAsHtml(String(name)),
										link: i
								});
						};
						paginationList.push({
								name: $sce.trustAsHtml('&raquo'),
								link: 'next'
						});
						if (pagesNum > 1) {
								return paginationList;
						} else {
								return false;
						}
				},

				getCurrentPageNum: function() {
						return currentPage;
				},

				getPrevPageProducts: function() {
						var prevPageNum = currentPage - 1;
						if (prevPageNum < 0) prevPageNum = 0;
						return this.getPageUsers(prevPageNum);
				},

				getNextPageProducts: function() {
						var nextPageNum = currentPage + 1;
						var pagesNum = this.getTotalPagesNum();
						if (nextPageNum >= pagesNum) nextPageNum = pagesNum - 1;
						return this.getPageUsers(nextPageNum);
				}
		}
});
