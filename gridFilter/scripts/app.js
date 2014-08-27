var abc;

(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, filterText, lodashSrvc) {
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
        $scope.filter = filterText;
        $scope.filterOptions = {
            filterText: '',
            useExternalFilter: true
        };
        
        $scope.gridOptions = {
            data: 'countries',
            columnDefs: [{
                field:'name', 
                displayName:'Name',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column="{{col.field}}" ></div>'
            }, {
                field:'code', 
                displayName:'Code',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column="{{col.field}}" ></div>'
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
        }]).factory('filterText', function() {
            return {
                
            };
        }).directive('filterableGridColumn', ['filterText', function(filterText) {
            return {
                restrict: 'A',
                scope: false,
                template: '<div><input id="ff__{{col.field}}" type="checkbox" class="noShow showFilter"><span class="heading">{{col.displayName}}<label for="ff__{{col.field}}" class="glyphicon glyphicon-filter pull-right" /></span><span class="filterHeader"><input type="text" ng-model="filterBy" /><label for="ff__{{col.field}}" ng-click="clear()" class="glyphicon glyphicon-remove pull-right" /></span></div>',
                link: function(scope, element, attrs) {
                    scope.$watch('filterBy', function(value) {
                        filterText[attrs.filterableGridColumn] = value;
                    });
                    
                    scope.clear = function() {
                        scope.filterBy = "";
                    };
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();