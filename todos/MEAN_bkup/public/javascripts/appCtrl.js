; (function() {
	function AppController($rootScope) {
		$rootScope.pageTitle = 'Todos';
	}
	
	angular.module('meanTodoApp')
		.controller('AppCtrl', ['$rootScope', AppController]);
})();