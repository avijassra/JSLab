System.register(['angular2/core', './tabs.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_component_1;
    var TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent(tabs) {
                    this.active = this.active || false;
                    tabs.addTab(this);
                }
                __decorate([
                    core_1.Input('tab-title'), 
                    __metadata('design:type', String)
                ], TabComponent.prototype, "title", void 0);
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        styles: ["\n        .pane {\n            padding: 1em;\n        }\n    "],
                        template: "\n        <div [hidden]=\"!active\" class=\"pane\" >\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [tabs_component_1.TabsComponent])
                ], TabComponent);
                return TabComponent;
            })();
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=tab.component.js.map