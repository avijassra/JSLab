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
        controller: 'TodoCtrl',
        pageTitle: 'Todos'
      })
      //////////
      // movies //
      //////////
      .state("movies", {
        // Use a url of "/" to set a state as the "index".
        url: "/my-movies",
        templateUrl: '/views/movies.html',
        controller: 'MoviesCtrl',
        pageTitle: 'My Movies List'
      });
  }
    
	function AppConfiguration() {
    
  }
  
	angular.module('meanTodoApp', [
		  'ui.router'
	]).constant('FPSrvc', window._)
  .run([AppConfiguration])
  .config(['$stateProvider', '$urlRouterProvider', RouteConfiguration]);
})();