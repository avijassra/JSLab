; (function() {
    angular.module('todoApp')
        .controller('TodoCtrl', ['$scope', 'todoRepo', _todoCtrl]);
    
    function _todoCtrl($scope, todoRepo) {
        $scope.todos = []
        $scope.addNewTask = addNewTaskButtonClickHandler;
        
        function addNewTaskButtonClickHandler() {
            var newId = $scope.todos.length + 1
            
            $scope.todos.push({
                id: newId,
                task: "New task" + newId,
                isComplete: false
            });
        }
        
        initView();
        
        function initView() {
            _getAllTodos();
        }
        
        function _getAllTodos() {
            todoRepo.getAll()
                .then(function(response) {
                    $scope.todos = response;
                });
        }
    }
})();