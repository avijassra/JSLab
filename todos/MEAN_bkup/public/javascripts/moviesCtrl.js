/* global angular */
; (function() {
	function MoviesController($http, $rootScope, $scope, FPSrvc) {
		
	}
	
	angular.module('meanTodoApp')
		.controller('MoviesCtrl', ['$http', '$rootScope', '$scope', 'FPSrvc', MoviesController]);
})();