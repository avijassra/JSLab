import { Component, Input } from 'angular2/core';
import { TabsComponent, Input } from './tabs.component';

@Component({
    selector: 'tab',
    styles: [`
        .pane {
            padding: 1em;
        }
    `],
    template:`
        <div [hidden]="!active" class="pane" >
            <ng-content></ng-content>
        </div>
    `
})

export class TabComponent {
    @Input('tab-title') title: string ;
    active = this.active || false;
    
    constructor(tabs: TabsComponent) {
        tabs.addTab(this);
    }
}