; (function() {
    'use strict';
    // register todoApp module
    angular.module('todoApp', [
        // Angular modules
        'ngRoute', // for routing
        'ngAnimate', // for animation
        
        //services
        'datacontext', // http services
        
        // 3rd party
        'ui.bootstrap', // angular ui bootstrap
        'material.design' // bootstrap material design
    ]).service('fpSrvc', function() {
        // registering service for function programming
        // we are using lodash
        return window._;
    });; 
})();
