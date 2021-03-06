'use strict'

var users = [
		{ "id": 1,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 20 },{ "id": 2,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 25 },{ "id": 3,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 30 },{ "id": 4,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 35 },{ "id": 5,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 40 },{ "id": 6,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 46 },{ "id": 7,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 31 },{ "id": 8,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 11 },{ "id": 9,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 9 },{ "id": 10,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 69 },
    { "id": 11,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 21 },{ "id": 12,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 26 },{ "id": 13,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 31 },{ "id": 14,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 36 },{ "id": 15,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 42 },{ "id": 16,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 43 },{ "id": 17,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 36 },{ "id": 18,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 12 },{ "id": 19,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 10 },{ "id": 20,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 22 },
    { "id": 21,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 22 },{ "id": 22,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 27 },{ "id": 23,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 32 },{ "id": 24,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 37 },{ "id": 25,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 50 },{ "id": 26,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 43 },{ "id": 27,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 48 },{ "id": 28,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 6 },{ "id": 29,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 10 },{ "id": 30,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 8 },
    { "id": 31,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 23 },{ "id": 32,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 28 },{ "id": 33,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 33 },{ "id": 34,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 38 },{ "id": 35,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 55 },{ "id": 36,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 55 },{ "id": 37,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 5 },{ "id": 38,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 7 },{ "id": 39,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 1 },{ "id": 40,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 31 },
    { "id": 41,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 24 },{ "id": 42,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 29 },{ "id": 43,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 34 },{ "id": 44,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 39 },{ "id": 45,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 48 },{ "id": 46,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 25 },{ "id": 47,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 10 },{ "id": 48,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 8 },{ "id": 49,"firstName": "Vlad","lastName": "Redko","email": "testdev@gmail.com","age": 2 },{ "id": 50,"firstName": "Ivan","lastName": "Buryak","email": "testdev2@gmail.com","age": 17 },
];

app.controller('Main', ['$scope', function ($scope) {
		$scope.paginationType = 'Classic pagination';

		$scope.filterSwitch = function(val) {
				$scope.revers = !$scope.revers;
				$scope.userFilter = val;
		};

		$scope.paginationSwitch = function() {
				$scope.paginationType = $scope.pagination ? 'Classic pagination' : 'Infinity scroll';
				$scope.pagination = !$scope.pagination;
		};

		$scope.selectAge = {
				model: null,
				availableOptions: [
					{id: '1', name: 'All age', minAge:0,  maxAge:50},
					{id: '2', name: '0-10',    minAge:0,  maxAge:10},
					{id: '3', name: '10-20',   minAge:10, maxAge:20},
					{id: '4', name: '20-30',   minAge:20, maxAge:30},
					{id: '5', name: '30-40',   minAge:30, maxAge:40},
					{id: '6', name: '40 +',    minAge:40, maxAge:users.length}
				]
		};

		$scope.selectAge.model = $scope.selectAge.availableOptions[0];

		$scope.byRange = function (fieldName, value) {
				var minValue = value.model.minAge;
				var maxValue = value.model.maxAge;

        return function predicateFunc(item) {
          return minValue <= item[fieldName] && item[fieldName] <= maxValue;
        };
    };

		$scope.modalShown = false;
		$scope.toggleModal = function(user) {
				$scope.modalShown = !$scope.modalShown;
				console.log(user);
		};


		/* Modal window */
		$scope.items=[{id:1,pname:'box1'},{id:2,pname:'box2'},{id:3,pname:'box3'}];
		$scope.users = users;
		$scope.editedItem = {};

		$scope.editrow=function($index){
			 $scope.istrue=true;
			 $scope.$index = $index;
			 angular.copy($scope.users[$index], $scope.editedItem);
		}
		$scope.closepopup=function(){
			 $scope.istrue=false;

		}
		$scope.save=function(){
			 $scope.istrue=false;
			 angular.copy($scope.editedItem, $scope.users[$scope.$index])
		}

}]);
