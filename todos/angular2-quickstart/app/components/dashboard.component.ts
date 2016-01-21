import { Component } from 'angular2/core';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { HelloWorldComponent } from './hello-world.component';
import { TodoListComponent } from './todo-list.component';

@Component({
    selector: 'dashboard',
    template: `
        <div>
            <center><h1>My Angular 2.0 App</h1></center>
            <br>
            <br>
            <tabs>
                <tab tab-title="Hello World"><hello-world>Loading...</hello-world></tab>
                <tab tab-title="Todo List"><todo-list>Loading...</todo-list></tab>
            </tabs>
        </div>
    `,
    directives: [TabsComponent, TabComponent, HelloWorldComponent, TodoListComponent]
})

export class DashboardComponent {
}