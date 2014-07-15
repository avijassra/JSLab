angular.module('Grid', [])
    .service('GridService', function() {
        this.grid   = [];
        this.tiles  = [];
        // Size of the board
        this.size   = 4;
        // ...
    }).directive('grid', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'scripts/grid/grid.html'
        };
    });