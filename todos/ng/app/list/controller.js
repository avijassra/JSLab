; (function() {
    angular.module('todoApp')
        .controller('TodoCtrl', ['$scope', '$modal', 'todoRepo', _todoCtrl])
        .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', _modalInstanceCtrl]);
    
    function _todoCtrl($scope, $modal, todoRepo) {
        $scope.todos = []
        $scope.addNewTask = addNewTaskButtonClickHandler;
        
        function addNewTaskButtonClickHandler() {
            var modalInstance = $modal.open({
                templateUrl: 'app/list/_newTask.html',
                controller: 'ModalInstanceCtrl',
                /*windowClass: 'md',*/
            });

            modalInstance.result.then(function (newTask) {
                var newId = $scope.todos.length + 1;
                $scope.todos.push({
                    id: newId,
                    task: newTask,
                    isComplete: false
                });
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
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
    
    function _modalInstanceCtrl($scope, $modalInstance) {
        $scope.modal = {};
        
        $scope.ok = function () {
            debugger;
            $modalInstance.close($scope.modal.task);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
    
})();