var App = (function () {
    function App() {
        this.name = "test";
        this.age = 32;
    }
    App.prototype.ShowMessage = function () {
        document.write(this.name);
    };
    return App;
})();
(new App()).ShowMessage();
//# sourceMappingURL=appTest.js.map