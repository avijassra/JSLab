System.register(['angular2/platform/browser', './components/hello-world.component'], function(exports_1) {
    var browser_1, hello_world_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hello_world_component_1_1) {
                hello_world_component_1 = hello_world_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(hello_world_component_1.HelloWorldComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map