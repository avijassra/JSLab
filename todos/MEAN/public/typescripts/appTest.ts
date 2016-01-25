class App {
    name: string;
    age: number;
    constructor() {
        this.name = "test";
        this.age = 32;
    }
    
    ShowMessage() {
        document.write(this.name);
    }
}

(new App()).ShowMessage();