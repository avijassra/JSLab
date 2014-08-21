(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, lodashSrvc) {
        $scope.countries = [];
        $scope.gridOptions = {
            data: 'countries',
            columnDefs: [{field:'name', displayName:'Name'}, {field:'code', displayName:'Code'}]
        };
        getDataSrvc.getAllCountries()
            .then(function(response) {
                debugger;
                $scope.countries = response;
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