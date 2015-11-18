; (function() {
	function TodoController($http, $rootScope, $scope) {
		initView()
		
		function initView() {
			loadAllTasks()
				.then(function(response){
					$scope.todos = response;
				});
				
			$scope.testVal = "todo list page";
		}
		
		function loadAllTasks() {
			var promise = $http.get('/todos')
							.then(function(response) {
								return (response ? response.data : null);
							});
							
			return promise
		}
	}
	
	angular.module('meanTodoApp')
		.controller('TodoCtrl', ['$http', '$rootScope', '$scope', TodoController]);
})();