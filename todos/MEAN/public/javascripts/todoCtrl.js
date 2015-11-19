/* global angular */
; (function() {
	function TodoController($http, $rootScope, $scope, FPSrvc) {
		//event handler
		$scope.addUpdateTask = onAddUpdateTaskClickEventHandler;
		$scope.editTask = onEditTaskClickEventHandler;
		$scope.deleteTask = onDeleteTaskClickEventHandler;
		$scope.cancelUpdate = onCancelUpdateClickEventHandler;
		
		initView()
		
		function initView() {
			loadAllTasks()
				.then(function(response){
					$scope.todos = response;
				});
		}
		
		function onAddUpdateTaskClickEventHandler() {
			var enteredTask = $scope.selected.task.trim();
			if(enteredTask) {
				if($scope.selected.id) {
					updateTask($scope.selected.id, enteredTask)
						.then(function(response) {
							for(var i in $scope.todos) {
								if($scope.todos[i]._id == $scope.selected.id) {
									$scope.todos[i].task = $scope.selected.task;
									$scope.selected = {};
								}
							}
						});
				} else {
					saveNewTask(enteredTask)
						.then(function(response){
							$scope.selected = {};
							$scope.todos.push(response);
						});	
				}
			}
		}
		
		function onEditTaskClickEventHandler(todo) {
			$scope.selected = {
				id: todo._id,
				task: todo.task
			};
		}
		
		function onCancelUpdateClickEventHandler() {
			$scope.selected = {};
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
		
		function updateTask(id, updatedTask) {
			var promise = $http.put('/todos/' + id, {updatedTask: updatedTask})
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