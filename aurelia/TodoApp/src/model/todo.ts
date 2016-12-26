export class Todo {
  taskDescription:string;
  isCompleted: boolean;

  constructor(description: string) {
    this.taskDescription = description;
    this.isCompleted = false;
  }
}
