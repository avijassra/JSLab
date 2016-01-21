import { Component } from 'angular2/core';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/list.html',
    styleUrls: ['./app/todo/list.css'],
})
export class TodoListComponent {
    constructor() {
        this.todos = ['learn Angular 2', 'Create Hello World', 'Create Todo App']
    }
    
    addNewTodo(e: any, newTodo: string) {
        debugger;
        if(e.which == 13) {
            this.todos.push(newTodo.value); 
            newTodo.value = "";   
        }
    }
    
    removeTodoTask(i: int) {
        this.todos.splice(i, 1);
    }
}