// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

(function() {
    'use strict';
    
    var templateStr = '<div class="row well" ><h3>Scope = {0}</h3><hr /><div class="row" ><div class="col-md-2" ><input ng-model="firstName" /></div><div class="col-md-2" ><input ng-model="lastName" /></div><div class="col-md-2" ><button ng-click="resetDirective()" >Set to "John{1}, Doe{1}"</button></div></div></div>';
    
    var MainCtrl = function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        
        $scope.reset = function() {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        };
    };
    
    angular.module('ngDirectiveTestApp', ['ngRoute'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/home', {
                        templateUrl: 'partials/_directiveScopeTypes.html',
                        controller: 'MainCtrl'
                    }).when('/scope-with-repeater', {
                        templateUrl: 'partials/_repeater.html',
                        controller: 'RptrCtrl'
                    }).otherwise({
                        redirectTo: '/home'
                    });
        }]).directive('sharedScopeDirective', [function() {
            return {
                restrict: 'A',
                replace: true,
                scope: false,
                template: templateStr.format('false', ' 1'),
                controller: function($scope) {
                    $scope.resetDirective = function() {
                        $scope.firstName = "John 1";
                        $scope.lastName = "Doe 1";
                    };
                }
            };
        }]).directive('inheritedScopeDirective', [function() {
            return {
                restrict: 'A',
                replace: true,
                scope: true,
                template: templateStr.format('true', ' 2'),
                controller: function($scope) {
                    $scope.resetDirective = function() {
                        $scope.firstName = "John 2";
                        $scope.lastName = "Doe 2";
                    };
                }
            };
        }]).directive('isolatedScopeDirective', [function() {
            return {
                restrict: 'A',
                replace: true,
                scope: {},
                template: templateStr.format('{}', ' 3'),
                controller: function($scope) {
                    $scope.resetDirective = function() {
                        $scope.firstName = "John 3";
                        $scope.lastName = "Doe 3";
                    };
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();