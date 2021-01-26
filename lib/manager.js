// Write code to define the Manager class that extends the Employee class and exports it

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => {
        return this.officeNumber;
    }

    getRole = () => {
        return 'Manager';
    }
};

module.exports = Manager;