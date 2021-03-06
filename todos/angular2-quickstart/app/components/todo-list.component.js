System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                    this.todos = ['learn Angular 2', 'Create Hello World', 'Create Todo App'];
                }
                TodoListComponent.prototype.addNewTodo = function (e, newTodo) {
                    debugger;
                    if (e.which == 13) {
                        this.todos.push(newTodo.value);
                        newTodo.value = "";
                    }
                };
                TodoListComponent.prototype.removeTodoTask = function (i) {
                    this.todos.splice(i, 1);
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: './app/todo/list.html',
                        styleUrls: ['./app/todo/list.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            })();
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map