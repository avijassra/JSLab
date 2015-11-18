/* global angular */
; (function() {
	function TodoController($http, $rootScope, $scope) {
		//event handler
		$scope.addTask = onAddNewTaskClickEventHandler;
		
		initView()
		
		function initView() {
			loadAllTasks()
				.then(function(response){
					$scope.todos = response;
				});
		}
		
		function onAddNewTaskClickEventHandler() {
			alert(1);
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