'use strict'

var app = angular.module('app', [ 'ngRoute', 'ui.bootstrap']);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
		.when('/', {
        templateUrl: 'app/view/main.html',
        controller: 'Main'
		});
}]);
