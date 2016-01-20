System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TabsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabsComponent = (function () {
                function TabsComponent() {
                    debugger;
                    this.tabs = [];
                }
                TabsComponent.prototype.selectTab = function (tab) {
                    debugger;
                    _deactivateAllTabs(this.tabs);
                    tab.active = true;
                    function _deactivateAllTabs(tabs) {
                        tabs.forEach(function (tab) { return tab.active = false; });
                    }
                };
                TabsComponent.prototype.addTab = function (tab) {
                    if (this.tabs.length === 0) {
                        tab.active = true;
                    }
                    this.tabs.push(tab);
                };
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n        <ul class=\"tabs\" >\n            <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\" >\n                <a href=\"#\" >{{tab.title}}</a>\n            </li>\n        </ul>\n        <ng-content></ng-content>\n    ",
                        styles: ["\n        ul.tabs {\n            border-bottom: 1px solid #ccc;\n        }\n        .tabs li {\n            border-top-left-radius:5px;\n            border-top-right-radius:5px;\n            border-top: 1px solid #ccc;\n            border-left: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            padding: 5px;\n            display: inline-block;\n        }\n        .tabs li:not(.active) {\n            border: 1px solid #ccc;\n            background-color:#ccc;\n        }\n        .tabs li:not(.active) a{\n            text-decoration:none;\n            color: #000;\n        }\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsComponent);
                return TabsComponent;
            })();
            exports_1("TabsComponent", TabsComponent);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map