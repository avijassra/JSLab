var abc;

(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, filterText, lodashSrvc) {
        var originalCountryList = [],
            originalCompanyList = [],
            filterFunc = function(list) {
                var myFilterCriteria = {};
                for(var prop in $scope.filter) {
                    if($scope.filter.hasOwnProperty(prop) && prop &&  $scope.filter[prop]) {
                        myFilterCriteria[prop] = $scope.filter[prop].toLowerCase();
                    }
                }

                if(lodashSrvc.isEmpty(myFilterCriteria)) {
                    $scope.countries = originalCountryList;
                } else {
                    $scope.countries = lodashSrvc.filter(originalCountryList, function(item) { 
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
        
        $scope.countryGridOptions = {
            data: 'countries',
            columnDefs: [{
                field:'name', 
                displayName:'Name',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column filter-group="countries" ></div>'
            }, {
                field:'code', 
                displayName:'Code',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column filter-group="countries" ></div>'
            }],
            filterOptions:	$scope.filterOptions
        };
        
        $scope.companyGridOptions = {
            data: 'companies',
            columnDefs: [{
                field:'name', 
                displayName:'Name',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column filter-group="companies" ></div>'
            }, {
                field:'industry', 
                displayName:'Industry',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column filter-group="companies" ></div>'
            }, {
                field:'hq', 
                displayName:'Headquarters',
                headerCellTemplate: '<div ng-class="\'colt\' + col.index" class="ngHeaderText" filterable-grid-column filter-group="companies" ></div>'
            }],
            filterOptions:	$scope.filterOptions
        };
        
        $scope.$watch('filter', filterFunc, true);
        
        getDataSrvc.getAllCountries()
            .then(function(response) {
                $scope.countries = originalCountryList = response;
                
            });
        
        getDataSrvc.getAllCompanies()
            .then(function(response) {
                $scope.companies = originalCompanyList = response;
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
                },
                getAllCompanies: function() {
                    var promise = $http.get('data/companies.json')
                            .then(function(response) {
                                return response.data.companies;
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
                template: '<div><div ng-class="{noShow: filterCol}">{{col.displayName}}<span ng-click="turnFilteringOn()" class="glyphicon glyphicon-filter pull-right" /></div><div ng-class="{noShow: !filterCol}"><input type="text" ng-model="filterBy" /><span ng-click="clear()" class="glyphicon glyphicon-remove pull-right" /></span></div>',
                link: function(scope, element, attrs) {
                    debugger;
                    if(!filterText[attrs.filterGroup]) {
                        filterText[attrs.filterGroup] = {};
                    }
                    
                    scope.$watch('filterBy', function(value) {
                        filter.currentList = attrs.filterableGridColumn;
                        filterText[attrs.filterGroup][attrs.filterableGridColumn] = value;
                    });
                    
                    scope.turnFilteringOn = function() {
                        scope.filterCol = true;
                    };
                    
                    scope.clear = function() {
                        scope.filterCol = false;
                        scope.filterBy = "";
                    };
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();