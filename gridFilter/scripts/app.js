(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, lodashSrvc) {
        $scope.countries = [];
        $scope.gridOptions = {
            data: 'countries',
            columnDefs: [{field:'name', displayName:'Name'}, {field:'alpha-2', displayName:'Code'}]
        };
        $scope.countries = getDataSrvc.getAllCountries();
        debugger;
    };
    
    angular.module('gridFilter', ['ngGrid'])
        .factory('lodashSrvc', function () {
            return _;
        }).factory('getDataSrvc', [ '$http', function($http) {
            return {
                getAllCountries: function() {
                    var promise = $http.get('data/countries.json')
                            .then(function(response) {
                                debugger;
                                return response.data.countries;
                            });

                    return promise;        
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();