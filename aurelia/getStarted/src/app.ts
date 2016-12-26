import {Todo} from './todo';

export class App {
  message: string = 'Todo List';
  todos: Todo[] = [];
  taskDescription:string = "";
  editItemIndex: number = -1;

  addTodo(){
    if(this.taskDescription) {
      if(this.editItemIndex == -1) {
        this.todos.push(new Todo(this.taskDescription));
      } else {
        this.todos[this.editItemIndex].taskDescription = this.taskDescription;    
      }   
      this.cancelEditTodo();
    }
  }
  
  editTodo(itemIndex: number) {
    this.taskDescription = this.todos[itemIndex].taskDescription;
    this.editItemIndex = itemIndex;
  }

  removeTodo(itemIndex: number) {
    if(this.editItemIndex == -1) {
      this.todos.splice(itemIndex, 1);
      this.cancelEditTodo();
    }
  }

  cancelEditTodo() {
    this.taskDescription = "";
    this.editItemIndex = -1;
  }
}