System.register(['angular2/platform/browser', './Components/dashboard'], function(exports_1) {
    var browser_1, dashboard_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(dashboard_1.DashboardComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map