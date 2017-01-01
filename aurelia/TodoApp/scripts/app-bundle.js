define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.router = null;
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([
                { route: ['', 'todos'], name: 'todos', moduleId: './module/todos/main', title: 'Todos', nav: true },
                { route: 'movies', name: 'movies', moduleId: './module/movies/main', title: 'Movies', nav: true },
            ]);
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('model/todo',["require", "exports"], function (require, exports) {
    "use strict";
    var Todo = (function () {
        function Todo(description) {
            this.taskDescription = description;
            this.isCompleted = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('module/list/main',["require", "exports", "../../model/todo"], function (require, exports, todo_1) {
    "use strict";
    var TodoList = (function () {
        function TodoList() {
            this.message = 'Todo List';
            this.todos = [];
            this.taskDescription = "";
            this.editItemIndex = -1;
        }
        TodoList.prototype.addTodo = function () {
            if (this.taskDescription) {
                if (this.editItemIndex == -1) {
                    this.todos.push(new todo_1.Todo(this.taskDescription));
                }
                else {
                    this.todos[this.editItemIndex].taskDescription = this.taskDescription;
                }
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.editTodo = function (itemIndex) {
            this.taskDescription = this.todos[itemIndex].taskDescription;
            this.editItemIndex = itemIndex;
        };
        TodoList.prototype.removeTodo = function (itemIndex) {
            if (this.editItemIndex == -1) {
                this.todos.splice(itemIndex, 1);
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.cancelEditTodo = function () {
            this.taskDescription = "";
            this.editItemIndex = -1;
        };
        return TodoList;
    }());
    exports.TodoList = TodoList;
});

define('module/todos/main',["require", "exports", "../../model/todo"], function (require, exports, todo_1) {
    "use strict";
    var TodoList = (function () {
        function TodoList() {
            this.message = 'Todo List';
            this.todos = [];
            this.taskDescription = "";
            this.editItemIndex = -1;
        }
        TodoList.prototype.addTodo = function () {
            if (this.taskDescription) {
                if (this.editItemIndex == -1) {
                    this.todos.push(new todo_1.Todo(this.taskDescription));
                }
                else {
                    this.todos[this.editItemIndex].taskDescription = this.taskDescription;
                }
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.editTodo = function (itemIndex) {
            this.taskDescription = this.todos[itemIndex].taskDescription;
            this.editItemIndex = itemIndex;
        };
        TodoList.prototype.removeTodo = function (itemIndex) {
            if (this.editItemIndex == -1) {
                this.todos.splice(itemIndex, 1);
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.cancelEditTodo = function () {
            this.taskDescription = "";
            this.editItemIndex = -1;
        };
        return TodoList;
    }());
    exports.TodoList = TodoList;
});

define('module/todos.1/main',["require", "exports", "../../model/todo"], function (require, exports, todo_1) {
    "use strict";
    var TodoList = (function () {
        function TodoList() {
            this.message = 'Todo List';
            this.todos = [];
            this.taskDescription = "";
            this.editItemIndex = -1;
        }
        TodoList.prototype.addTodo = function () {
            if (this.taskDescription) {
                if (this.editItemIndex == -1) {
                    this.todos.push(new todo_1.Todo(this.taskDescription));
                }
                else {
                    this.todos[this.editItemIndex].taskDescription = this.taskDescription;
                }
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.editTodo = function (itemIndex) {
            this.taskDescription = this.todos[itemIndex].taskDescription;
            this.editItemIndex = itemIndex;
        };
        TodoList.prototype.removeTodo = function (itemIndex) {
            if (this.editItemIndex == -1) {
                this.todos.splice(itemIndex, 1);
                this.cancelEditTodo();
            }
        };
        TodoList.prototype.cancelEditTodo = function () {
            this.taskDescription = "";
            this.editItemIndex = -1;
        };
        return TodoList;
    }());
    exports.TodoList = TodoList;
});

define('module/movies/main',["require", "exports"], function (require, exports) {
    "use strict";
    var Movies = (function () {
        function Movies() {
            this.message = 'Movies';
        }
        return Movies;
    }());
    exports.Movies = Movies;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"module/shared/navigation.html\" ></require>\n  <navigation  router.bind=\"router\" class=\"primary-navigation\"></navigation>\n  <div class=\"page-host\">\n    <router-view>\n        <!-- Top level views are rendered here -->\n    </router-view>\n  </div>\n</template>\n"; });
define('text!module/list/main.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\" >\n      <form submit.trigger=\"addTodo()\">\n        <input type=\"text\" value.bind=\"taskDescription\" />\n        <button type=\"submit\" >Add Task</button>\n        <button type=\"button\" hide.bind=\"editItemIndex == -1\" click.trigger=\"cancelEditTodo()\" >Cancel</button>\n      </form>\n    </div>\n    <div class=\"row\" >\n      &nbsp;\n    </div>\n    <div class=\"row\" >\n      <div class=\"col-xs-1\" ></div>\n      <div class=\"col-xs-6\" >Description</div>\n      <div class=\"col-xs-1\" >Action</div>\n    </div>\n    <div class=\"row\" repeat.for=\"todo of todos\" >\n      <div class=\"col-xs-1 center\" >\n        <input type=\"checkbox\" checked.bind=\"todo.isCompleted\" />\n      </div>\n      <div class=\"col-xs-6\" >\n        <span>${todo.taskDescription}</span>\n      </div>\n      <div class=\"col-xs-1\" hide.bind=\"editItemIndex != -1\" >\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\" click.trigger=\"editTodo($index)\"></i>\n        <i class=\"fa fa-trash\" aria-hidden=\"true\" click.trigger=\"removeTodo($index)\"></i>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!module/todos/main.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\" >\n      <form submit.trigger=\"addTodo()\">\n        <input type=\"text\" value.bind=\"taskDescription\" />\n        <button type=\"submit\" >Add Task</button>\n        <button type=\"button\" hide.bind=\"editItemIndex == -1\" click.trigger=\"cancelEditTodo()\" >Cancel</button>\n      </form>\n    </div>\n    <div class=\"row\" >\n      &nbsp;\n    </div>\n    <div class=\"row\" >\n      <div class=\"col-xs-1\" ></div>\n      <div class=\"col-xs-6\" >Description</div>\n      <div class=\"col-xs-1\" >Action</div>\n    </div>\n    <div class=\"row\" repeat.for=\"todo of todos\" >\n      <div class=\"col-xs-1 center\" >\n        <input type=\"checkbox\" checked.bind=\"todo.isCompleted\" />\n      </div>\n      <div class=\"col-xs-6\" >\n        <span>${todo.taskDescription}</span>\n      </div>\n      <div class=\"col-xs-1\" hide.bind=\"editItemIndex != -1\" >\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\" click.trigger=\"editTodo($index)\"></i>\n        <i class=\"fa fa-trash\" aria-hidden=\"true\" click.trigger=\"removeTodo($index)\"></i>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!module/todos.1/main.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\" >\n      <form submit.trigger=\"addTodo()\">\n        <input type=\"text\" value.bind=\"taskDescription\" />\n        <button type=\"submit\" >Add Task</button>\n        <button type=\"button\" hide.bind=\"editItemIndex == -1\" click.trigger=\"cancelEditTodo()\" >Cancel</button>\n      </form>\n    </div>\n    <div class=\"row\" >\n      &nbsp;\n    </div>\n    <div class=\"row\" >\n      <div class=\"col-xs-1\" ></div>\n      <div class=\"col-xs-6\" >Description</div>\n      <div class=\"col-xs-1\" >Action</div>\n    </div>\n    <div class=\"row\" repeat.for=\"todo of todos\" >\n      <div class=\"col-xs-1 center\" >\n        <input type=\"checkbox\" checked.bind=\"todo.isCompleted\" />\n      </div>\n      <div class=\"col-xs-6\" >\n        <span>${todo.taskDescription}</span>\n      </div>\n      <div class=\"col-xs-1\" hide.bind=\"editItemIndex != -1\" >\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\" click.trigger=\"editTodo($index)\"></i>\n        <i class=\"fa fa-trash\" aria-hidden=\"true\" click.trigger=\"removeTodo($index)\"></i>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!module/movies/main.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!module/shared/app.html', ['module'], function(module) { module.exports = "<template>\n  <ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#\">Todos</a></li>\n    <li role=\"presentation\"><a href=\"#movies\">Movies</a></li>\n  </ul>\n  <router-view></router-view>\n</template>\n"; });
define('text!module/shared/navigation.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav>\n    <ul class=\"nav nav-tabs\">\n      <li role=\"presentation\" repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n        <a href.bind=\"row.href\">${row.title}</a>\n      </li>\n    </ul>\n  </nav>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map