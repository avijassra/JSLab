System.register(['angular2/core', './todo-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_list_component_1;
    var HelloWorldComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            }],
        execute: function() {
            HelloWorldComponent = (function () {
                function HelloWorldComponent() {
                }
                HelloWorldComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //template: '<h1>Hello, from the other side</h1>'
                        template: "<div>\n                    <h1>Hello, from the other side</h1>\n                    <todo-list>Loading...</todo-list>\n                </div>",
                        directives: [todo_list_component_1.TodoListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorldComponent);
                return HelloWorldComponent;
            })();
            exports_1("HelloWorldComponent", HelloWorldComponent);
        }
    }
});
//# sourceMappingURL=hello-world.component.js.map