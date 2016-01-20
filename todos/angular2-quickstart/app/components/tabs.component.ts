import { Component } from 'angular2/core';
import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    template:`
        <ul class="tabs" >
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active" >
                <a href="#" >{{tab.title}}</a>
            </li>
        </ul>
        <ng-content></ng-content>
    `,
    styles: [`
        ul.tabs {
            border-bottom: 1px solid #ccc;
        }
        .tabs li {
            border-top-left-radius:5px;
            border-top-right-radius:5px;
            border-top: 1px solid #ccc;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            padding: 5px;
            display: inline-block;
        }
        .tabs li:not(.active) {
            border: 1px solid #ccc;
            background-color:#ccc;
        }
        .tabs li:not(.active) a{
            text-decoration:none;
            color: #000;
        }
        
    `]
})

export class TabsComponent {
    tabs: TabComponent[];
    
    constructor() {
        debugger;
        this.tabs = [];
    }
    
    selectTab(tab) {
        debugger;
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        
        function _deactivateAllTabs(tabs: Tab[]){
            tabs.forEach((tab)=>tab.active = false);
        }
    }
    
    addTab(tab: TabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}