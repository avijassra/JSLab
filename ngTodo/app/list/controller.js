; (function() {
    angular.module('todoApp')
        .controller('TodoCtrl', ['$scope', 'todoRepo', _todoCtrl]);
    
    function _todoCtrl($scope, todoRepo) {
        
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