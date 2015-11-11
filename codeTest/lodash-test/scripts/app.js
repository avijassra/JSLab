(function() {
    'use strict';
    
    var MainCtrl = function($scope, getDataSrvc, lodashSrvc) {
        getDataSrvc.getAllCompanies()
            .then(function(response) {
                $scope.companies = response;
            
                $scope.industries = lodashSrvc
                                        .chain(response)
                                        .pluck('industry')
                                        .unique(true);
            });
    };
    
    angular.module('lodashApp', ['ngRoute'])
        .factory('lodashSrvc', function () {
            return _;
        }).factory('getDataSrvc', [ '$http', function($http) {
            return {
                getAllCompanies: function() {
                    var promise = $http.get('data/companies.json')
                            .then(function(response) {
                                return response.data.companies;
                            });

                    return promise;
                }
            };
        }]).controller('MainCtrl', MainCtrl);    
})();