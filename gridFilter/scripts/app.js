var abc;

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
        $scope.filter;
        $scope.filterOptions = {
            filterText: '',
            useExternalFilter: true
        };
        
        $scope.gridOptions = {
            data: 'countries',
            columnDefs: [{
                field:'name', 
                displayName:'Name',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column="" display-name="{{col.displayName}}" field-name="{{col.field}}" filter-prop="filter.{{col.field}}" ></div>'
            }, {
                field:'code', 
                displayName:'Code'
            }],
            filterOptions:	$scope.filterOptions
        };
        
        $scope.$watch('filter', filterFunc, true);
        
        getDataSrvc.getAllCountries()
            .then(function(response) {
                $scope.countries = originalList = response;
            });
        
        abc= $scope;
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
                scope: {
                    displayName: '@',
                    filedName: '@',
                    filterProp: '='
                },
                template: '<div><input id="ff__{{displayName}}" type="checkbox" class="noShow showFilter"><span class="heading">{{displayName}}<label for="ff__{{displayName}}" class="glyphicon glyphicon-filter pull-right" /></span><span class="filterHeader"><input type="text" ng-model="filterProp" /><label for="ff__{{displayName}}" class="glyphicon glyphicon-remove pull-right" /></span></div>',
                replace: true,
                link: function($scope, $element, $attrs) {
                    
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();