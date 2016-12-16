'use strict';
var KarazinApp = angular.module('KarazinApp', []);

KarazinApp.controller('CourseListCtrl', function($scope) {
	 $scope.filterCondition={
        course: '1'
    }

	$scope.courses= [
	{'name': '1 курс', 'value': '1'},
	{'name': '2 курс', 'value': '2'},
	{'name': '3 курс', 'value': '3'},
	{'name': '4 курс', 'value': '4'},
	{'name': '5 курс', 'value': '5'}
	]
	 
});