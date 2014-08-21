(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, lodashSrvc) {
        var originalList = [], 
            filterFunc = function() {
                var myFilterCriteria = {};
                for(var prop in $scope.filter) {
                    if($scope.filter.hasOwnProperty(prop) && prop) {
                        myFilterCriteria
                    }
                }
                
                
                if(name === '' && code === '') {
                    $scope.countries = originalList;    
                } else {
                    $scope.countries = lodashSrvc.filter(originalList, function(item) { 
                        return 
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
                displayName:'Name'
            }, {
                field:'code', 
                displayName:'Code'
            }],
            filterOptions:	$scope.filterOptions
        };
        
        $scope.$watch('nameFilter', filterFunc);
        $scope.$watch('codeFilter', filterFunc);
        
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
        }]).controller('MainCtrl', MainCtrl);    
})();