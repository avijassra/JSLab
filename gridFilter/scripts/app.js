(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, lodashSrvc) {
        var originalList = [], 
            filterFunc = function() {
                var myFilterCriteria = {};
                for(var prop in $scope.filter) {
                    if($scope.filter.hasOwnProperty(prop) && prop) {
                        myFilterCriteria[prop] = $scope.filter[prop].toLowerCase();
                    }
                }
                
                if(lodashSrvc.isEmpty(myFilterCriteria)) {
                    $scope.countries = originalList;
                } else {
                    $scope.countries = lodashSrvc.filter(originalList, function(item) { 
                        for(var prop in myFilterCriteria) {
                            if(!(item[prop].toLowerCase().indexOf(myFilterCriteria[prop]) > -1)) {
                                return false;
                            };
                        }
                        return true;
                    });
                }
            };
        
        $scope.countries = [];
        $scope.filterOptions = {
            filterText: '',
            useExternalFilter: true
        };
        
        $scope.gridOptions = {
            data: 'countries',
            columnDefs: [{
                field:'name', 
                displayName:'Name',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText ng-binding colt0">Name <div filterable-grid-column="name"></div>'
            }, {
                field:'code', 
                displayName:'Code'
            }],
            filterOptions:	$scope.filterOptions
        };
        
        $scope.$watch('filter.name', filterFunc);
        $scope.$watch('filter.code', filterFunc);
        
        getDataSrvc.getAllCountries()
            .then(function(response) {
                $scope.countries = originalList = response;
            });
    };
    
    angular.module('gridFilter', ['ngGrid'])
        .factory('lodashSrvc', function () {
            return _;
        }).factory('getDataSrvc', [ '$http', function($http) {
            return {
                getAllCountries: function() {
                    var promise = $http.get('data/countries.json')
                            .then(function(response) {
                                return response.data.countries;
                            });

                    return promise;        
                }
            };
        }]).directive('filterableGridColumn', [function() {
            return {
                restrict: 'A',
                priority: 1,
                scope: {
                    filterableGridColumn: '@'
                },
                template: '<span class="pull-right"><input type="checkbox" class="filterColChkbox" id="{{filterableGridColumn}}_FilterField" /><lable class="glyphicon glyphicon-chevron-down" for="{{filterableGridColumn}}_FilterField" /><lable class="glyphicon glyphicon-chevron-filter" for="{{filterableGridColumn}}_FilterField" /></span>',
                replace: true,
                link: function($scope, $element, $attrs) {
                    debugger;
                    console.log('abc');
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();