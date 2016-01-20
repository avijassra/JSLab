import { Component } from 'angular2/core';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { HelloWorldComponent } from './hello-world.component';
//import { TodoListComponent } from './todo-list.component';

@Component({
    selector: 'dashboard',
    // template: `
    //     <tabs>
    //         <tab [tab-title]="'Hello World'"><hello-world>Loading...</hello-world></tab>
    //         <tab tab-title="Todo List"><todo-list>Loading...</todo-list></tab>
    //     </tabs>
    // `,
    template: `
      <tabs>
        <tab tab-title="Hello World"><hello-world>Loading...</hello-world></tab>
        <tab tab-title="Todo List"><todo-list>Loading...</todo-list></tab>
      </tabs>
    `,
    //directives: [TabsComponent, TabComponent, HelloWorldComponent, TodoListComponent]
    directives: [TabsComponent, TabComponent, HelloWorldComponent]
})

export class DashboardComponent {
}