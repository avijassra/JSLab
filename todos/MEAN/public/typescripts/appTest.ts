class App {
    name: string;
    age: number;
    constructor() {
        this.name = "test";
        this.age = 32;
    }
    
    ShowMessage() {
        alert(this.name);
    }
}

(new App()).ShowMessage();