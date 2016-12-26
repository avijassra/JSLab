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

define('app',["require", "exports", "./model/todo"], function (require, exports, todo_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Todo List';
            this.todos = [];
            this.taskDescription = "";
            this.editItemIndex = -1;
        }
        App.prototype.addTodo = function () {
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
        App.prototype.editTodo = function (itemIndex) {
            this.taskDescription = this.todos[itemIndex].taskDescription;
            this.editItemIndex = itemIndex;
        };
        App.prototype.removeTodo = function (itemIndex) {
            if (this.editItemIndex == -1) {
                this.todos.splice(itemIndex, 1);
                this.cancelEditTodo();
            }
        };
        App.prototype.cancelEditTodo = function () {
            this.taskDescription = "";
            this.editItemIndex = -1;
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

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\" >\n      <form submit.trigger=\"addTodo()\">\n        <input type=\"text\" value.bind=\"taskDescription\" />\n        <button type=\"submit\" >Add Task</button>\n        <button type=\"button\" hide.bind=\"editItemIndex == -1\" click.trigger=\"cancelEditTodo()\" >Cancel</button>\n      </form>\n    </div>\n    <div class=\"row\" >\n      &nbsp;\n    </div>\n    <div class=\"row\" >\n      <div class=\"col-xs-1\" ></div>\n      <div class=\"col-xs-6\" >Description</div>\n      <div class=\"col-xs-1\" >Action</div>\n    </div>\n    <div class=\"row\" repeat.for=\"todo of todos\" >\n      <div class=\"col-xs-1 center\" >\n        <input type=\"checkbox\" checked.bind=\"todo.isCompleted\" />\n      </div>\n      <div class=\"col-xs-6\" >\n        <span>${todo.taskDescription}</span>\n      </div>\n      <div class=\"col-xs-1\" hide.bind=\"editItemIndex != -1\" >\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\" click.trigger=\"editTodo($index)\"></i>\n        <i class=\"fa fa-trash\" aria-hidden=\"true\" click.trigger=\"removeTodo($index)\"></i>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map