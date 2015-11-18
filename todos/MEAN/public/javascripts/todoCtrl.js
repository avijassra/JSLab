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
			var newTask = $scope.newTask.trim();
			if(newTask) {
				saveNewTask(newTask)
					.then(function(response){
						$scope.todos.push({_id: response, task: newTask});
					});
			}
		}
		
		function loadAllTasks() {
			var promise = $http.get('/todos')
							.then(function(response) {
								return (response ? response.data : null);
							});
							
			return promise
		}
		
		function saveNewTask(newTask) {
			var promise = $http.post('/todos', {newTask: newTask})
							.then(function(response) {
								return (response ? response.data : null);
							});
							
			return promise
		}
	}
	
	angular.module('meanTodoApp')
		.controller('TodoCtrl', ['$http', '$rootScope', '$scope', TodoController]);
})();