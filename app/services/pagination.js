'use strict'

app.service('pagination', function($sce) {
	var currentPage = 0;      // начальная страница
	var itemsPerPages = 10;   // сколько должно отображаться продуктов на странице
	var products = [];        // будут храниться все объекты

	return {
		setProducts: function( newProducts ) {
			products = newProducts;
		},

		getPageProducts: function( num ){  //будет возвращать товары, которые на выбранной странице
			var num = angular.isUndefined(num) ? 0 : num;
			var first = itemsPerPages * num; //номер первого элемента
			var last = first + itemsPerPages;
			currentPage = num;
			last = last > products.length ? (products.length - 1) : last;
			return products.slice(first, last);
		},

		getTotalPagesNum: function() {
			return Math.ceil( products.length / itemsPerPages );
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
			return this.getPageProducts(prevPageNum);
		},

		getNextPageProducts: function() {
			var nextPageNum = currentPage + 1;
			var pagesNum = this.getTotalPagesNum();
			if (nextPageNum >= pagesNum) nextPageNum = pagesNum - 1;
			return this.getPageProducts(nextPageNum);
		}
	}
});
