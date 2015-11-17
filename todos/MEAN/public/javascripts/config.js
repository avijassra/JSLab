; (function() {
	function RouteConfiguration($stateProvider, $urlRouterProvider) {
      //////////////////////////
      // State Configurations //
      //////////////////////////
      
      $urlRouterProvider
        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/');


      // Use $stateProvider to configure your states.
      $stateProvider
        //////////
        // Home //
        //////////
        .state("home", {
          // Use a url of "/" to set a state as the "index".
          url: "/",
		      templateUrl: '/views/todo.html',
          controller: 'TodoCtrl'
		    });
    }
	
	angular.module('meanTodoApp', [
		  'ui.router', 
  		'ngAnimate'
	]).config(['$stateProvider', '$urlRouterProvider', RouteConfiguration]);
})();