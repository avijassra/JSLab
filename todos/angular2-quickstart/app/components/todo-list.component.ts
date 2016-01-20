import { HelloWorldComponent } from 'angular2/core';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/list.html',
    styleUrls: ['./app/todo/list.css'],
})
export class TodoListComponent {
    constructor() {
        this.todos = ['learn Angular 2', 'Create Hello World', 'Create Todo App']
    }
}