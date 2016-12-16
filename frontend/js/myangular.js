'use strict';
var KarazinApp = angular.module('KarazinApp', []);

KarazinApp.controller('CourseListCtrl', function($scope) {
	

	$scope.courses= [
	{'name': '1 курс', 'value': '1'},
	{'name': '2 курс', 'value': '2'},
	{'name': '3 курс', 'value': '3'},
	{'name': '4 курс', 'value': '4'},
	{'name': '5 курс', 'value': '5'}
	]
	 
});

KarazinApp.controller('GroupListCtrl', function($scope) {
	

	$scope.groups= [
	{'name': 'ВІ-101', 'value': '1'},
	{'name': 'ВІ-102', 'value': '2'},
	{'name': 'ВІ-103', 'value': '3'},
	{'name': 'ВІ-104', 'value': '4'},
	{'name': 'ВІ-105', 'value': '5'}
	]
	 
});