System.register(['angular2/platform/browser', './components/dashboard.component'], function(exports_1) {
    var browser_1, dashboard_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(dashboard_component_1.DashboardComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map