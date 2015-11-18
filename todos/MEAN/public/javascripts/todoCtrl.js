/* global angular */
; (function() {
	function TodoController($http, $rootScope, $scope, FPSrvc) {
		//event handler
		$scope.addTask = onAddNewTaskClickEventHandler;
		$scope.editTask = onEditTaskClickEventHandler;
		$scope.deleteTask = onDeleteTaskClickEventHandler;
		
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
						$scope.todos.push(response);
					});
			}
		}
		
		function onEditTaskClickEventHandler(task) {
			
		}
		
		function onDeleteTaskClickEventHandler(id) {
			deleteTask(id)
				.then(function(response){
					if(!response.hasError) {
						$scope.todos = FPSrvc.reject($scope.todos, {_id: id});	
					}
					
				});
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
		
		function deleteTask(id) {
			var promise = $http.delete('/todos/' + id)
							.then(function(response) {
								return (response ? response.data : null);
							});
							
			return promise
		}
	}
	
	angular.module('meanTodoApp')
		.controller('TodoCtrl', ['$http', '$rootScope', '$scope', 'FPSrvc', TodoController]);
})();