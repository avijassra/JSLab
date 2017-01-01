import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router = null;
  
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.map([
      { route: ['', 'todos'], name: 'todos', moduleId: './module/todos/main', title: 'Todos', nav: true },
      { route: 'movies', name: 'movies', moduleId: './module/movies/main', title: 'Movies', nav: true },
    ]);
  }
}