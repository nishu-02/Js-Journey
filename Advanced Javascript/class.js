class hello{
    message() {
        console.log("Well hello there!");
    }
}

let h = new hello(); //as we this is an object of the class hello
h.message(); // Well hello there!
console.log(typeof h); // obj

// Types of methods:-
// 1. Static methods
// 2. Getter and Setter methods
// 3. Prototype methods
// 4. Constructor method

class employee{
    constructor(name, id) {
        this.name = name;
        this.id = id;
        console.log("Constructor method called.");
    }
    static message() {
        console.log("This is a static method.");
    }
    get empName() {
        return this.name;
    }
    set empName(name) {
        this.name = name;
    }
    empDetails() {
        console.log(`Name: ${this.name} and ID: ${this.id}`);
    }
}

// --------------Inheritance---------------- //

class manager extends employee{
    constructor(name, id, dept) {
        super(name, id); //super is used to call the constructor of the parent class if we dont call it then it will throw an error
        this.dept = dept;
        console.log("Manager constructor called.");
    }

    empDetails() {
        console.log(`Name: ${this.name}, ID: ${this.id} and Dept: ${this.dept}`);
    }
}

let emp = new employee("John", 101);
employee.message

let man1 = new manager("John", 101, "IT");
man1.empDetails();