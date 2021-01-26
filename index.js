// 1) predefine the 3 classes / constructor functions for the 3 types of employeees: manager, engineer, and intern

// 2) get info from the client about each employee to be added
    // 2.1) ask for name and other information of the manager
    // 2.2) ask if client wants to add another employee or exit
    // 2.3) repeat until exit;


// 3) greet and ask for managers name:
        // build an employee of type manager using a constructor (by passing all of the info into the constructor)
        // generate html with info of the employee (by running build command)

// 4) ask client if they want to add more interns or engineers or exit
        // If they want to exit, finish the app
        // If they want to build a new employer, add one to html using the constructor of the appropriate type (i.e. intern vs. engineer vs. etc)

function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHTML = function buildHTML() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.role);
    };
}

function Manager(name, id, role) {
    this.role = role;
    Employee.call(this, name, id );
}

const manager = new Manager('A', 'B', 'C');

manager.buildHTML();