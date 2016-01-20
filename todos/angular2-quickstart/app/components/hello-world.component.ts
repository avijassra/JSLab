import {Component} from 'angular2/core';
import { TodoListComponent } from './todo-list.component'

@Component({
	selector: 'my-app',
    //template: '<h1>Hello, from the other side</h1>'
	template: `<div>
                    <h1>Hello, from the other side</h1>
                    <todo-list>Loading...</todo-list>
                </div>`,
    directives: [TodoListComponent]
})

export class HelloWorldComponent {
    constructor() {}
    
}