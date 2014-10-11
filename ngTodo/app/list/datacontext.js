; (function() {
    angular.module('datacontext', [])
        .service('todoRepo', ['$http', '$q', 'fpSrvc', _todoRepo]);
    
    function _todoRepo($http, $q, fpSrvc) {
        return {
            getAll: _fetchAllTodos,
            getById: _fetchById
        };
        
        function _fetchAllTodos() {
            var promise = $http.get("data/todos.json")
                            .then(function(response) {
                                return response.data.todos;
                            });
            
            return promise;
        }
        
        function _fetchById(id) {
            fetchAllTodos()
                .then(function(todos) {
                    $q.when(_filterTodos(todos, id));
                });
        }
        
        function _filterTodos(todos, id) {
            var todo = fpSrvc.filter(todos, {id: id});
            
            if(todo && todo.length > 0) {
                return todo[0];
            } else {
                return null;
            }
        }
    }
})();