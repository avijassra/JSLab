; (function() {
	function AppController($rootScope) {
		$rootScope.pageTitle = 'Hello World';
	}
	
	angular.module('meanTodoApp')
		.controller('AppCtrl', ['$rootScope', AppController]);
})();